import { SpreadsheetData } from "@/components/spreadsheet";

const data: SpreadsheetData = {
  title: "Carter Ruscica — Personal Website",
  columns: [
    { width: "1fr" },   // A — left gutter
    { width: "180px" }, // B
    { width: "200px" }, // C
    { width: "200px" }, // D
    { width: "180px" }, // E
    { width: "180px" }, // F
    { width: "180px" }, // G
    { width: "1fr" },   // H — right gutter
  ],
  rows: [
    { height: "40px" },
    { height: "60px" },
    { height: "120px" },
    { height: "40px" },
    { height: "80px" },
    { height: "80px" },
    { height: "80px" },
    { height: "40px" },
    { height: "40px" },
    { height: "40px" },
  ],
  cells: {
    "1": {
      B: {
        content: "# Carter Ruscica",
        colSpan: 3,
        className: "bg-blue-50",
      },
      E: {
        content: "**Email:** carter@example.com",
        colSpan: 3,
        className: "bg-gray-50",
      },
    },
    "2": {
      B: {
        content: "*Software Engineer & Builder*",
        colSpan: 6,
        className: "bg-blue-50 text-center",
      },
    },
    "3": {
      B: {
        content:
          "## About\n\nI like building things with code. This website is a spreadsheet because why not.",
        colSpan: 3,
        className: "bg-white",
      },
      E: {
        content: "![Profile pic](https://placehold.co/120x80?text=Photo)",
        colSpan: 3,
        className: "bg-white text-center",
      },
    },
    "4": {
      B: {
        content: "## Projects",
        colSpan: 6,
        className: "bg-green-50 font-bold",
      },
    },
    "5": {
      B: {
        content: "**Project Alpha**\n\nA cool thing I built",
        colSpan: 2,
        className: "bg-white",
        href: "#",
      },
      D: {
        content: "**Project Beta**\n\nAnother cool thing",
        colSpan: 2,
        className: "bg-white",
        href: "#",
      },
      F: {
        content: "**Project Gamma**\n\nYet another one",
        colSpan: 2,
        className: "bg-white",
        href: "#",
      },
    },
    "6": {
      B: {
        content: "**Project Delta**\n\nSomething creative",
        colSpan: 2,
        className: "bg-white",
        href: "#",
      },
      D: {
        content: "**Project Epsilon**\n\nOpen source work",
        colSpan: 2,
        className: "bg-white",
        href: "#",
      },
      F: {
        content: "**Project Zeta**\n\nFun experiment",
        colSpan: 2,
        className: "bg-white",
        href: "#",
      },
    },
    "7": {
      B: {
        content: "## Skills",
        colSpan: 2,
        className: "bg-yellow-50",
      },
      D: {
        content: "TypeScript, React, Next.js",
        colSpan: 2,
        className: "bg-white",
      },
      F: {
        content: "Python, Go, Rust",
        colSpan: 2,
        className: "bg-white",
      },
    },
    "8": {
      B: {
        content: "## Links",
        colSpan: 6,
        className: "bg-purple-50",
      },
    },
    "9": {
      B: {
        content: "[GitHub](https://github.com)",
        colSpan: 2,
        className: "bg-white text-center",
        href: "https://github.com",
      },
      D: {
        content: "[LinkedIn](https://linkedin.com)",
        colSpan: 2,
        className: "bg-white text-center",
        href: "https://linkedin.com",
      },
      F: {
        content: "[Twitter](https://twitter.com)",
        colSpan: 2,
        className: "bg-white text-center",
        href: "https://twitter.com",
      },
    },
    "10": {
      B: {
        content: "*Built with Next.js — styled as a spreadsheet*",
        colSpan: 6,
        className: "bg-gray-100 text-center text-xs",
      },
    },
  },
};

export default data;
