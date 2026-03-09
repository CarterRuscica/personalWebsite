export interface CellData {
  content?: string; // Markdown content
  colSpan?: number; // merge across columns
  rowSpan?: number; // merge across rows
  className?: string; // additional tailwind/css classes
  href?: string; // make the whole cell a navigable link
}

export type SpreadsheetData = {
  columns: { width: string }[]; // CSS width for each column
  rows: { height: string }[]; // CSS height for each row
  cells: Record<string, Record<string, CellData>>; // cells[row][col]
  title?: string; // shown in the formula bar
};
