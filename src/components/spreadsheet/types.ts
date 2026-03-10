export interface SkillBadge {
  label: string;
  icon?: string; // devicon class name, e.g. "devicon-typescript-plain"
  group?: string; // optional grouping label, e.g. "AWS"
  groupIcon?: string; // devicon class for the group label (only needed on first item in group)
}

export interface CellData {
  content?: string; // Markdown content
  colSpan?: number; // merge across columns
  rowSpan?: number; // merge across rows
  className?: string; // additional tailwind/css classes
  href?: string; // make the whole cell a navigable link
  copyText?: string; // shows a copy-to-clipboard button for this value
  skills?: SkillBadge[]; // renders as icon badges instead of markdown
}

export type SpreadsheetData = {
  columns: { width: string }[]; // CSS width for each column
  rows: { height: string }[]; // CSS height for each row
  cells: Record<string, Record<string, CellData>>; // cells[row][col]
  title?: string; // shown in the formula bar
};
