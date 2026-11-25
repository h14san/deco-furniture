# Deco Center Website — Project Plan

## 1. The Client

- **Business:** Furniture showroom selling chairs, office desks, couches and furniture sets for homes and offices.
- **Location:** 2F, Deco Center Complex, No. 2, KG 12 Ave, Nyarutarama, Kigali, Rwanda.
- **Parent company:** The contact email uses the `homartgroup.com` domain, which links the store to Homart Group, a large group in Rwanda since 2009 working in wholesale, manufacturing, real estate and hospitality (Kigali Ceramics, Phoenix Plaza, Mall Hotel).
- **Area:** Deco Center is one of the newer malls in the Nyarutarama / Gacuriro / Kagugu area, so likely customers are higher-income homeowners and offices.
- **Contacts:**
  - Sales Contact 1, Senior Sales: +250 7XX XXX XXX (phone/WhatsApp)
  - Sales Contact 2, Senior Sales: +250 7XX XXX XXX (phone/WhatsApp)
  - Email: decocenter@homartgroup.com
- **Current online presence:** No website found. Only a shared group email.

### To confirm at the meeting
- [ ] The store's actual name ("Deco Center" is used as a placeholder)
- [ ] Is it run directly by Homart Group?
- [ ] Who makes the decision on a website, and how to reach them

---

## 2. Website Description (homepage / About)

> **Deco Center — Furniture for Home and Office**
>
> Deco Center is a furniture showroom on the 2nd floor of the Deco Center Complex in Nyarutarama, Kigali. We offer a wide range of chairs, office desks, couches and furniture sets for homes, offices and businesses. You can browse our collection online, then visit the showroom or message our sales team on WhatsApp for prices, availability and bulk orders.
>
> 📍 2F, Deco Center Complex, No. 2, KG 12 Ave, Nyarutarama, Kigali
> 📞 +250 7XX XXX XXX · +250 7XX XXX XXX
> ✉️ decocenter@homartgroup.com

---

## 3. Scope — What the Site Includes

- **Product catalogue** by category: chairs, office desks, couches, office sets
- **"Chat on WhatsApp" button** on every product that links straight to the sales team
- **Showroom page:** location, map, opening hours, contacts
- **Business clients section:** office/bulk orders
- **Mobile-first** design using the brand colours (copper/brown on white)
- **Google Business Profile** listing

Out of scope for the demo: online payments, accounts, admin dashboard.

---

## 4. Roadmap

### Phase 1 — Prep (before the meeting)
- [x] Create GitHub repo (`h14san/deco-furniture`) with this PLAN.md and a README
- [~] Collect 10–15 product images — 13 generated placeholder illustrations in `public/images/`; swap for real/stock photos
- [x] Build a clickable demo: homepage + one product category page (`public/`)
- [ ] Deploy the demo so it opens on a phone from a link — GitHub Pages workflow ready, needs push + enabling Pages
- [x] Write a one-page pitch: problem → solution → timeline → price range (`docs/PITCH.md` — check the prices)

### Phase 2 — The meeting
- [ ] Message the sales team on WhatsApp to book a time
- [ ] Show the live demo on phone/laptop
- [ ] Ask:
  - Who decides on this?
  - Enquiries only (WhatsApp) or online orders too?
  - Who will keep products and prices updated?
  - What's the budget?
- [ ] Get the decision-maker's contact

### Phase 3 — Follow-up (within 24 hours)
- [ ] Send the pitch, demo link and quote

### Phase 4 — Build (once approved)
- [ ] Design: final layout and branding
- [ ] Build: all pages + catalogue
- [ ] Content: real product photos, names, descriptions
- [ ] Launch: domain, hosting, Google Business Profile
- [ ] Handover: show staff how to update products

---

## 5. Notes for Claude Code

- Start with **Phase 1**. Build the demo only: homepage + one category page.
- Keep it simple, fast and mobile-first.
- Use placeholder images in `/public/images/` until real photos are added.
- The store name is a placeholder. Keep it in one config value so it's easy to change.
