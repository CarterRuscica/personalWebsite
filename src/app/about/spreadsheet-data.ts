import { SpreadsheetData } from "@/components/spreadsheet";

const data: SpreadsheetData = {
  title: "More About Me",
  columns: [
    { width: "minmax(0, 1fr)" }, // A — left gutter (collapses on narrow)
    { width: "9fr" },  // B
    { width: "10fr" }, // C
    { width: "10fr" }, // D
    { width: "9fr" },  // E
    { width: "9fr" },  // F
    { width: "9fr" },  // G
    { width: "minmax(0, 1fr)" }, // H — right gutter (collapses on narrow)
  ],
  rows: [
    { height: "minmax(40px, auto)" },   // 1 - Title
    { height: "minmax(200px, auto)" },  // 2 - Intro + cycling photo
    { height: "minmax(36px, auto)" },   // 3 - Cycling header
    { height: "minmax(200px, auto)" },  // 4 - Race wins photos + description
    { height: "minmax(36px, auto)" },   // 5 - Travel header
    { height: "minmax(200px, auto)" },  // 6 - Travel photos + description
    { height: "minmax(36px, auto)" },   // 7 - What I value header
    { height: "minmax(120px, auto)" },  // 8 - Values
    { height: "minmax(36px, auto)" },   // 9 - Fun facts header
    { height: "minmax(160px, auto)" },  // 10 - Fun facts + goat photo
  ],
  cells: {
    // ── Title ──
    "1": {
      B: {
        content: "# More About Me",
        colSpan: 6,
        className: "bg-blue-50",
      },
    },

    // ── Intro + cycling background photo ──
    "2": {
      B: {
        content: "## Beyond the Code\n\nWhen I'm not building software, I'm usually on a bike, exploring somewhere new, or in the kitchen experimenting with a recipe. I'm drawn to things that push me outside my comfort zone — racing in a peloton, navigating a night market in Taiwan, or learning to fly a Cessna 152.",
        colSpan: 3,
        className: "bg-white",
      },
      E: {
        content: "![Cycling through the countryside](/assets/background_style_cycle.jpg)",
        colSpan: 3,
        className: "bg-white",
      },
    },

    // ── Cycling header ──
    "3": {
      B: {
        content: "## Competitive Cycling",
        colSpan: 6,
        className: "bg-orange-50",
      },
    },

    // ── Race wins photos + description ──
    "4": {
      B: {
        content: "![First Tour di Via Italia win](/assets/tdvi_first_win.jpg)",
        colSpan: 2,
        className: "bg-white text-center",
      },
      D: {
        content: "Road cycling is my main sport; I race competitively and train year-round. Two of my proudest moments are my wins at the **Tour di Via Italia**, a road race in the Windsor, Ontario.",
        colSpan: 2,
        className: "bg-white",
      },
      F: {
        content: "![Second Tour di Via Italia win](/assets/tdvi_second_win.jpg)",
        colSpan: 2,
        className: "bg-white text-center",
      },
    },

    // ── Travel header ──
    "5": {
      B: {
        content: "## Travel & New Experiences",
        colSpan: 6,
        className: "bg-teal-50",
      },
    },

    // ── Travel photos + description ──
    "6": {
      B: {
        content: "![Wrestling an octopus in Taiwan](/assets/wrestle_octopus.jpg)",
        colSpan: 2,
        className: "bg-white text-center",
      },
      D: {
        content: "I love immersing myself in unfamiliar places; trying street food I butcher when I try to pronounce it, wandering without a plan, and finding the weird and wonderful along the way. Traveling aroung Asia is such a highlight for me. I'm also big on **cooking**, trying new cuisines, and staying active outside of cycling.",
        colSpan: 2,
        className: "bg-white",
      },
      F: {
        content: "![Making friends with a dolphin statue](/assets/love_dolphin.jpg)",
        colSpan: 2,
        className: "bg-white text-center",
      },
    },

    // ── Values header ──
    "7": {
      B: {
        content: "## What I Value",
        colSpan: 6,
        className: "bg-rose-50",
      },
    },

    // ── Values ──
    "8": {
      B: {
        content: "- **Craftsmanship** — I care about building things well, not just getting them done\n- **Curiosity** — I'm happiest when I'm learning something new\n- **Ownership** — I see things through from start to finish\n- **Simplicity** — The best solutions make complex systems feel intuitive\n- **Grit** — I don't quit when things get hard",
        colSpan: 6,
        className: "bg-white",
      },
    },

    // ── Fun facts header ──
    "9": {
      B: {
        content: "## Fun Facts",
        colSpan: 6,
        className: "bg-cyan-50",
      },
    },

    // ── Fun facts + goat photo ──
    "10": {
      B: {
        content: "- I've **flown a plane** — a Cessna 152\n- I once **walked a baby goat** on a leash and it was the highlight of my week\n- I am proud of my navigation skills and rarely get _that_ lost.\n     -- There was a time in Japan I almost accidentally stranded myself though.\n- This website is styled as a **spreadsheet** because as much as I hate Excel, I really do think it's a fantastic program!",
        colSpan: 3,
        className: "bg-white",
      },
      E: {
        content: "![Walking a baby goat](/assets/walking_a_goat.png)",
        colSpan: 3,
        className: "bg-white text-center",
      },
    },
  },
};

export default data;
