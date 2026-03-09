import { Spreadsheet } from "@/components/spreadsheet";
import data from "./spreadsheet-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Spreadsheet data={data} />
    </main>
  );
}
