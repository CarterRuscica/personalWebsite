import { SpreadsheetData } from "@/components/spreadsheet";

const data: SpreadsheetData = {
  title: "Experience",
  columns: [
    { width: "minmax(0, 4fr)" }, // A — left gutter (collapses on narrow)
    { width: "9fr" },  // B
    { width: "10fr" }, // C
    { width: "10fr" }, // D
    { width: "9fr" },  // E
    { width: "9fr" },  // F
    { width: "9fr" },  // G
    { width: "minmax(0, 4fr)" }, // H — right gutter (collapses on narrow)
  ],
  rows: [
    { height: "minmax(40px, auto)" },  // 1 - Title
    { height: "minmax(52px, auto)" },  // 2 - AeroVect header
    { height: "minmax(150px, auto)" }, // 3 - AeroVect details
    { height: "minmax(52px, auto)" },  // 4 - Amazon SDE header
    { height: "minmax(120px, auto)" }, // 5 - Amazon SDE details
    { height: "minmax(52px, auto)" },  // 6 - Amazon Intern 2021 header
    { height: "minmax(100px, auto)" }, // 7 - Amazon Intern 2021 details
    { height: "minmax(52px, auto)" },  // 8 - Amazon Intern 2020 header
    { height: "minmax(80px, auto)" },  // 9 - Amazon Intern 2020 details
    { height: "minmax(52px, auto)" },  // 10 - Sun Life Program Developer header
    { height: "minmax(80px, auto)" },  // 11 - Sun Life Program Developer details
    { height: "minmax(52px, auto)" },  // 12 - Sun Life PPA header
    { height: "minmax(80px, auto)" },  // 13 - Sun Life PPA details
  ],
  cells: {
    "1": {
      B: {
        content: "# Experience",
        colSpan: 6,
        className: "bg-green-50",
      },
    },

    // ── AeroVect ──
    "2": {
      B: {
        content: "**AeroVect** — *Fullstack Developer II*\n\n*Autonomous ground vehicle technology for airport operations*",
        colSpan: 4,
        className: "bg-green-50",
      },
      F: {
        content: "**Nov 2024 — Present** | Remote",
        colSpan: 2,
        className: "bg-green-50",
      },
    },
    "3": {
      B: {
        content: "- Architected an **end-to-end logging and telemetry ecosystem** with real-time cloud data persistence\n- Built a **custom 3D visualization interface** to replace RViz for autonomous vehicle monitoring\n- Migrated backend from Flask to C++, **cutting CPU usage from 4% to under 1%**\n- Built **ETL pipeline and REST API** to process and serve autonomous vehicle performance data\n- Designed **operator interface** enabling non-technical staff to perform calibration and debugging",
        colSpan: 4,
        className: "bg-white",
      },
      F: {
        colSpan: 2,
        className: "bg-white",
        skills: [
          { label: "TypeScript", icon: "devicon-typescript-plain colored" },
          { label: "C++", icon: "devicon-cplusplus-plain colored" },
          { label: "Python", icon: "devicon-python-plain colored" },
          { label: "React", icon: "devicon-react-original colored" },
          { label: "Three.js", icon: "devicon-threejs-original" },
          { label: "Docker", icon: "devicon-docker-plain colored" },
          { label: "Electron", icon: "devicon-electron-original colored" },
          { label: "ROS2" },
          { label: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        ],
      },
    },

    // ── Amazon SDE ──
    "4": {
      B: {
        content: "**Amazon** — *Software Development Engineer*\n\n*Customer Service technology — refund and resolution tools at scale*",
        colSpan: 4,
        className: "bg-green-50",
      },
      F: {
        content: "**May 2022 — Feb 2024** | Toronto, ON",
        colSpan: 2,
        className: "bg-green-50",
      },
    },
    "5": {
      B: {
        content: "- Architected **refund eligibility API** enhancements improving transparency for all Amazon customers\n- Developed **reusable React components** adopted across multiple application containers\n- Enhanced **batch refund processing** for multi-item orders, cutting resolution time from **60 minutes to 4 minutes**",
        colSpan: 4,
        className: "bg-white",
      },
      F: {
        colSpan: 2,
        className: "bg-white",
        skills: [
          { label: "TypeScript", icon: "devicon-typescript-plain colored" },
          { label: "React", icon: "devicon-react-original colored" },
          { label: "Java", icon: "devicon-java-plain colored" },
          { label: "GraphQL", icon: "devicon-graphql-plain colored" },
          { label: "Webpack", icon: "devicon-webpack-plain colored" },
          { label: "Selenium", icon: "devicon-selenium-original colored" },
          { label: "Docker", icon: "devicon-docker-plain colored" },
          { label: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        ],
      },
    },

    // ── Amazon Intern (2021) ──
    "6": {
      B: {
        content: "**Amazon** — *Software Development Engineer Intern*\n\n*Customer Service technology — legacy application modernization*",
        colSpan: 4,
        className: "bg-green-50",
      },
      F: {
        content: "**May 2021 — Jul 2021** | Toronto, ON",
        colSpan: 2,
        className: "bg-green-50",
      },
    },
    "7": {
      B: {
        content: "- Migrated **critical legacy application features** through cross-functional coordination with security, product management, and SMEs\n- Delivered a **production-ready solution** serving hundreds of thousands of Amazon customers",
        colSpan: 4,
        className: "bg-white",
      },
      F: {
        colSpan: 2,
        className: "bg-white",
        skills: [
          { label: "TypeScript", icon: "devicon-typescript-plain colored" },
          { label: "React", icon: "devicon-react-original colored" },
          { label: "Java", icon: "devicon-java-plain colored" },
          { label: "GraphQL", icon: "devicon-graphql-plain colored" },
          { label: "Jest", icon: "devicon-jest-plain colored" },
          { label: "Enzyme" },
          { label: "JUnit", icon: "devicon-junit-plain colored" },
        ],
      },
    },

    // ── Amazon Intern (2020) ──
    "8": {
      B: {
        content: "**Amazon** — *Software Development Engineer Intern*\n\n*Customer Service technology — test data infrastructure*",
        colSpan: 4,
        className: "bg-green-50",
      },
      F: {
        content: "**Feb 2020 — Apr 2020** | Toronto, ON",
        colSpan: 2,
        className: "bg-green-50",
      },
    },
    "9": {
      B: {
        content: "- Built **production data management API** with autonomous generation and storage capabilities\n- Enabled developers to access **realistic test datasets**, improving department-wide testing efficiency",
        colSpan: 4,
        className: "bg-white",
      },
      F: {
        colSpan: 2,
        className: "bg-white",
        skills: [
          { label: "Java", icon: "devicon-java-plain colored" },
          { label: "Lambda", group: " ", groupIcon: "devicon-amazonwebservices-plain-wordmark colored" },
          { label: "API Gateway", group: " " },
          { label: "Step Functions", group: " " },
          { label: "DynamoDB", group: " " },
          { label: "NoSQL" },
        ],
      },
    },

    // ── Sun Life Financial — Program Developer (promoted) ──
    "10": {
      B: {
        content: "**Sun Life Financial** — *Program Developer*\n\n*Group benefits — billing automation and data processing*",
        colSpan: 4,
        className: "bg-green-50",
      },
      F: {
        content: "**Aug 2019 — May 2021** | Toronto, ON",
        colSpan: 2,
        className: "bg-green-50",
      },
    },
    "11": {
      B: {
        content: "- Designed and implemented a **VBA-based automation pipeline** for benefits billing\n- Extracted and aggregated data across **PDF and XLSX files**, cutting processing time from **hours to minutes**",
        colSpan: 4,
        className: "bg-white",
      },
      F: {
        colSpan: 2,
        className: "bg-white",
        skills: [
          { label: "Excel" },
          { label: "VBA" },
          { label: "Outlook" },
        ],
      },
    },

    // ── Sun Life Financial — Payment Processing Administrator ──
    "12": {
      B: {
        content: "**Sun Life Financial** — *Payment Processing Administrator*\n\n*Group benefits — payment reconciliation and client accounts*",
        colSpan: 4,
        className: "bg-green-50",
      },
      F: {
        content: "**May 2018 — Aug 2019** | Toronto, ON",
        colSpan: 2,
        className: "bg-green-50",
      },
    },
    "13": {
      B: {
        content: "- Processed and reconciled **benefits payments** across multiple client accounts\n- Identified inefficiencies in manual workflows, **leading to promotion** to Program Developer",
        colSpan: 4,
        className: "bg-white",
      },
      F: {
        colSpan: 2,
        className: "bg-white",
        skills: [
          { label: "Excel" },
          { label: "Outlook" },
        ],
      },
    },
  },
};

export default data;
