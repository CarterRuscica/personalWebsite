"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export interface SheetTab {
  label: string;
  href: string;
}

interface SheetTabsProps {
  tabs: SheetTab[];
}

export default function SheetTabs({ tabs }: SheetTabsProps) {
  const pathname = usePathname();

  return (
    <div className="sheet-tab-bar">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`sheet-tab ${isActive ? "sheet-tab-active" : ""}`}
          >
            {tab.label}
          </Link>
        );
      })}
      <div className="sheet-tab-fill" />
    </div>
  );
}
