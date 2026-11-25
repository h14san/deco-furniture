// ─────────────────────────────────────────────────────────────
//  SITE CONFIG — the single place to change store details.
//  "Deco Center" is a placeholder name until confirmed with the client.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  storeName: "Deco Center",
  tagline: "Furniture for Home and Office",
  intro:
    "Chairs, office desks, couches and complete furniture sets for homes, offices and businesses. Browse online, then visit our Nyarutarama showroom or message our sales team on WhatsApp.",

  address: {
    line1: "2F, Deco Center Complex",
    line2: "No. 2, KG 12 Ave, Nyarutarama",
    city: "Kigali, Rwanda",
  },
  mapQuery: "Deco Center Complex, KG 12 Ave, Nyarutarama, Kigali",

  // TODO: confirm opening hours with the client.
  // `on` lists weekdays (0 = Sunday … 6 = Saturday); `open`/`close` are 24h
  // Kigali time and drive the live "Open now" status on the site.
  hours: [
    { days: "Monday – Saturday", time: "9:00 – 19:00", on: [1, 2, 3, 4, 5, 6], open: "09:00", close: "19:00" },
    { days: "Sunday", time: "11:00 – 17:00", on: [0], open: "11:00", close: "17:00" },
  ],

  email: "decocenter@homartgroup.com",

  // First contact is the default for "Chat on WhatsApp" buttons.
  contacts: [
    // TODO: real names and numbers — placeholders until confirmed with the client
    { name: "Sales Contact 1", role: "Sales team", phone: "+250 7XX XXX XXX", whatsapp: "2507XXXXXXXX" },
    { name: "Sales Contact 2", role: "Sales team", phone: "+250 7XX XXX XXX", whatsapp: "2507XXXXXXXX" },
  ],
};
