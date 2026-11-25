---
name: Deco Center
description: A late-modern showroom prospectus. Bone-white plate, one ink, one violet, and all remaining colour spent on a single silk ribbon.
colors:
  ground: "#f7f7fa"
  plate: "#ffffff"
  ink: "#1b1547"
  deck: "#4b5165"
  quiet: "#5f6478"
  violet: "#6b5ce7"
  violet-hover: "#5a4bd6"
  violet-active: "#2e2580"
  violet-wash: "#efedfd"
  hairline: "#e6e7ee"
  engrave: "#8c90a6"
  ribbon-a: "#7fd8d0"
  ribbon-b: "#c9b8f0"
  ribbon-c: "#5b4fd6"
  stroke: "#8c90a6"
  row-hover: "#fbfbfd"
  photo-ground: "#eceef4"
  skyline: "#dfe0ea"
  scroll: "#c7c9d6"
  select: "#d9d3fb"
  danger: "#b4233c"
typography:
  display:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  deck:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  body-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  caption:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.04em"
rounded:
  box: "4px"
  btn: "8px"
  panel: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  gutter: "16px"
  gutter-wide: "32px"
  band: "72px"
  band-wide: "112px"
  rail: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.plate}"
    typography: "{typography.body}"
    rounded: "{rounded.btn}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.violet-hover}"
  button-primary-active:
    backgroundColor: "{colors.violet-active}"
  button-secondary:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.violet}"
    rounded: "{rounded.btn}"
    padding: "12px 22px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.violet-wash}"
    textColor: "{colors.violet-hover}"
  button-sm:
    typography: "{typography.body-sm}"
    padding: "8px 16px"
    height: "40px"
  input:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "10px 14px"
    height: "48px"
  check-chip:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.btn}"
    padding: "8px 14px"
    height: "40px"
  panel:
    backgroundColor: "{colors.plate}"
    rounded: "{rounded.panel}"
  ledger-row-hover:
    backgroundColor: "{colors.row-hover}"
  tab:
    textColor: "{colors.deck}"
    typography: "{typography.body-sm}"
    padding: "10px 12px"
  tab-selected:
    textColor: "{colors.violet}"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "10px 14px"
  nav-link-active:
    textColor: "{colors.violet}"
  check-chip-selected:
    backgroundColor: "{colors.violet-wash}"
    textColor: "{colors.violet-active}"
    rounded: "{rounded.btn}"
    height: "40px"
---

# Design System: Deco Center

## Overview

**Creative North Star: "The Civic Prospectus"**

The site reads like a late-modern business prospectus issued by a showroom: a bone-white plate, one deep ink, one violet for every action, and a single silk ribbon of teal-to-violet light that carries all the remaining colour. The furniture sits on this plate the way an exhibit sits in a report: framed in a 12px panel, captioned, referenced by number. Nothing is warm or rustic, and nothing is a lifestyle collage.

Density is calm and ruled. Bands are separated by 1px hairlines on a 1180px rail, information is set as ledgers and spec lists rather than cards stacked on cards, and the type is one geometric grotesque at two weights. Depth is a soft ink-tinted lift on panels only. The world's own ornaments are civic: engraved line-art seals for the collections, a ghosted Kigali skyline in the lower register of the hero, and a drawn floor-plan map. One ribbon per surface: the hero on home, the page head on category, none on the product page and none on closing panels.

Motion is rationed. The ribbon unfurls once and leans up to 12px toward the pointer; panels travel their last 24px as they enter. Everything else changes state by colour only, and reduced motion makes the whole page static.

**Key Characteristics:**
- Bone-white ground and white plates, ink #1b1547 instead of black.
- One violet for every action, link, selected state, open-status dot and focus ring.
- All other colour lives in the canvas ribbon.
- One typeface (Figtree), weights 400 and 500 only.
- 1px hairline rules divide bands, rows and spec lines.
- Two radii: 8px for controls, 12px for panels; 4px only for the checkbox box and focus outline.
- Ink-tinted soft lift on panels; no hard or offset shadows.

## Colors

A near-monochrome ink-on-bone palette with a single saturated violet, plus a three-stop ribbon gradient that appears nowhere but the canvas. There is no green, and no semantic colour other than danger.

### Primary
- **Prospectus Violet** (violet): the only action colour. Filled primary buttons, link text, selected tabs and nav items, checked chips, the second line of every two-line headline, the open-status dot (with a 4px violet-wash ring), the map pin, the caret and the focus outline.
- **Pressed Violet** (violet-hover) and **Deep Seal Violet** (violet-active): hover and pressed steps of the same violet; the active step also colours text on checked chips.
- **Violet Wash** (violet-wash): the tint behind secondary-button hover, menu-item hover and checked chips, and the halo ring around the open-status dot.
- **Selection Lilac** (select): the text-selection highlight, with ink text. A pale step of the violet, not a ribbon colour.

### Secondary
- **Ribbon Teal** (ribbon-a), **Ribbon Lilac** (ribbon-b), **Ribbon Indigo** (ribbon-c): the three stops of the silk ribbon, interpolated teal to lilac to indigo along its length and shaded by which face of the twist is showing. Used only inside `canvas[data-ribbon]`.

### Neutral
- **Bone Ground** (ground): page background, scrolled sticky-bar and ask-bar glass (at 86 to 92% opacity), ledger-thumb fill, scrollbar track.
- **Plate White** (plate): panels, product items, inputs, secondary buttons, menus.
- **Prospectus Ink** (ink): headings, body text, mark, icons at rest. It is a deep blue-violet; the system never uses pure black.
- **Deck Slate** (deck): deck paragraphs, item descriptions, footer text, inactive tabs.
- **Quiet Slate** (quiet): metadata, hints, fact keys, counts, crumbs, footer headings. 5.6:1 on ground.
- **Hairline** (hairline): every 1px rule, panel border, burger and icon-button border, the floor-plan line work, and disabled button fill.
- **Control Stroke** (stroke): the outline of every input, select, check chip, checkbox box and the dashed message preview (3.2:1 on white), and crumb separators. Structure stays hairline; anything you type into or tick takes stroke.
- **Engraving Grey** (engrave): seal line-art at rest and the closed-state status dot. Decorative only, never body text. Shares its value with stroke but not its role.
- **Row Tint** (row-hover): the barely-there fill under a hovered ledger row.
- **Photo Ground** (photo-ground): the fill behind a photo frame while the image loads.
- **Ghost Skyline** (skyline): the ghosted Kigali skyline line-art in the hero stage.
- **Scroll Grey** (scroll): scrollbar thumb, and the border of a hovered product item.

### Semantic
- **Signal Red** (danger): invalid input border and error text. The only semantic colour.

### Named Rules
**The One Violet Rule.** Every interactive affordance is violet and nothing decorative is. If an element is violet, it can be pressed, is selected, reports live state (the open-status dot), or is the second line of a headline.

**The Ribbon Holds the Colour Rule.** Teal and lilac appear only in the ribbon canvas. They are never used for text, fills, borders or icons elsewhere.

## Typography

**Display Font:** Figtree (with ui-sans-serif, system-ui, Segoe UI fallback)
**Body Font:** Figtree (same stack)

**Character:** A single friendly geometric grotesque, self-hosted as a variable woff2 (latin and latin-ext) clipped to weights 400 and 500. Headings get tight negative tracking and balanced wrapping; numerals are tabular everywhere so references and hours line up.

### Hierarchy
- **Display** (500, clamp(2.6rem, 6.4vw, 5.5rem), 1.05, -0.03em): page h1. The home hero narrows it to clamp(3rem, 5.6vw, 5.25rem) from 900px, category heads cap at 4.5rem, the product page at 3.75rem. Set as two lines with the second line in violet.
- **Headline** (500, clamp(2rem, 4.2vw, 3.25rem), 1.08, -0.02em): band h2s, also two lines with a violet second line.
- **Headline Small** (500, clamp(1.6rem, 3vw, 2.25rem)): the closing-panel h2.
- **Title** (500, 1.25rem, -0.01em): h3 and the mark.
- **Title Small** (500, 1.125rem, 1.3, -0.01em): panel heads, ledger row names, product item names, drawer links, footer mark.
- **Deck** (400, clamp(1.05rem, 1.6vw, 1.25rem), 1.6): the standfirst under each headline, in deck slate, max 34em, pretty wrapping.
- **Body** (400, 1rem, 1.6): running text, nav links and buttons.
- **Body Small** (400, 0.9375rem): secondary UI: field labels (at 500), tabs, chips, small buttons, fact values, crumbs, counts, hero meta, footer.
- **Caption** (400, 0.8125rem): hints, errors, seal counts, menu-item notes, the foot note.
- **Label** (400 to 500, 0.75rem fact keys, 0.8125rem showroom labels and footer heads, 0.04em, uppercase): keys in a key/value pair only, always in quiet slate.

The full ramp in use is 0.75 / 0.8125 / 0.9375 / 1 / 1.125 / 1.25rem plus the display, headline and headline-small clamps. Nothing else.

### Named Rules
**The Two Weights Rule.** Only 400 and 500 exist. Emphasis is weight 500 or violet, never 600+, italic, or a second family.

**The Six Steps Rule.** Text sizes come from the ramp above. A new size is a new token, not a one-off.

**The Second Line Rule.** Display and headline text is written as two short lines; the second line carries the turn of the sentence and is violet.

## Layout

A single 1180px rail centred with a 16px gutter on phones and 32px from 900px. Bands stack vertically, each opened by a 1px hairline rule, with 72px vertical padding on phones and 112px from 900px. The sticky bar is 64px tall on phones and 72px from 900px.

From 900px, content bands use a 5fr / 7fr split with a 64px gap: copy on the left (sticky beneath the bar), a panel on the right. The hero splits 60% copy to a stage that bleeds off the right edge, where the ribbon, skyline and a framed product photo sit; on phones the stage drops below the copy at 420px tall. The product page uses 7fr / 5fr with a sticky info column, and on phones a glass ask-bar slides up from the bottom. Category and product heads on phones compact to a 2.25rem h1. The category grid runs one column, two from 620px, three from 1000px (24px gap, 32px at three columns). Collection seals run two up, four up from 900px beside a 200px intro column.

Spacing steps are 8, 12, 16, 24 and 32px inside components, 40 to 56px between hero sub-blocks, and 72 or 112px between bands.

## Elevation & Depth

Mostly flat and ruled, with one soft ink-tinted lift reserved for plates that hold content. Depth comes first from tone (white plate on bone ground) and hairline borders; shadow is the second cue. Glass (blur 14px) is used only for the sticky bar once the page has scrolled (or the drawer is open) and the mobile ask-bar. At rest the bar is transparent with a transparent border, so the hero ribbon rises cleanly behind it.

### Shadow Vocabulary
- **Lift** (`box-shadow: var(--lift)`): resting panels, product items, the product photo.
- **High Lift** (`box-shadow: var(--lift-hi)`): hovered product items, the hero product photo in the ribbon's fold, and dropdown menus.
- **Focus Glow** (`box-shadow: 0 0 0 3px rgba(107, 92, 231, .18)`): inputs on focus, paired with a violet border.
- **Status Ring** (`box-shadow: 0 0 0 4px var(--violet-wash)`): the open-status dot.
- **Pin Rings** (`box-shadow: 0 0 0 8px rgba(107, 92, 231, .16), 0 0 0 22px rgba(107, 92, 231, .07)`): the map pin only.

### Named Rules
**The Ink Shadow Rule.** Shadows are tinted with ink (rgba 27, 21, 71), long and soft with negative spread. Never neutral black, never hard or offset.

## Shapes

Two radii, one small corner, and the circle. Controls (buttons, inputs, chips, nav pills, icon buttons, ledger thumbs, the photo caption chip, the message preview, the map info card) use 8px; panels, product items, photo frames, menus and seals use 12px; the 14px checkbox box and the focus outline use 4px; status dots, the map pin and the ledger "go" button are circles, and the scrollbar thumb is a pill. Borders are always 1px: hairline for structure, stroke for controls you type into or tick, violet for buttons. Photos are clipped inside their frame and zoom 3% on item hover. The recurring silhouette is the engraved seal: two concentric circles (r 50 and 34) with uppercase ring text and a line drawing of the piece at 1.2px stroke.

## Components

### Buttons
Confident, filled, always carrying an icon or a chevron.
- **Shape:** 8px radius, 1px violet border, 48px minimum height (40px small).
- **Primary:** violet fill, white text, weight 500, 12px 22px padding. The WhatsApp glyph leads; a 14px chevron trails and nudges 3px right on hover.
- **Hover / Active:** fill steps to violet-hover, then violet-active; 0.3s on cubic-bezier(.25, 1, .5, 1).
- **Secondary:** white fill, violet text and border; hover fills with violet wash.
- **Disabled:** hairline fill and border, quiet text, not-allowed cursor.
- **Small:** 40px, 8px 16px padding, 0.9375rem.
- **Text link:** violet, weight 500, trailing chevron, underline on hover.
- **Icon button:** 44px square, 8px radius, hairline border; violet border and icon on hover; the filled variant is violet.

### Chips (check chips)
- **Style:** 40px tall, 8px radius, 8px 14px padding, 0.9375rem, stroke outline, white fill, with a 14px box (4px radius, stroke outline) before the label.
- **State:** checked turns the border violet, fill violet wash, text deep seal violet, and the box violet with a white tick. Focus is a 2px violet outline at 2px offset.

### Cards / Containers
- **Panel:** white plate, 1px hairline border, 12px radius, Lift shadow. Head and foot rows are 20px 24px / 16px 24px with hairline dividers. Panels rise 24px over 0.8s on cubic-bezier(.165, .84, .44, 1) as they enter, and only if they start below the fold.
- **Product item:** a panel with an edge-to-edge 3:2 photo, 20px 20px 24px body padding (16px on phones), a hairline-ruled foot holding facts and a small primary "Ask" button. The whole card is a link; hover lifts to High Lift, the border steps to scroll grey and the photo zooms 3%.
- **Photo frame:** 12px radius on a photo-ground fill, a white 92% "Sample photo" caption chip (0.75rem, deck text, 8px radius) at the lower left.

### Inputs / Fields
- **Style:** white fill, 1px stroke outline, 8px radius, 48px tall, 10px 14px padding, quiet placeholder; hover steps the border to deck slate. Labels above in weight 500 at 0.9375rem with 0.8125rem quiet hints.
- **Focus:** violet border plus the Focus Glow.
- **Error:** danger border and 0.8125rem danger text below.
- **Select:** custom 16px ink chevron at the right.

### Navigation
- **Bar:** sticky and transparent at rest; once the page scrolls past 8px (or the drawer opens) it frosts to bone glass at 86% with a 14px blur and a hairline bottom border. 64px on phones, 72px from 900px. Mark left, links centre, small primary "WhatsApp us" right.
- **Links:** ink, 10px 14px padding, 8px radius; hover and current page turn violet. The Shop menu opens a 12px-radius white menu with High Lift and wash-tinted hover rows.
- **Mobile:** a 44px hairline-bordered burger and an icon-only WhatsApp button; the drawer is a ruled list at 1.125rem.
- **Tabs:** 0.9375rem deck text with a 2px bottom border that turns violet when selected; horizontally scrollable with no scrollbar.

### Ledger Rows
Featured and related pieces are listed, not tiled: 88px square thumb (72px under 560px, where the arrow drops), a 1.125rem name, a facts strip of uppercase keys over 0.9375rem values, and a 36px circular arrow that turns violet and moves 2px on hover while the row takes the row tint. Rows are divided by hairlines.

### Silk Ribbon (signature)
A twisting band drawn on canvas (`data-ribbon="hero|head"`), one per surface: a Catmull-Rom spine, width modulated by a cosine twist, each segment shaded by which face is showing, overlaid with 21 fine white strands for silk. It unfurls once over 1.4s with exponential ease-out, then each sample within 240px of the pointer leans up to 12px toward it. Hero at 90% opacity (top-faded under 900px), page heads at 70% with a bottom fade mask. Closing panels carry no ribbon. Static under reduced motion; paused off-screen.

### Collection Seals
Engraved line-art roundels in engraving grey, 104px, naming the collection, store and city in ring text. Hover turns the engraving and the name violet.

## Do's and Don'ts

### Do:
- **Do** spend violet only on things that can be pressed, are selected, or form a headline's second line.
- **Do** keep teal and lilac inside the ribbon canvas, and draw at most one ribbon per surface.
- **Do** outline inputs, selects and check chips in stroke (#8c90a6); keep hairline for structure.
- **Do** divide bands, rows and spec lines with 1px hairline rules on the 1180px rail.
- **Do** use 8px radius for controls and 12px for panels and photo frames, nothing in between; 4px is reserved for the checkbox box and focus outline.
- **Do** take every text size from the 0.75 / 0.8125 / 0.9375 / 1 / 1.125 / 1.25rem ramp or the heading clamps.
- **Do** set uppercase 0.04em labels only as the key of a key/value pair.
- **Do** label every stock photo with the "Sample photo" caption chip.
- **Do** list products as ledger rows or ruled spec lists with a reference number.

### Don't:
- **Don't** use pure black or neutral-black shadows; ink #1b1547 and ink-tinted shadows only.
- **Don't** introduce a second typeface or weights above 500.
- **Don't** add motion beyond the ribbon unfurl, the pointer lean, the 24px panel rise and colour transitions.
- **Don't** place a headline over a full-bleed lifestyle photo.
- **Don't** add hard or offset shadows.
- **Don't** introduce green or any semantic colour other than danger; live status is violet.
