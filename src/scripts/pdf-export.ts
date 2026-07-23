const dataNode = document.getElementById("pdf-cv-data");
const rawData = dataNode?.getAttribute("data-json") ?? "";
const parsedData = rawData ? JSON.parse(decodeURIComponent(rawData)) : {};
const cvData = parsedData.cv ?? {};
const skillKindsData: string[] = parsedData.skillKinds ?? [];

const normalizeLineBreaks = (value: string) => value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

const textToPdfText = (value: unknown) =>
  normalizeLineBreaks(String(value ?? ""))
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .trim();

const htmlToPlainText = (value: unknown) => textToPdfText(value ?? "");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildProjectBlock = (project: any, skillsById: Map<string, string>) => {
  const lines: unknown[] = [];

  if (project.period) {
    lines.push({ text: project.period, color: "#58a6ff", bold: true, fontSize: 9, margin: [0, 0, 0, 2] });
  }
  if (project.company) {
    lines.push({ text: project.company, color: "#2f6fb0", bold: true, fontSize: 10, margin: [0, 0, 0, 2] });
  }
  lines.push({ text: project.title, color: "#f0f6fc", bold: true, fontSize: 12, margin: [0, 0, 0, 4] });
  if (project.role) {
    lines.push({ text: project.role, color: "#8b949e", fontSize: 10, margin: [0, 0, 0, 6] });
  }
  lines.push({ text: htmlToPlainText(project.description), margin: [0, 0, 0, 6] });

  if ((project.responsabilities?.length ?? 0) > 0) {
    lines.push({ text: "Responsabilities", color: "#f0f6fc", bold: true, fontSize: 10, margin: [0, 6, 0, 4] });
    lines.push({ ul: project.responsabilities.map((item: unknown) => htmlToPlainText(item)), margin: [0, 0, 0, 6] });
  }

  const skillNames = (project.skills ?? []).map((skillId: string) => skillsById.get(skillId) ?? skillId);
  if (skillNames.length > 0) {
    lines.push({ text: `Skills: ${skillNames.join(" • ")}`, color: "#c9d1d9", fontSize: 9 });
  }

  return { stack: lines, margin: [0, 0, 0, 12] };
};

export const generateAndDownloadPdf = async (btnToUpdate?: HTMLButtonElement | null) => {
  const originalLabel = btnToUpdate?.textContent ?? "Export";
  if (btnToUpdate) {
    btnToUpdate.disabled = true;
    btnToUpdate.textContent = "Generating PDF...";
  }

  try {
    const [pdfMakeModule, pdfFontsModule] = await Promise.all([
      import("pdfmake/build/pdfmake"),
      import("pdfmake/build/vfs_fonts"),
    ]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pdfMake = (pdfMakeModule as any).default ?? pdfMakeModule;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fontVfs = (pdfFontsModule as any)?.default ?? (pdfFontsModule as any)?.["module.exports"] ?? pdfFontsModule;

    if (!fontVfs) {
      throw new Error("Could not resolve pdfmake virtual font data (vfs)");
    }

    pdfMake.addVirtualFileSystem(fontVfs);

    const skillsById = new Map<string, string>(
      (cvData.skills ?? []).map((skill: { id: string; name: string }) => [skill.id, skill.name]),
    );

    const documentDefinition = {
      pageSize: "A4",
      pageMargins: [28, 28, 28, 28],
      background: () => ({ canvas: [{ type: "rect", x: 0, y: 0, w: 595.28, h: 841.89, color: "#0d1117" }] }),
      defaultStyle: { color: "#c9d1d9", fontSize: 10, lineHeight: 1.35 },
      styles: {
        title: { color: "#f0f6fc", bold: true, fontSize: 22, margin: [0, 0, 0, 12] },
        sectionTitle: { color: "#58a6ff", bold: true, fontSize: 14, margin: [0, 14, 0, 8] },
        card: { margin: [0, 0, 0, 14] },
        muted: { color: "#8b949e" },
      },
      content: [
        { text: "Marcus Forte", style: "title" },
        { text: "About", style: "sectionTitle" },
        { text: htmlToPlainText(cvData.about) },

        { text: "Projects", style: "sectionTitle" },
        ...(cvData.projects ?? []).map((project: unknown) => ({
          ...buildProjectBlock(project, skillsById),
          style: "card",
        })),

        { text: "Personal Projects", style: "sectionTitle" },
        ...(cvData.personalProjects ?? []).map((project: unknown) => ({
          ...buildProjectBlock(project, skillsById),
          style: "card",
        })),

        { text: "Education", style: "sectionTitle" },
        ...(cvData.educations ?? []).map(
          (education: { period: string; degree: string; institution: string; course: string }) => ({
            stack: [
              { text: education.period, color: "#58a6ff", bold: true, fontSize: 9 },
              {
                text: `${education.degree} - ${education.institution}`,
                color: "#f0f6fc",
                bold: true,
                margin: [0, 2, 0, 2],
              },
              { text: education.course },
            ],
            margin: [0, 0, 0, 10],
          }),
        ),

        { text: "Skills", style: "sectionTitle" },
        ...skillKindsData.map((kind) => ({
          stack: [
            { text: kind, color: "#f0f6fc", bold: true, margin: [0, 4, 0, 2] },
            {
              text: (cvData.skills ?? [])
                .filter((skill: { kind: string }) => skill.kind === kind)
                .map((skill: { name: string; level: number }) => `${skill.name} (${skill.level}/10)`)
                .join(" • "),
            },
          ],
          margin: [0, 0, 0, 6],
        })),

        { text: "Languages", style: "sectionTitle" },
        {
          ul: (cvData.languages ?? []).map(
            (language: { name: string; level: number }) => `${language.name}: ${language.level}/10`,
          ),
        },

        { text: "Qualifications & Trainings", style: "sectionTitle" },
        { ul: cvData.qualifications ?? [] },

        { text: "Additional Milestones", style: "sectionTitle" },
        { ul: cvData.milestones ?? [] },

        { text: "Contact", style: "sectionTitle" },
        {
          ul: [
            "Email: davi2812@hotmail.com",
            "GitHub: github.com/Marcus-Forte",
            "LinkedIn: linkedin.com/in/marcus-forte-4b500a118",
            "YouTube: youtube.com/@practicalsoftwaremarcus",
          ],
        },
      ],
    };

    pdfMake.createPdf(documentDefinition).download("Marcus-Forte-CV.pdf");
  } catch (error) {
    console.error("PDF export failed", error);
    alert("Could not generate PDF. Please try again.");
  } finally {
    if (btnToUpdate) {
      btnToUpdate.disabled = false;
      btnToUpdate.textContent = originalLabel;
    }
  }
};

const exportButtons = document.querySelectorAll("[data-export-pdf]");

exportButtons.forEach((exportButton) => {
  if (!(exportButton instanceof HTMLButtonElement)) return;

  exportButton.addEventListener("click", async () => {
    await generateAndDownloadPdf(exportButton);
  });
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("export") || urlParams.get("pdf") === "true" || urlParams.get("download") === "pdf") {
  const firstButton = document.querySelector("[data-export-pdf]");
  const buttonEl = firstButton instanceof HTMLButtonElement ? firstButton : null;

  // Clean up URL parameters so it doesn't re-trigger on manual page refresh
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete("export");
  cleanUrl.searchParams.delete("pdf");
  cleanUrl.searchParams.delete("download");
  window.history.replaceState({}, "", cleanUrl.toString());

  generateAndDownloadPdf(buttonEl);
}
