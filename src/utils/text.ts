export const normalizeLineBreaks = (value: string) => value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

export const textToHtmlBreaks = (value: string) => normalizeLineBreaks(value.trim()).replace(/\n/g, "<br />");

export const textToPdfText = (value: string) =>
  normalizeLineBreaks(value)
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .trim();
