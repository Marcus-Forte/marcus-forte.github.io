export type LaneKind = "node" | "present" | "end" | "line";

export interface LaneCell {
  kind: LaneKind;
  up: boolean;
  down: boolean;
}

export interface TimelineRow<T> {
  item: T;
  cells: (LaneCell | null)[];
}

export interface Timeline<T> {
  lanes: number;
  rows: TimelineRow<T>[];
}

const parseMonth = (value: string): number => {
  const [month, year] = value.trim().split("/").map(Number);
  return year * 12 + (month - 1);
};

// "MM/YYYY - MM/YYYY" or "MM/YYYY - Current"; end is Infinity when ongoing.
const parsePeriod = (period: string): { start: number; end: number; present: boolean } => {
  const [from, to = ""] = period.split(" - ");
  const present = !/^\d{1,2}\/\d{4}$/.test(to.trim());
  return { start: parseMonth(from), end: present ? Infinity : parseMonth(to), present };
};

/**
 * Lays items out as a git-graph style timeline: newest start first, one lane
 * per concurrent item. Each item draws a line from its start node up to its end
 * marker (or to the top when ongoing), so several "present" nodes can coexist.
 */
export function buildTimeline<T extends { period?: string }>(items: T[]): Timeline<T> {
  const parsed = items
    .map((item, index) => ({ item, index, ...parsePeriod(item.period ?? "") }))
    .sort((a, b) => b.start - a.start || a.index - b.index);

  // Greedy lane assignment in chronological order; finished items free their lane.
  const laneOf = new Map<number, number>();
  const laneEnds: number[] = [];
  [...parsed]
    .sort((a, b) => a.start - b.start || b.index - a.index)
    .forEach((entry) => {
      let lane = laneEnds.findIndex((end) => end <= entry.start);
      if (lane === -1) {
        lane = laneEnds.length;
        laneEnds.push(entry.end);
      } else {
        laneEnds[lane] = entry.end;
      }
      laneOf.set(entry.index, lane);
    });

  const lanes = laneEnds.length;
  const rows: TimelineRow<T>[] = parsed.map(({ item }) => ({
    item,
    cells: Array<LaneCell | null>(lanes).fill(null),
  }));

  parsed.forEach((entry, row) => {
    const lane = laneOf.get(entry.index) as number;

    // Topmost row that still starts while this item is running.
    let top = row;
    while (top > 0 && parsed[top - 1].start < entry.end) top--;

    if (entry.present) {
      rows[row].cells[lane] = { kind: "present", up: true, down: false };
      for (let r = 0; r < row; r++) rows[r].cells[lane] = { kind: "line", up: true, down: true };
      return;
    }

    rows[row].cells[lane] = { kind: "node", up: top < row, down: false };
    if (top < row) {
      rows[top].cells[lane] = { kind: "end", up: false, down: true };
      for (let r = top + 1; r < row; r++) rows[r].cells[lane] = { kind: "line", up: true, down: true };
    }
  });

  return { lanes, rows };
}
