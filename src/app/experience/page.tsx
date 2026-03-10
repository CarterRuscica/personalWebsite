import { Spreadsheet, SheetTabs } from "@/components/spreadsheet";
import data from "./spreadsheet-data";
import tabs from "../tabs";

export default function Experience() {
  return (
    <main className="min-h-screen bg-white flex flex-col pb-[42px]">
      <div className="flex-1">
        <Spreadsheet data={data} />
      </div>
      <SheetTabs tabs={tabs} />
    </main>
  );
}
