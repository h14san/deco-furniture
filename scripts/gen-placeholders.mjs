// Generates simple furniture illustrations as placeholder product images.
// Usage: node scripts/gen-placeholders.mjs
// Replace the output in public/images/ with real photos when available.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");
mkdirSync(out, { recursive: true });

const C = {
  copper: "#b5652b", brown: "#5a3420", dark: "#2f241d", wood: "#c08a5b", oak: "#d3a676",
  sand: "#e8d8c6", olive: "#7d7a4f", teal: "#3f6b6a", rust: "#a4472a", grey: "#6f6a66", cream: "#efe4d6",
};

const shadow = (cx = 400, rx = 170) => `<ellipse cx="${cx}" cy="478" rx="${rx}" ry="12" fill="#000" opacity=".08"/>`;

const officeChair = ({ body = C.dark, mesh = false } = {}) => `
  ${shadow(400, 130)}
  <rect x="392" y="350" width="16" height="85" fill="${C.grey}"/>
  <path d="M300 458 L400 432 L500 458 M400 432 L350 470 M400 432 L450 470" stroke="${C.grey}" stroke-width="12" stroke-linecap="round" fill="none"/>
  ${[300, 350, 450, 500].map((x) => `<circle cx="${x}" cy="${x === 350 || x === 450 ? 472 : 462}" r="9" fill="${C.dark}"/>`).join("")}
  <rect x="330" y="110" width="140" height="200" rx="44" fill="${body}" ${mesh ? 'opacity=".85"' : ""}/>
  ${mesh ? [150, 180, 210, 240, 270].map((y) => `<line x1="345" x2="455" y1="${y}" y2="${y}" stroke="#fff" stroke-opacity=".25" stroke-width="3"/>`).join("") : `<rect x="350" y="135" width="100" height="150" rx="30" fill="#fff" opacity=".08"/>`}
  <rect x="278" y="262" width="26" height="74" rx="12" fill="${C.grey}"/>
  <rect x="496" y="262" width="26" height="74" rx="12" fill="${C.grey}"/>
  <rect x="300" y="300" width="200" height="54" rx="22" fill="${body}"/>`;

const diningChair = ({ seat = C.sand, wood = C.wood } = {}) => `
  ${shadow(400, 110)}
  <rect x="338" y="150" width="14" height="320" rx="6" fill="${wood}"/>
  <rect x="448" y="150" width="14" height="320" rx="6" fill="${wood}"/>
  <rect x="330" y="148" width="140" height="44" rx="10" fill="${wood}"/>
  <rect x="352" y="205" width="96" height="10" rx="5" fill="${wood}" opacity=".8"/>
  <rect x="318" y="318" width="164" height="34" rx="10" fill="${seat}"/>
  <rect x="322" y="350" width="14" height="122" rx="6" fill="${wood}"/>
  <rect x="464" y="350" width="14" height="122" rx="6" fill="${wood}"/>`;

const armchair = ({ body = C.teal } = {}) => `
  ${shadow(400, 150)}
  <rect x="300" y="390" width="10" height="82" rx="4" fill="${C.oak}" transform="rotate(8 305 390)"/>
  <rect x="490" y="390" width="10" height="82" rx="4" fill="${C.oak}" transform="rotate(-8 495 390)"/>
  <rect x="290" y="170" width="220" height="190" rx="70" fill="${body}"/>
  <rect x="268" y="262" width="64" height="130" rx="30" fill="${body}"/>
  <rect x="468" y="262" width="64" height="130" rx="30" fill="${body}"/>
  <rect x="318" y="316" width="164" height="66" rx="24" fill="#fff" opacity=".12"/>
  <rect x="290" y="372" width="220" height="24" rx="10" fill="${body}"/>`;

const execDesk = ({ top = C.oak, base = C.wood, monitor = true } = {}) => `
  ${shadow(400, 230)}
  ${monitor ? `<rect x="292" y="186" width="130" height="84" rx="6" fill="${C.dark}"/><rect x="350" y="270" width="14" height="12" fill="${C.grey}"/><rect x="330" y="278" width="54" height="6" rx="3" fill="${C.grey}"/>` : ""}
  <rect x="190" y="282" width="420" height="24" rx="4" fill="${top}"/>
  <rect x="205" y="306" width="20" height="168" fill="${base}"/>
  <rect x="470" y="306" width="125" height="168" fill="${base}"/>
  ${[350, 400, 445].map((y) => `<line x1="478" x2="587" y1="${y}" y2="${y}" stroke="#000" stroke-opacity=".15" stroke-width="3"/><rect x="520" y="${y - 22}" width="26" height="5" rx="2" fill="#000" opacity=".2"/>`).join("")}`;

const compactDesk = ({ top = C.cream } = {}) => `
  ${shadow(400, 170)}
  <rect x="300" y="236" width="90" height="56" rx="6" fill="${C.dark}" transform="skewX(-10)"/>
  <rect x="250" y="290" width="300" height="18" rx="4" fill="${top}"/>
  <rect x="266" y="308" width="10" height="166" fill="${C.dark}"/>
  <rect x="524" y="308" width="10" height="166" fill="${C.dark}"/>
  <rect x="276" y="420" width="248" height="8" fill="${C.dark}" opacity=".7"/>`;

const lDesk = () => `
  ${shadow(400, 240)}
  <path d="M480 250 L640 250 L640 300 L480 300 Z" fill="${C.wood}" opacity=".75"/>
  <rect x="600" y="300" width="20" height="160" fill="${C.brown}" opacity=".7"/>
  <rect x="300" y="198" width="120" height="76" rx="6" fill="${C.dark}"/>
  <rect x="352" y="274" width="14" height="10" fill="${C.grey}"/>
  <rect x="160" y="284" width="400" height="24" rx="4" fill="${C.wood}"/>
  <rect x="176" y="308" width="20" height="166" fill="${C.brown}"/>
  <rect x="430" y="308" width="115" height="166" fill="${C.brown}"/>
  <line x1="438" x2="537" y1="380" y2="380" stroke="#000" stroke-opacity=".2" stroke-width="3"/>`;

const sofa = ({ body = C.olive, x = 170, w = 460, seats = 3, chaise = false } = {}) => {
  const cw = (w - 40) / seats;
  return `
  ${shadow(x + w / 2, w / 2 + 40)}
  ${[x + 30, x + w - 40].map((lx) => `<rect x="${lx}" y="410" width="12" height="60" rx="4" fill="${C.brown}"/>`).join("")}
  <rect x="${x}" y="215" width="${w}" height="130" rx="34" fill="${body}"/>
  ${Array.from({ length: seats }, (_, i) => `<rect x="${x + 22 + i * cw}" y="232" width="${cw - 8}" height="96" rx="22" fill="#fff" opacity=".1"/>`).join("")}
  <rect x="${x}" y="320" width="${w}" height="94" rx="18" fill="${body}"/>
  ${Array.from({ length: seats - 1 }, (_, i) => `<line x1="${x + 20 + (i + 1) * cw}" x2="${x + 20 + (i + 1) * cw}" y1="326" y2="362" stroke="#000" stroke-opacity=".18" stroke-width="3"/>`).join("")}
  <rect x="${x - 24}" y="275" width="62" height="140" rx="26" fill="${body}"/>
  <rect x="${x + w - 38}" y="275" width="62" height="140" rx="26" fill="${body}"/>
  ${chaise ? `<rect x="${x + w - 180}" y="360" width="204" height="100" rx="18" fill="${body}"/><rect x="${x + w - 180}" y="360" width="204" height="100" rx="18" fill="#000" opacity=".08"/>` : ""}`;
};

const g = (inner, tx, ty, s) => `<g transform="translate(${tx} ${ty}) scale(${s})">${inner}</g>`;

const teamSet = () =>
  `${shadow(400, 280)}
  <rect x="120" y="190" width="560" height="70" rx="6" fill="${C.teal}" opacity=".8"/>
  <line x1="400" x2="400" y1="190" y2="260" stroke="#fff" stroke-opacity=".4" stroke-width="4"/>
  <rect x="110" y="260" width="580" height="20" rx="4" fill="${C.cream}"/>
  <rect x="122" y="280" width="10" height="160" fill="${C.dark}"/><rect x="668" y="280" width="10" height="160" fill="${C.dark}"/><rect x="395" y="280" width="10" height="160" fill="${C.dark}"/>
  ${g(officeChair({ mesh: true }), 30, 190, 0.55)}${g(officeChair({ mesh: true }), 330, 190, 0.55)}`;

const execSuite = () =>
  `${g(execDesk({ top: C.wood, base: C.brown }), 60, 40, 0.85)}
  ${g(officeChair({ body: C.brown }), 140, 160, 0.7)}
  ${g(diningChair({ seat: C.dark, wood: C.brown }), -100, 180, 0.62)}
  ${g(diningChair({ seat: C.dark, wood: C.brown }), 400, 180, 0.62)}`;

const meetingSet = () => {
  const chair = (x, y) => `<rect x="${x}" y="${y}" width="56" height="40" rx="12" fill="${C.dark}"/>`;
  return `${shadow(400, 290)}
  ${[180, 280, 380, 480].map((x) => chair(x + 40, 196)).join("")}
  <rect x="150" y="226" width="500" height="120" rx="60" fill="${C.wood}"/>
  <rect x="170" y="240" width="460" height="92" rx="46" fill="#fff" opacity=".1"/>
  <rect x="280" y="346" width="16" height="120" fill="${C.brown}"/><rect x="504" y="346" width="16" height="120" fill="${C.brown}"/>
  ${[180, 280, 380, 480].map((x) => chair(x + 40, 362)).join("")}`;
};

const items = {
  "ch-101": [officeChair({ body: C.dark }), "#f3ebe2"],
  "ch-102": [officeChair({ body: C.grey, mesh: true }), "#eef0ee"],
  "ch-103": [diningChair({}), "#f5ede3"],
  "ch-104": [armchair({ body: C.teal }), "#f1e7dc"],
  "od-201": [execDesk({}), "#f4ece3"],
  "od-202": [compactDesk({}), "#eeeae5"],
  "od-203": [lDesk(), "#f3eadf"],
  "co-301": [sofa({ body: C.olive }), "#f2ebe0"],
  "co-302": [sofa({ body: C.grey, x: 150, w: 480, seats: 3, chaise: true }), "#eeebe7"],
  "co-303": [sofa({ body: C.rust, x: 260, w: 280, seats: 2 }), "#f5ebe2"],
  "os-401": [teamSet(), "#edefed"],
  "os-402": [execSuite(), "#f3ebe2"],
  "os-403": [meetingSet(), "#f4ede5"],
  hero: [sofa({ body: C.copper, x: 90, w: 420, seats: 3 }) + g(armchair({ body: C.brown }), 395, 150, 0.6), "#f3e6d8"],
};

for (const [name, [body, bg]] of Object.entries(items)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="${bg}"/>
  <rect y="478" width="800" height="122" fill="#000" opacity=".03"/>
  ${body}
</svg>\n`;
  writeFileSync(join(out, `${name}.svg`), svg);
}
console.log(`Wrote ${Object.keys(items).length} images to ${out}`);
