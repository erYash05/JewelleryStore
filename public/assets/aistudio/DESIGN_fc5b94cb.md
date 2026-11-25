---
name: Heritage Editorial
colors:
  surface: '#fdf9f2'
  surface-dim: '#dddad3'
  surface-bright: '#fdf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#4a4640'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#7b766f'
  outline-variant: '#ccc6bd'
  surface-tint: '#605e5c'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1a'
  on-primary-container: '#868382'
  inverse-primary: '#cac6c4'
  secondary: '#735b30'
  on-secondary: '#ffffff'
  secondary-container: '#fcdba5'
  on-secondary-container: '#775f33'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e1b16'
  on-tertiary-container: '#88837b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6e2df'
  primary-fixed-dim: '#cac6c4'
  on-primary-fixed: '#1c1b1a'
  on-primary-fixed-variant: '#484645'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#e2c28e'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#59431b'
  tertiary-fixed: '#e8e1d8'
  tertiary-fixed-dim: '#ccc6bd'
  on-tertiary-fixed: '#1e1b16'
  on-tertiary-fixed-variant: '#4a4640'
  background: '#fdf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e6e2db'
typography:
  display-xl:
    fontFamily: EB Garamond
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: 4.75rem
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: EB Garamond
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: 3rem
    letterSpacing: -0.01em
  display-lg:
    fontFamily: EB Garamond
    fontSize: 3.25rem
    fontWeight: '400'
    lineHeight: 3.5rem
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: 0em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: 0em
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 1.5rem
    fontWeight: '400'
    lineHeight: 2rem
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0.02em
  label-uppercase:
    fontFamily: Hanken Grotesk
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.18em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: 1rem
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
---

## Brand & Style

This design system expresses a quiet luxury editorial ethos tailored for a heritage wholesale silver jewellery house rooted in Gwalior. The aesthetic synthesizes high-fashion print editorial restraint with archival Indian metalsmithing heritage. 

The visual language rejects opulent digital clutter in favor of museum-grade spaciousness, razor-sharp discipline, and deliberate material tactility. It evokes authority, generational provenance, and understated sophistication. Interfaces should feel less like e-commerce storefronts and more like curated catalog raisonnés, balancing dramatic typographic scale with surgical 1px metallic detailing.

## Colors

The palette operates under rigorous monochromatic warmth with metal leaf accents:
- **Canvas (`#F7F3EC` - Warm Ivory):** The foundational substrate across all views, mimicking unbleached archival rag paper.
- **Ink Primary (`#1C1B1A` - Deep Charcoal):** High-density editorial pigment used for display typography, heavy structural marks, and solid interaction states. Never pure digital black (`#000000`).
- **Metallurgical Accent (`#B89B6A` - Champagne Gold):** Reserved for surgical 1px dividers, filigree badges, currency weights, assay stamps, and active focus cues. Used with strict restraint.
- **Stone Tertiary (`#8A857D` - Soft Stone Grey):** Employed for body copy, catalog metadata, lot numbers, purity ratings (e.g., 925 Sterling), and secondary labels.

## Typography

The typographical pairing mimics haute horlogerie and legacy auction publications. EB Garamond supplies classical literary prestige, while geometric sans-serif (Hanken Grotesk) introduces architectural discipline.

- **Italicized Accents:** Key descriptive words, Sanskrit nomenclature (e.g., *Payal*, *Kada*, *Hasli*), and lineage references must be styled with EB Garamond Italic to punctuate editorial flow.
- **Tracked Grotesque for UI:** All navigational items, SKU numbers, wholesale lot metrics, assay specifications, and button labels must use `label-uppercase` set in all-caps with generous character tracking (`0.15em` to `0.2em`).
- **Hierarchy Balance:** Allow massive editorial titles to collide quietly with minuscule, ultra-tracked metadata notations.

## Layout & Spacing

The layout embraces an asymmetric 12-column fluid grid inspired by broadsheet editorial spreads.
- **Desktop (12 Columns):** Generous margins (`4rem`) and wide gutters (`2.5rem`). Layouts must avoid uniform symmetric e-commerce grids. Alternate hero ornaments across irregular column spans (e.g., 7 columns for imagery paired with 5 columns for typography and metallurgical data sheets).
- **Tablet (8 Columns):** Standardized `2rem` gutters with balanced content reflow.
- **Mobile (4 Columns):** Tight single-column stacks with `1.25rem` screen margins. Full bleed imagery framed by thin hairlines.
- **Rhythm:** Whitespace is treated as a structural luxury material. Vertical rhythm alternates between compressed technical data blocks (`space-sm` to `space-md`) and expansive breathing intervals (`space-xl`).

## Elevation & Depth

This design system completely eliminates drop shadows, blurs, and pseudo-skeuomorphic extrusions. 

- **Planar Architecture:** Depth is achieved exclusively through 2D architectural planes and tonal layering.
- **1px Champagne Hairlines:** Visual containment relies on crisp `1px solid #B89B6A` (or `#8A857D` at 30% opacity) boundaries. 
- **Surface Elevation:** Secondary tiers (drawers, modal overlays, wholesale order slips) utilize solid `#1C1B1A` surfaces with `#F7F3EC` typography, establishing a striking inverted paper contrast rather than relying on elevation shadows.

## Shapes

The shape system is strictly architectural and razor-sharp (`0px` border radius across all tokens). No rounded corners, pills, or soft bevels are permitted. 

Every visual element—including inputs, image containers, primary buttons, toasts, and structural tags—must conform to absolute orthogonal geometry, echoing the precise cutting and ingot bars of raw bullion.

## Components

### Buttons
- **Primary Action:** Solid `#1C1B1A` fill, `#F7F3EC` text, 0px radius, uppercase tracked typography (`label-uppercase`). Hover state transitions to `#B89B6A` with instantaneous or subtle 150ms linear transition.
- **Editorial Secondary:** Transparent background, `1px solid #1C1B1A`, `#1C1B1A` text. Hover state inverts to solid `#1C1B1A` with `#F7F3EC` text.
- **Minimal Text Action:** Monoline link accompanied by a terminal horizontal stroke (`1px solid #B89B6A`) extending 16px beyond label text.

### Inputs & Selectors
- **Form Fields:** Flat border-bottom only (`1px solid #8A857D`). Transparent background showing ivory substrate. On focus: border shifts to `1px solid #B89B6A` with floating uppercase micro-labels.
- **Wholesale Checkbox & Radio:** Custom square 14px boxes. Sharp 0px borders. Checked state filled with a solid centered `#1C1B1A` or `#B89B6A` square (no checkmark glyph; minimal geometric block).

### Cards & Catalogue Tiles
- **Product Tiles:** Seamless unbordered or 1px hairline bordered blocks. Images display silhouetted or contextual silver ornaments on tinted canvas grounds. Product title in `headline-sm` with weight/purity in `caption` stone grey below.
- **Wholesale Order Spec Card:** Modular rectangular ledger tables displaying weight (grams), silver purity (.925 / .999), minimum order quantities, and live bullion rate delta markers.

### Badges & Chips
- **Assay Tags:** Non-pill, rectangular tags with `1px solid #B89B6A` outline, 0px border-radius, displaying hallmarks (e.g., "BIS HALLMARKED", "925 STERLING").
- **Lot Filters:** Minimalist uppercase text strings separated by vertical hairline dividers (`|`) rather than enclosed rounded buttons.