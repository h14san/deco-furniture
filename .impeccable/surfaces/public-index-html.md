---
version: 1
slug: "public-index-html"
primary_target: "public/index.html"
related_targets: ["public/category.html","public/product.html"]
---

# Surface brief: Deco Center showroom site (home, category, product)

**Mode:** Persuade.
**Audience:** Kigali homeowners and office buyers, given equal weight, mostly on phones.
**Job:** see real pieces and trust that the showroom exists.
**Action:** start a WhatsApp conversation about a specific piece, or request a bulk business quote.
**Proof:** the catalogue itself (sample stock photos, labelled as samples), the showroom address and map, and the opening hours.
**Constraints:** no prices, no invented clients or reviews, placeholder contacts, static site.

## Direction contract

THESIS: A late-modern business prospectus for a furniture showroom. The page is a bone-white plate where all the colour is spent on one silk ribbon of teal-to-violet light, with one piece of furniture sitting alone in its fold. It refuses the furniture-retail default of a full-bleed lifestyle photo with a headline overlaid, above a row of equal tiles.

OWN-WORLD:
- Ground #F7F7FA to #FFFFFF, ink #1B1547, deck text #4B5165, a single violet #6B5CE7 for every action, ribbon #7FD8D0 → #C9B8F0 → #5B4FD6, hairlines #E6E7EE, never pure black.
- One geometric grotesque at weights 400 and 500 only.
- Bands are split by 1px rules on a 1180px rail. Panels use a 12px radius only, and buttons an 8px radius with a chevron.
- Category emblems are engraved satin line-art seals.
- A ghosted Kigali skyline (convention-centre dome, hills) sits in the lower register.

STORY: Visitors understand that there is a real showroom on 2F of the Deco Center Complex that furnishes both homes and offices. They believe it because they can browse the actual pieces and see where to go. Then they do one of two things: tap "Ask on WhatsApp" with the product reference already filled in, or compose a business quote that is sent to WhatsApp.

FIRST VIEWPORT:
- A sticky 72px bar: mark on the left, links in the centre, filled violet "WhatsApp us" on the right.
- On the left 48%, an 88px two-line headline, "Furnish the room. / Then the office.", with the second line in violet, a 20px deck, a primary "Ask on WhatsApp" button and a secondary "Browse the collection" button.
- The ribbon owns the right bleed, with a 12px-radius product panel (3-seater sofa) set in its fold and the skyline ghosted behind.
- The four category seals are ruled at the bottom edge.

FORM: The civic-bureau prospectus (dealt challenger civic-bureau-prospectus-late-modern), chosen by the user over the assigned direction, which was #6 of 7 on my grounded list. seed:d17db9f0bddc2532.
- Signature interaction: the ribbon is drawn live on a canvas, and its crest bends up to 12px toward the pointer over 0.3s cubic-bezier(.25,1,.5,1).
- Motion grammar: the ribbon unfurls once on load, and console panels rise 24px over 0.8s cubic-bezier(.165,.84,.44,1) as they enter. Nothing else moves. With reduced motion, everything is static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment
The silk ribbon bending toward your finger or cursor, with a single sofa resting in its fold.

## Unresolved
- Real store name, logo, contacts, hours and photos.
- Whether prices will be published.
