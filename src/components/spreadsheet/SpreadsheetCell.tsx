"use client";

import { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { CellData, SkillBadge } from "./types";

interface SpreadsheetCellProps {
  cell: CellData;
  colIndex: number;
  rowIndex: number;
}

function SkillBadges({ skills }: { skills: SkillBadge[] }) {
  // Group skills by their group label
  const grouped: { group: string | null; groupIcon?: string; items: SkillBadge[] }[] = [];
  let currentGroup: string | null = null;
  let currentItems: SkillBadge[] = [];
  let currentGroupIcon: string | undefined;

  for (const skill of skills) {
    const g = skill.group || null;
    if (g !== currentGroup) {
      if (currentItems.length > 0) {
        grouped.push({ group: currentGroup, groupIcon: currentGroupIcon, items: currentItems });
      }
      currentGroup = g;
      currentGroupIcon = skill.groupIcon;
      currentItems = [skill];
    } else {
      currentItems.push(skill);
    }
  }
  if (currentItems.length > 0) {
    grouped.push({ group: currentGroup, groupIcon: currentGroupIcon, items: currentItems });
  }

  return (
    <div className="skill-badges">
      {grouped.map((g, gi) => (
        <span key={gi} className={g.group ? "skill-group" : "skill-group-plain"}>
          {g.group && (
            <span className="skill-group-label">
              {g.groupIcon && <i className={g.groupIcon} />}
              {g.group.trim() && g.group}
            </span>
          )}
          {g.items.map((skill, i) => (
            <span key={i} className="skill-badge">
              {skill.icon && <i className={skill.icon} />}
              {skill.label}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="copy-btn"
      title={copied ? "Copied!" : `Copy ${text}`}
      aria-label={`Copy ${text} to clipboard`}
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
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
  const isExternal = isLink && (cell.href!.startsWith("http") || cell.href!.startsWith("mailto:"));
  const Tag = isLink ? "a" : "div";
  const linkProps = isLink
    ? {
        href: cell.href,
        ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}),
      }
    : {};

  return (
    <Tag
      {...linkProps}
      className={`spreadsheet-cell ${isLink ? "cell-link" : ""} ${cell.className || ""}`}
      style={gridStyle}
    >
      {cell.skills && <SkillBadges skills={cell.skills} />}
      {cell.copyText && <CopyButton text={cell.copyText} />}
      {cell.content && (
        <ReactMarkdown
          components={{
            img: ({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt || ""}
                className="cell-img"
              />
            ),
            a: isLink
              ? ({ children }) => <span>{children}</span>
              : ({ href, children }) => (
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
