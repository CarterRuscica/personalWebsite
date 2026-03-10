"use client";

import { SpreadsheetData } from "./types";
import SpreadsheetCell from "./SpreadsheetCell";

const COL_LABELS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface SpreadsheetProps {
  data: SpreadsheetData;
}

export default function Spreadsheet({ data }: SpreadsheetProps) {
  const numCols = data.columns.length;
  const numRows = data.rows.length;

  const gridTemplateColumns = `var(--row-header-w) ${data.columns.map((c) => c.width).join(" ")}`;
  const gridTemplateRows = `32px ${data.rows.map((r) => r.height).join(" ")}`;

  // Track which cells are covered by a merge so we don't render empty cells there
  const covered = new Set<string>();
  for (const [rowKey, cols] of Object.entries(data.cells)) {
    const rowIdx = parseInt(rowKey);
    for (const [colKey, cell] of Object.entries(cols)) {
      const colIdx = COL_LABELS.indexOf(colKey);
      const cs = cell.colSpan || 1;
      const rs = cell.rowSpan || 1;
      for (let r = 0; r < rs; r++) {
        for (let c = 0; c < cs; c++) {
          if (r === 0 && c === 0) continue;
          covered.add(`${rowIdx + r}-${colIdx + c}`);
        }
      }
    }
  }

  return (
    <div className="spreadsheet-wrapper">
      <div
        className="spreadsheet-grid"
        style={{ gridTemplateColumns, gridTemplateRows }}
      >
        {/* Corner cell */}
        <div className="header-cell corner-cell" />

        {/* Column headers */}
        {Array.from({ length: numCols }, (_, i) => (
          <div
            key={`col-${i}`}
            className="header-cell col-header"
            style={{ gridColumn: i + 2, gridRow: 1 }}
          >
            {COL_LABELS[i]}
          </div>
        ))}

        {/* Row headers */}
        {Array.from({ length: numRows }, (_, i) => (
          <div
            key={`row-${i}`}
            className="header-cell row-header"
            style={{ gridColumn: 1, gridRow: i + 2 }}
          >
            {i + 1}
          </div>
        ))}

        {/* Data cells */}
        {Object.entries(data.cells).map(([rowKey, cols]) => {
          const rowIdx = parseInt(rowKey);
          return Object.entries(cols).map(([colKey, cell]) => {
            const colIdx = COL_LABELS.indexOf(colKey);
            return (
              <SpreadsheetCell
                key={`${rowKey}-${colKey}`}
                cell={cell}
                colIndex={colIdx}
                rowIndex={rowIdx - 1}
              />
            );
          });
        })}

        {/* Empty cells (gaps not covered by data or merges) */}
        {Array.from({ length: numRows }, (_, r) =>
          Array.from({ length: numCols }, (_, c) => {
            const rowNum = r + 1;
            const colLetter = COL_LABELS[c];
            const hasData = data.cells[String(rowNum)]?.[colLetter];
            const isCovered = covered.has(`${rowNum}-${c}`);
            if (hasData || isCovered) return null;
            return (
              <div
                key={`empty-${r}-${c}`}
                className="spreadsheet-cell empty-cell"
                style={{ gridColumn: c + 2, gridRow: r + 2 }}
              />
            );
          })
        )}
      </div>

      {/* Filler area — CSS background draws gridlines, no extra DOM */}
      <div className="spreadsheet-filler" />
    </div>
  );
}
