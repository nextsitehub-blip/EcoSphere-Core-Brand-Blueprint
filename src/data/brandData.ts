/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavItem, Metric, ShowcaseCard, BlueprintToken, SustainabilityMilestone, CaseStudy, Testimonial } from '../types';

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Blueprint", href: "#blueprint-section", id: "blueprint-section" },
  { label: "Brand Assets", href: "#showcase-section", id: "showcase-section" },
  { label: "Design System", href: "#design-system-section", id: "design-system-section" },
  { label: "Sustainability", href: "#sustainability-section", id: "sustainability-section" },
  { label: "Case Studies", href: "#case-studies-section", id: "case-studies-section" },
  { label: "Contact", href: "#contact-section", id: "contact-section" },
];

export const metrics: Metric[] = [
  {
    id: "projects",
    value: 124,
    suffix: "+",
    label: "Global Brands Sculpted",
    description: "Premium identities engineered with deep ecological intelligence."
  },
  {
    id: "systems",
    value: 86,
    suffix: "%",
    label: "Circular Material Integration",
    description: "Our core packaging blueprints rely entirely on closed-loop regenerative systems."
  },
  {
    id: "emissions",
    value: 48,
    suffix: "k",
    label: "Tons CO2 Sequestered",
    description: "Direct ecological offset verified across our client portfolio."
  },
  {
    id: "initiatives",
    value: 100,
    suffix: "%",
    label: "Carbon Positive Mandate",
    description: "Every blueprint delivered offsets triple its estimated digital and spatial footprint."
  }
];

export const showcaseCards: ShowcaseCard[] = [
  {
    id: "identity",
    title: "Brand Identity System",
    subtitle: "Section 01 / Foundations",
    shortDesc: "The cohesive spiritual and ecological envelope of the EcoSphere brand philosophy.",
    longDesc: "The EcoSphere brand system is engineered at the intersection of classical editorial prestige and modern biophilic systems. This identity system details the core brand narrative, architectural guidelines, and the emotional resonance guidelines designed to forge trust and command authority.",
    image: "/src/assets/images/ecosphere_hero_bg_1783051482229.jpg",
    category: "Foundations",
    iconName: "Compass",
    assets: [
      {
        title: "Brand Purpose & Voice",
        description: "An uncompromising vision of absolute luxury fused with rigorous environmental stewardship.",
        specs: [
          { label: "Tone of Voice", value: "Measured, Sophisticated, Restrained, Authoritative" },
          { label: "Core Archetype", value: "The Sage & The Creator" },
          { label: "Editorial Rule", value: "Use shorter sentences, generous leading, and precise active verbs." }
        ]
      },
      {
        title: "Co-Branding Hierarchy",
        description: "The physical placement rules for the EcoSphere core mark next to certified partner logos.",
        specs: [
          { label: "Primary Clearspace", value: "2.5x height of the Core Mark" },
          { label: "Sub-branding Alignment", value: "Baseline aligned, 1.5pt thin divider rule" },
          { label: "Permitted Colors", value: "Forest Green (Primary), Warm Ivory (Secondary)" }
        ]
      }
    ]
  },
  {
    id: "logo-architecture",
    title: "Logo Architecture & Geometry",
    subtitle: "Section 02 / Geometry",
    shortDesc: "Mathematical construction guidelines and alignment grids for our biophilic core mark.",
    longDesc: "Our core brand symbol—the 'Regenerative Seed'—is drawn from Fibonacci spirals and the Golden Ratio (1:1.618). This section houses the exact mathematical grid, angle metrics, and protective exclusion vectors to preserve trademark integrity across physical and screen mediums.",
    image: "https://picsum.photos/seed/geometry/800/600",
    category: "Geometry",
    iconName: "Grid",
    assets: [
      {
        title: "Fibonacci Geometry & Angles",
        description: "Every curve is generated from concentric circles matching the golden sequence, radiating at exactly 34° and 55° axes.",
        specs: [
          { label: "Base Grid Unit", value: "8px Vector Block" },
          { label: "Golden Ratio Ratio", value: "φ = 1.618033" },
          { label: "Exclusion Margin", value: "24% of Total Symbol Diameter" }
        ],
        svgPreview: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-brand-gold fill-none opacity-80" stroke-width="1">
          <circle cx="50" cy="50" r="45" stroke-dasharray="2 2" stroke="rgba(197, 168, 128, 0.3)"/>
          <circle cx="50" cy="50" r="28" stroke="rgba(197, 168, 128, 0.3)"/>
          <circle cx="50" cy="50" r="17" stroke="rgba(197, 168, 128, 0.3)"/>
          <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(197, 168, 128, 0.2)"/>
          <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(197, 168, 128, 0.2)"/>
          <path d="M 50,5 A 45,45 0 0,1 95,50" stroke="#C5A880" stroke-width="1.5"/>
          <path d="M 50,22 A 28,28 0 0,1 78,50" stroke="#10B981" stroke-width="1.5"/>
          <path d="M 50,33 A 17,17 0 0,1 67,50" stroke="#C5A880" stroke-width="1.5"/>
          <circle cx="50" cy="50" r="2" fill="#C5A880"/>
        </svg>`
      },
      {
        title: "Minimum Reproducible Sizes",
        description: "Limits on physical engraving and digital responsive scaling to prevent symbol degradation.",
        specs: [
          { label: "Digital Threshold", value: "16px height (RGB mode)" },
          { label: "Laser Etch Minimum", value: "4.5mm width" },
          { label: "High-Res Print Screen", value: "300 dpi minimum line thickness: 0.18pt" }
        ]
      }
    ]
  },
  {
    id: "typography",
    title: "Typography System",
    subtitle: "Section 03 / Typography",
    shortDesc: "A stark hierarchy pairing brutalist technical mono layouts with luxury geometric serif styling.",
    longDesc: "Typography is our brand's voice in physical space. We pair our custom geometric 'Space Grotesk' display face with the highly legible 'Inter' for body prose, and 'JetBrains Mono' for precise technical annotations, spacing readouts, and ecological performance labels.",
    image: "https://picsum.photos/seed/typography/800/600",
    category: "Aesthetics",
    iconName: "Layers",
    assets: [
      {
        title: "Primary Font Families",
        description: "The typographic foundations for web headers, luxury collateral, and engineering spec lists.",
        specs: [
          { label: "Display Serif/Display", value: "Space Grotesk (Medium / Bold)" },
          { label: "Body Text", value: "Inter (Light / Regular / Medium)" },
          { label: "Metadata & Labels", value: "JetBrains Mono (Regular)" }
        ],
        codeSnippet: `/* CSS Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@400;600&family=JetBrains+Mono&display=swap');

html {
  font-family: 'Inter', sans-serif;
}
h1, h2, h3 {
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.02em;
}`
      },
      {
        title: "Hierarchical Spacing Rules",
        description: "Exact font sizing and responsive leading ratios used to maintain beautiful editorial pacing.",
        specs: [
          { label: "Hero Typography Scale", value: "72pt / Leading 1.05 / Tracking -0.03em" },
          { label: "Section Titles", value: "32pt / Leading 1.15 / Tracking -0.015em" },
          { label: "Body Reading Pane", value: "15pt / Leading 1.6 / Tracking normal" }
        ]
      }
    ]
  },
  {
    id: "colors",
    title: "Color Ecosystem & Palette",
    subtitle: "Section 04 / Pigments",
    shortDesc: "A prestige color gamut inspired by raw organic textures, ancient moss, and premium gold metalwork.",
    longDesc: "Our color ecosystem represents extreme ecological luxury. We avoid synthetic neon tones. Instead, we employ deep biophilic forest greens, raw warm ivory backgrounds, muted sage neutrals, and rich metallic gold highlights that mirror the patina of weathered metalware.",
    image: "https://picsum.photos/seed/colors/800/600",
    category: "Aesthetics",
    iconName: "Sliders",
    assets: [
      {
        title: "Core Pigments Specifications",
        description: "Detailed chromatic breakdowns for digital RGB, luxury paper CMYK, and industrial Pantone standards.",
        specs: [
          { label: "Deep Forest Green", value: "HEX #0B241A / PMS 5605 C / CMYK 88/42/72/51" },
          { label: "Warm Ivory", value: "HEX #FAF9F5 / PMS 7527 U / CMYK 2/2/4/1" },
          { label: "Muted Sage", value: "HEX #588157 / PMS 556 C / CMYK 56/26/59/8" },
          { label: "Luxury Gold Accent", value: "HEX #C5A880 / PMS 872 C / CMYK 20/30/55/5" }
        ]
      },
      {
        title: "Accessibility Guardrails",
        description: "Contrast ratio constraints for high-legibility brand compliance under AA/AAA standards.",
        specs: [
          { label: "Ivory on Forest Green", value: "11.4:1 (Passes AAA)" },
          { label: "Sage on Deep Forest", value: "4.8:1 (Passes AA for Headings)" },
          { label: "Gold on Forest Green", value: "5.2:1 (Passes AA Large)" }
        ]
      }
    ]
  },
  {
    id: "packaging",
    title: "Packaging Language & Materials",
    subtitle: "Section 05 / Tactility",
    shortDesc: "Sustainable luxury box folding, debossed linen covers, and raw seaweed-extracted fiber cases.",
    longDesc: "Zero-waste packaging does not require a compromise in prestige. Our physical packaging system uses entirely post-consumer FSC wood pulp, biodegradable seaweed binding agents, and soy-based non-toxic inks. Structural designs rely on intelligent tab interlocking, eliminating chemical adhesives completely.",
    image: "/src/assets/images/ecosphere_packaging_1783051494624.jpg",
    category: "Tactility",
    iconName: "Shield",
    assets: [
      {
        title: "Regenerative Cellulose Fiberboard",
        description: "A customized material blend of 70% post-consumer linen fiber and 30% local marine kelp pulp, yielding an incredibly soft, textured cream finish.",
        specs: [
          { label: "Tensile Strength", value: "42 mN·m²/g" },
          { label: "Biodegradability Rate", value: "100% within 45 days in home compost" },
          { label: "Debossing Tolerance", value: "Max depth: 1.2mm without grain tear" }
        ]
      },
      {
        title: "Glue-Free Joining Schematics",
        description: "Patented mechanical lock tabs that provide clean structural rigidity and pristine unboxing clicks without microplastics.",
        specs: [
          { label: "Friction Joint Tolerance", value: "±0.05mm precision cutting" },
          { label: "Tension Limit", value: "Up to 8.5kg downward pressure load" },
          { label: "Assembly Effort", value: "Under 12 seconds per box" }
        ]
      }
    ]
  },
  {
    id: "environmental",
    title: "Environmental Graphics & Signage",
    subtitle: "Section 06 / Architecture",
    shortDesc: "Spatial designs, botanical architectural integrations, and structural aluminum guides.",
    longDesc: "EcoSphere's physical facilities and pop-up pavilions employ high-contrast architectural brass and dark-stained oak wood. Graphics are precision-routed rather than printed, resulting in timeless depth and tactile interactions that harmonize beautifully with modern biophilic architectural spaces.",
    image: "/src/assets/images/ecosphere_signage_1783051507919.jpg",
    category: "Architecture",
    iconName: "Trees",
    assets: [
      {
        title: "Routed Architectural Typology",
        description: "Letters are routed directly into high-density local limestone or sandblasted concrete walls, utilizing shadow casting as a primary chromatic element.",
        specs: [
          { label: "Optimal Routing Depth", value: "8.0mm on travertine, 5.0mm on oak wood" },
          { label: "Contrast Enhancement", value: "Organic beeswax and charcoal pigment infill" },
          { label: "Letter Height Minimum", value: "32mm for clear indoor legibility" }
        ]
      },
      {
        title: "Biophilic Atrium Integration",
        description: "Signage structures must maintain a visual line-of-sight to living botanical structures, coexisting with localized microclimates.",
        specs: [
          { label: "Relative Humidity Bound", value: "40% to 65% for wood cladding stability" },
          { label: "Lighting Specification", value: "3000K warm spotlight, 85+ Color Rendering Index" },
          { label: "Material Sourcing Limit", value: "FSC recycled timber harvested within 150 miles" }
        ]
      }
    ]
  },
  {
    id: "illustrations",
    title: "Illustration & Technical Schematics",
    subtitle: "Section 07 / Schematic Layouts",
    shortDesc: "Elegant, high-precision technical vectors mapping circular material cycles and eco-flows.",
    longDesc: "We avoid cartoonish corporate illustrations. Our visual storytelling uses thin, precise vector diagrams that fuse blueprints, architectural schematics, and biophilic cell-structure blueprints. Every illustration conveys engineering transparency, ecological precision, and modern art curation.",
    image: "https://picsum.photos/seed/illustrations/800/600",
    category: "Geometry",
    iconName: "Feather",
    assets: [
      {
        title: "Technical Drafting Line Weight Rules",
        description: "Rules governing coordinate grids, vector path points, and technical notation layouts.",
        specs: [
          { label: "Dominant Path Weight", value: "1.0pt (#C5A880)" },
          { label: "Secondary Grid Weight", value: "0.25pt (#FAF9F5 with 15% opacity)" },
          { label: "Dashed Spec Lines", value: "2.0pt dash, 2.0pt gap" }
        ]
      },
      {
        title: "Ecological System Diagrams",
        description: "Flowchart templates used to illustrate Carbon Lifecycle inputs and output ratios transparently.",
        specs: [
          { label: "Node Radii Scale", value: "8px, 16px, 24px grid locks" },
          { label: "Directional Arrow Angle", value: "30° arrowheads, 1.5pt width" },
          { label: "Data Callouts", value: "Set in JetBrains Mono 9pt" }
        ]
      }
    ]
  }
];

export const blueprintTokens: BlueprintToken[] = [
  { name: "$font-display", value: "'Space Grotesk', sans-serif", category: "Typography", desc: "Our primary display font, carrying our engineering precision voice." },
  { name: "$font-sans", value: "'Inter', sans-serif", category: "Typography", desc: "Clean, organic, highly readable sans-serif for long editorial text." },
  { name: "$font-mono", value: "'JetBrains Mono', monospace", category: "Typography", desc: "Technical font used for metrics, blueprints, and material coordinates." },
  
  { name: "$color-forest-green", value: "#0B241A (RGB: 11, 36, 26)", category: "Colors", desc: "Deepest Forest Green representing stable carbon storage." },
  { name: "$color-warm-ivory", value: "#FAF9F5 (RGB: 250, 249, 245)", category: "Colors", desc: "Light, ultra-premium warm card and paper base coat." },
  { name: "$color-soft-emerald", value: "#10B981 (RGB: 16, 185, 129)", category: "Colors", desc: "Lively chlorophyll green used only for highlight states." },
  { name: "$color-prestige-gold", value: "#C5A880 (RGB: 197, 168, 128)", category: "Colors", desc: "Our custom luxury metallic highlight representing high-end quality." },
  
  { name: "$spacing-xs", value: "4px (0.25rem)", category: "Spacing", desc: "For tight borders and metadata details." },
  { name: "$spacing-sm", value: "12px (0.75rem)", category: "Spacing", desc: "Grid-blueprint padding and tiny structural spacers." },
  { name: "$spacing-md", value: "24px (1.5rem)", category: "Spacing", desc: "Standard card content inset and paragraph gap." },
  { name: "$spacing-lg", value: "48px (3rem)", category: "Spacing", desc: "Generous margins between columns and large section components." },
  { name: "$spacing-xl", value: "96px (6rem)", category: "Spacing", desc: "Major structural separation creating editorial luxurious breathing room." },
];

export const sustainabilityMilestones: SustainabilityMilestone[] = [
  {
    year: "2020",
    title: "Establishment of Zero-Plastic Inks",
    description: "Developed and certified our custom biopolymer soy inks, completely replacing petroleum-based solvents in standard printing presses.",
    impactMetric: "-94% Organic Solvents",
    status: "achieved"
  },
  {
    year: "2022",
    title: "100% Closed-Loop Supply Chain Integration",
    description: "Mandated zero waste across all physical packaging clients. Every box shipped is completely circular, compostable, and carbon-negative.",
    impactMetric: "8.4M Tons Waste Diverted",
    status: "achieved"
  },
  {
    year: "2024",
    title: "Local Material Sourcing Mandate",
    description: "Successfully limited resource extraction. 90% of all luxury paper fibers and limestone minerals are sourced within a 150-mile radius of fabrication.",
    impactMetric: "CO2 Transport down 80%",
    status: "achieved"
  },
  {
    year: "2026",
    title: "Carbon-Negative Server Infrastructure",
    description: "Pioneering the migration of all brand guidelines to local hydrogen-cell and clean geothermal data warehouses.",
    impactMetric: "120% Carbon Recovery",
    status: "active"
  },
  {
    year: "2028",
    title: "Self-Healing Biopolymer Packaging",
    description: "Testing organic cellulose materials that automatically repair microscopic tears using seaweed moisture retention, extending package life 300%.",
    impactMetric: "Planned R&D Pilot Phase",
    status: "scheduled"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "aero-fibre",
    client: "Aeronautics Group",
    industry: "Luxury Aviation Solutions",
    title: "Aero-Fibre Circular Packaging Concept",
    description: "Creating a completely plastic-free flight meal casing and asset suite. Constructed with custom structural bamboo fibers and organic seaweed moisture barriers.",
    tag: "Circular Materials",
    year: "2025",
    stats: [
      { label: "Plastic Diverted", value: "450k Ton/yr" },
      { label: "Weight Reduction", value: "28%" },
      { label: "Compost Cycle", value: "14 Days" }
    ],
    image: "https://picsum.photos/seed/aero/600/400",
    highlights: [
      "No chemical chemical adhesive binds",
      "Stackable interlocking honeycomb architecture",
      "Branded with 100% natural walnut extract pigment"
    ]
  },
  {
    id: "solaria",
    client: "Solaria Energy Corp",
    industry: "Renewable Megastructures",
    title: "Solaria Integrated Visual Architecture",
    description: "A total brand rebirth mapping global clean-energy arrays. Includes custom geographic coordinates typography, modular spatial guidelines, and weather-adaptive logos.",
    tag: "Global Identity",
    year: "2024",
    stats: [
      { label: "Global Reach", value: "14 Countries" },
      { label: "Digital CO2 saved", value: "62%" },
      { label: "Brand Premium Lift", value: "+34%" }
    ],
    image: "https://picsum.photos/seed/solaria/600/400",
    highlights: [
      "Dynamic weather API-driven logo color shift",
      "Ultra-low-power dark-mode digital specs",
      "Signage made of 100% recycled structural aluminum"
    ]
  },
  {
    id: "vanguard-retail",
    client: "Vanguard Atelier",
    industry: "High-End Sustainable Fashion",
    title: "Vanguard Regenerative Retail Box System",
    description: "A gorgeous, raw-linen texture garment envelope that doubles as an organic soil-fertilizing seed pod when planted.",
    tag: "Luxury Packaging",
    year: "2025",
    stats: [
      { label: "Soil Nutrients Added", value: "18 Essential" },
      { label: "Carbon Offsetting", value: "2.4x Gross" },
      { label: "Customer Engagement", value: "92%" }
    ],
    image: "https://picsum.photos/seed/fashion/600/400",
    highlights: [
      "Infused with organic wildflower seeds inside fiber layers",
      "Zero petrochemical wax coating used",
      "Double blind blind emboss for luxury branding texture"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "EcoSphere redefined our physical footprint. Their packaging blueprint saved aeronautics millions in weight transport costs, while placing our circular credentials at the absolute peak of the luxury market.",
    author: "Elena Rostova",
    role: "Chief of Sustainable Logistics",
    company: "Aero Logistics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "2",
    quote: "The brand guidelines are an absolute piece of industrial art. We don't just follow them—they guide our architectural spacing, our materials purchasing, and our entire investor narrative.",
    author: "Marcus Vance",
    role: "VP of Visual Experience",
    company: "Solaria Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "3",
    quote: "Unlike agencies that perform sustainability theater, EcoSphere delivered absolute mathematics. Their material blueprints compost completely, and the design hierarchy has won us consecutive international awards.",
    author: "Siddharth Mehta",
    role: "Executive Design Director",
    company: "Vanguard Atelier",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
  }
];

export const certifications = [
  "FSC Certified Forest Products",
  "B-Corp Executive Leader",
  "Carbon Neutral Design Protocol",
  "Cradle-to-Cradle Gold Material Spec",
  "Ellen MacArthur Circular Network Partner",
  "LEED Platinum Environmental Signage",
  "D&AD Sustainability Wood Pencil 2025",
  "One Show Green Design Gold Award"
];
