"use client";

import ReactMarkdown from "react-markdown";
import { CellData } from "./types";

interface SpreadsheetCellProps {
  cell: CellData;
  colIndex: number;
  rowIndex: number;
}

export default function SpreadsheetCell({
  cell,
  colIndex,
  rowIndex,
}: SpreadsheetCellProps) {
  const gridStyle: React.CSSProperties = {
    gridColumn: `${colIndex + 2} / span ${cell.colSpan || 1}`,
    gridRow: `${rowIndex + 2} / span ${cell.rowSpan || 1}`,
  };

  const isLink = !!cell.href;
  const Tag = isLink ? "a" : "div";
  const linkProps = isLink
    ? {
        href: cell.href,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Tag
      {...linkProps}
      className={`spreadsheet-cell ${isLink ? "cell-link" : ""} ${cell.className || ""}`}
      style={gridStyle}
    >
      {cell.content && (
        <ReactMarkdown
          components={{
            img: ({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt || ""}
                className="inline-block max-w-full max-h-full object-contain"
              />
            ),
            a: isLink
              ? // When the whole cell is a link, render inner markdown links as plain text
                ({ children }) => <span>{children}</span>
              : // Otherwise render normal links
                ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {children}
                  </a>
                ),
          }}
        >
          {cell.content}
        </ReactMarkdown>
      )}
    </Tag>
  );
}
