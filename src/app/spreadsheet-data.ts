import { SpreadsheetData } from "@/components/spreadsheet";

const data: SpreadsheetData = {
  title: "Carter Ruscica — Personal Website",
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
    { height: "minmax(48px, auto)" },  // 1 - Name + contact
    { height: "minmax(32px, auto)" },  // 2 - Subtitle
    { height: "minmax(140px, auto)" }, // 3 - About + photo
    { height: "minmax(36px, auto)" },  // 4 - Experience header
    { height: "minmax(100px, auto)" }, // 5 - AeroVect
    { height: "minmax(100px, auto)" }, // 6 - Amazon SDE
    { height: "minmax(36px, auto)" },  // 7 - Skills header
    { height: "minmax(44px, auto)" },  // 8 - Languages
    { height: "minmax(44px, auto)" },  // 9 - Frameworks
    { height: "minmax(44px, auto)" },  // 10 - AWS
    { height: "minmax(44px, auto)" },  // 11 - Infrastructure
    { height: "minmax(44px, auto)" },  // 12 - Tools
    { height: "minmax(36px, auto)" },  // 13 - Projects header
    { height: "minmax(80px, auto)" },  // 14 - Projects row
    { height: "minmax(36px, auto)" },  // 15 - Education header
    { height: "minmax(60px, auto)" },  // 16 - Education
    { height: "minmax(36px, auto)" },  // 17 - Links header
    { height: "minmax(40px, auto)" },  // 18 - Links
    { height: "minmax(32px, auto)" },  // 19 - Footer
  ],
  cells: {
    // ── Header ──
    "1": {
      B: {
        content: "# Carter Ruscica",
        colSpan: 3,
        className: "bg-blue-50 cell-name",
      },
      E: {
        content: "**carterruscica@gmail.com**",
        colSpan: 3,
        className: "bg-gray-50 cell-email",
        href: "mailto:carterruscica@gmail.com",
        copyText: "carterruscica@gmail.com",
      },
    },
    "2": {
      B: {
        content: "**Fullstack Developer**",
        colSpan: 6,
        className: "bg-blue-50 text-center cell-subtitle",
      },
    },

    // ── About + Photo ──
    "3": {
      B: {
        content:
          "## About\n\nFullstack developer with experience across autonomous vehicles, e-commerce at scale, and financial automation.\n\nI like building things that make complex systems feel simple.",
        colSpan: 4,
        className: "bg-white",
      },
      F: {
        content: "![Carter Ruscica](/assets/jolly_fella.png)",
        colSpan: 2,
        className: "bg-white text-center",
      },
    },

    // ── Experience (highlights only) ──
    "4": {
      B: {
        content: "## Experience",
        colSpan: 6,
        className: "bg-green-50",
      },
    },
    "5": {
      B: {
        content: "**AeroVect**\n\n*Fullstack Developer II*\n\nNov 2024 — Present",
        colSpan: 2,
        className: "bg-white",
      },
      D: {
        content: "Built 3D vehicle telemetry UI and logging ecosystem. Migrated backend from Flask to C++, cutting CPU usage from 4% to under 1%.",
        colSpan: 4,
        className: "bg-white",
      },
    },
    "6": {
      B: {
        content: "**Amazon**\n\n*Software Development Engineer*\n\nMay 2022 — Feb 2024",
        colSpan: 2,
        className: "bg-white",
      },
      D: {
        content: "Refund eligibility APIs, reusable React component library, and batch processing that cut agent resolution time from 60 minutes to 4 minutes.",
        colSpan: 4,
        className: "bg-white",
      },
    },

    // ── Skills ──
    "7": {
      B: {
        content: "## Skills",
        colSpan: 6,
        className: "bg-yellow-50",
      },
    },
    "8": {
      B: {
        content: "**Languages**",
        className: "bg-yellow-50",
      },
      C: {
        colSpan: 5,
        className: "bg-white",
        skills: [
          { label: "TypeScript", icon: "devicon-typescript-plain colored" },
          { label: "JavaScript", icon: "devicon-javascript-plain colored" },
          { label: "Java", icon: "devicon-java-plain colored" },
          { label: "Python", icon: "devicon-python-plain colored" },
          { label: "C++", icon: "devicon-cplusplus-plain colored" },
          { label: "HTML/CSS", icon: "devicon-html5-plain colored" },
        ],
      },
    },
    "9": {
      B: {
        content: "**Frameworks**",
        className: "bg-yellow-50",
      },
      C: {
        colSpan: 5,
        className: "bg-white",
        skills: [
          { label: "React", icon: "devicon-react-original colored" },
          { label: "Node.js", icon: "devicon-nodejs-plain colored" },
          { label: "Express", icon: "devicon-express-original" },
          { label: "Flask", icon: "devicon-flask-original" },
          { label: "Electron", icon: "devicon-electron-original colored" },
          { label: "Three.js", icon: "devicon-threejs-original" },
        ],
      },
    },
    "10": {
      B: {
        content: "**Cloud**",
        className: "bg-yellow-50",
      },
      C: {
        colSpan: 5,
        className: "bg-white",
        skills: [
          { label: "Lambda", group: " ", groupIcon: "devicon-amazonwebservices-plain-wordmark colored" },
          { label: "S3", group: " " },
          { label: "DynamoDB", group: " " },
          { label: "ECR", group: " " },
          { label: "Fargate", group: " " },
          { label: "Batch", group: " " },
          { label: "API Gateway", group: " " },
          { label: "EC2", group: " " },
          { label: "CloudWatch", group: " " },
          { label: "Amplify", group: " " }
        ],
      },
    },
    "11": {
      B: {
        content: "**Infrastructure**",
        className: "bg-yellow-50",
      },
      C: {
        colSpan: 5,
        className: "bg-white",
        skills: [
          { label: "Docker", icon: "devicon-docker-plain colored" },
          { label: "Docker Compose", icon: "devicon-docker-plain colored" },
          { label: "CI/CD", icon: "devicon-githubactions-plain colored" },
          { label: "Linux", icon: "devicon-linux-plain" },
        ],
      },
    },
    "12": {
      B: {
        content: "**Tools**",
        className: "bg-yellow-50",
      },
      C: {
        colSpan: 5,
        className: "bg-white",
        skills: [
          { label: "GraphQL", icon: "devicon-graphql-plain colored" },
          { label: "Git", icon: "devicon-git-plain colored" },
          { label: "Webpack", icon: "devicon-webpack-plain colored" },
          { label: "ROS2" },
          { label: "NoSQL" },
        ],
      },
    },

    // ── Projects ──
    "13": {
      B: {
        content: "## Projects",
        colSpan: 6,
        className: "bg-indigo-50",
      },
    },
    "14": {
      B: {
        content: "**Couple Games**\n\nReal-time multiplayer game platform with room-based matchmaking. Includes Connect Four, Minesweeper Flags, Matching Game, and Word Guesser. Built with Next.js, FastAPI, and SSE.",
        colSpan: 3,
        className: "bg-white",
        href: "https://games.builtbycarter.ca",
      },
      E: {
        content: "*More projects coming soon...*",
        colSpan: 3,
        className: "bg-white",
      },
    },

    // ── Education ──
    "15": {
      B: {
        content: "## Education",
        colSpan: 6,
        className: "bg-teal-50",
      },
    },
    "16": {
      B: {
        content: "**Wilfrid Laurier University**\n\nB.Sc. Computer Science, Minor in Mathematics",
        colSpan: 3,
        className: "bg-white",
      },
      E: {
        content: "*Graduated Apr 2022*\n\nWaterloo, ON",
        colSpan: 3,
        className: "bg-white",
      },
    },

    // ── Links ──
    "17": {
      B: {
        content: "## Links",
        colSpan: 6,
        className: "bg-purple-50",
      },
    },
    "18": {
      B: {
        content: "**GitHub**",
        colSpan: 2,
        className: "bg-white text-center",
        href: "https://github.com/CarterRuscica",
      },
      D: {
        content: "**LinkedIn**",
        colSpan: 2,
        className: "bg-white text-center",
        href: "https://linkedin.com/in/CarterRuscica",
      },
      F: {
        content: "**Email**",
        colSpan: 2,
        className: "bg-white text-center",
        href: "mailto:carterruscica@gmail.com",
      },
    },

    // ── Footer ──
    "19": {
      B: {
        content: "*Built with Next.js — styled as a spreadsheet*",
        colSpan: 6,
        className: "bg-gray-100 text-center text-xs",
      },
    },
  },
};

export default data;
