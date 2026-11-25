// Demo catalogue.
// `photo` is a SAMPLE stock photo (Unsplash License) shown with a "Sample photo"
// label until real showroom photos exist. Swap `photo` for your own file in
// /public/images/photos/ and delete `credit`. `focus` is the CSS object-position
// used when the photo is cropped. `image` is the old generated placeholder, kept
// as a fallback.
window.CATEGORIES = [
  { id: "chairs", name: "Chairs", blurb: "Dining, accent and office seating built for long days." },
  { id: "office-desks", name: "Office Desks", blurb: "Executive, compact and L-shaped desks for any workspace." },
  { id: "couches", name: "Couches", blurb: "Sofas and sectionals for living rooms and lounges." },
  { id: "office-sets", name: "Office Sets", blurb: "Complete fit-outs for teams, managers and meeting rooms." },
];

const U = (id) => `https://unsplash.com/photos/${id}`;

window.PRODUCTS = [
  // Chairs
  { id: "CH-101", category: "chairs", name: "Executive Leather Office Chair", featured: true,
    image: "images/ch-101.svg", photo: "images/photos/ch-101.webp", focus: "50% 70%",
    credit: { by: "Florian Schmetz", url: U("2ARQfzpg--E") },
    desc: "High-back executive chair with padded armrests, tilt lock and smooth-rolling castors.",
    specs: ["PU leather", "Height adjustable", "Tilt & lock"] },
  { id: "CH-102", category: "chairs", name: "Mesh Ergonomic Chair",
    image: "images/ch-102.svg", photo: "images/photos/ch-102.webp", focus: "55% 70%",
    credit: { by: "Matúš Gocman", url: U("k1xmKlq7hAw") },
    desc: "Breathable mesh back with lumbar support — ideal for open-plan offices.",
    specs: ["Mesh back", "Lumbar support", "Adjustable arms"] },
  { id: "CH-103", category: "chairs", name: "Nordic Dining Chair",
    image: "images/ch-103.svg", photo: "images/photos/ch-103.webp", focus: "40% 60%",
    credit: { by: "Costa Live", url: U("SOeq3VXKfQE") },
    desc: "Solid wood legs and a cushioned seat. Sold individually or in sets of 4 or 6.",
    specs: ["Solid wood legs", "Fabric seat", "Stackable"] },
  { id: "CH-104", category: "chairs", name: "Velvet Accent Armchair", featured: true,
    image: "images/ch-104.svg", photo: "images/photos/ch-104.webp", focus: "60% 65%",
    credit: { by: "Coco Tafoya", url: U("v8YJvprCXx4") },
    desc: "A statement armchair in soft velvet for living rooms, lobbies and reception areas.",
    specs: ["Velvet upholstery", "Metal legs", "Several colours"] },

  // Office desks
  { id: "OD-201", category: "office-desks", name: "Oak Executive Desk", featured: true,
    image: "images/od-201.svg", photo: "images/photos/od-201.webp", focus: "50% 72%",
    credit: { by: "ergonofis", url: U("tdnYk4qOGhc") },
    desc: "Wide executive desk with lockable drawer pedestal and cable management.",
    specs: ["180 × 80 cm", "Lockable drawers", "Cable tray"] },
  { id: "OD-202", category: "office-desks", name: "Compact Work Desk",
    image: "images/od-202.svg", photo: "images/photos/od-202.webp", focus: "50% 62%",
    credit: { by: "James McDonald", url: U("3d4sSUChunA") },
    desc: "Space-saving desk for home offices and small workstations.",
    specs: ["120 × 60 cm", "Steel frame", "Easy assembly"] },
  { id: "OD-203", category: "office-desks", name: "L-Shaped Manager Desk",
    image: "images/od-203.svg", photo: "images/photos/od-203.webp", focus: "50% 55%",
    credit: { by: "Roberto Nickson", url: U("LKGwdezdqSk") },
    desc: "Corner desk with a return wing for a second screen and paperwork.",
    specs: ["160 × 140 cm", "Left or right return", "Side cabinet"] },

  // Couches
  { id: "CO-301", category: "couches", name: "Classic 3-Seater Sofa", featured: true,
    image: "images/co-301.svg", photo: "images/photos/co-301.webp", focus: "50% 68%",
    credit: { by: "Costa Live", url: U("upT3v0yLnvk") },
    desc: "Deep seats, firm cushions and a durable woven fabric for everyday family use.",
    specs: ["3 seats", "Removable covers", "Hardwood frame"] },
  { id: "CO-302", category: "couches", name: "Corner Sectional",
    image: "images/co-302.svg", photo: "images/photos/co-302.webp", focus: "50% 60%",
    credit: { by: "Clay Banks", url: U("FI4ZN6aaWQ0") },
    desc: "L-shaped sectional that fits neatly into living-room corners. Seats up to 6.",
    specs: ["Seats 5–6", "Reversible chaise", "Fabric or leather"] },
  { id: "CO-303", category: "couches", name: "Two-Seater Loveseat",
    image: "images/co-303.svg", photo: "images/photos/co-303.webp", focus: "50% 55%",
    credit: { by: "Christian Kaindl", url: U("4uD9w-pxBTA") },
    desc: "Compact sofa for apartments, reception areas and offices.",
    specs: ["2 seats", "Tapered legs", "Several colours"] },

  // Office sets
  { id: "OS-401", category: "office-sets", name: "Team Workstation Set (4 seats)",
    image: "images/os-401.svg", photo: "images/photos/os-401.webp", focus: "50% 60%",
    credit: { by: "Madeline Liu", url: U("zF-ysAeI7XU") },
    desc: "Four connected desks with privacy screens and matching mesh chairs.",
    specs: ["4 desks + 4 chairs", "Privacy panels", "Bulk pricing"] },
  { id: "OS-402", category: "office-sets", name: "Executive Office Suite",
    image: "images/os-402.svg", photo: "images/photos/os-402.webp", focus: "45% 60%",
    credit: { by: "Alex Tyson", url: U("GGWYYHbfi2s") },
    desc: "Executive desk, leather chair and two visitor chairs in a matching finish.",
    specs: ["Desk + 3 chairs", "Matching finish", "Delivery & setup"] },
  { id: "OS-403", category: "office-sets", name: "Meeting Room Set",
    image: "images/os-403.svg", photo: "images/photos/os-403.webp", focus: "50% 60%",
    credit: { by: "Benjamin Child", url: U("GWe0dlVD9e0") },
    desc: "Boardroom table with 8 chairs — sized for meeting rooms of any company.",
    specs: ["Table + 8 chairs", "240 cm table", "Other sizes on request"] },
];
