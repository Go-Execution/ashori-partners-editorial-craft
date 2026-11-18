export type ServiceSlug = "kitchen" | "bathroom" | "flooring" | "painting";

export interface ServiceItem {
  slug: ServiceSlug;
  plate: string;
  title: string;
  shortTitle: string;
  summary: string;
  headline: string;
  description: string;
  timeline: string;
  warranty: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  deliverables: {
    name: string;
    detail: string;
  }[];
}

export interface ProjectItem {
  id: string;
  plate: string;
  title: string;
  category: "Kitchens" | "Bathrooms" | "Flooring" | "Painting";
  location: string;
  year: string;
  scope: string;
  materials: string;
  image: string;
  imageAlt: string;
}

export const SITE_INFO = {
  name: "Ashori Partners LLC",
  shortName: "Ashori Partners",
  tagline: "Boston Architectural Renovation Monograph",
  phoneDisplay: "+1 (617) 290-0302",
  phoneHref: "tel:+16172900302",
  whatsappHref: "https://wa.me/16172900302",
  email: "ashoripartnersllc@gmail.com",
  emailHref: "mailto:ashoripartnersllc@gmail.com",
  location: "Boston, Massachusetts",
  serviceArea: "Greater Boston, Brookline, Cambridge, Newton & Somerville",
  instagramHref: "https://www.instagram.com/ashoripartners_llc",
  facebookHref: "https://www.facebook.com/share/1MLtF4u2sV/?mibextid=wwXIfr",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "kitchen",
    plate: "CH. I",
    title: "Kitchen Architecture & Cabinetry",
    shortTitle: "Kitchens",
    summary: "Bespoke cabinetry fitting, stone surfaces, glazed tile backsplashes, and warm architectural lighting.",
    headline: "Measured Kitchen Joinery Built for Daily Rituals",
    description:
      "We approach every Boston kitchen with cabinetmaker discipline: true wall planes, flush crown returns, centered outlet tile cuts, and seamless hardwood floor transitions.",
    timeline: "3 to 6 Weeks",
    warranty: "Licensed & Insured Craftsmanship",
    image: "/images/two-tone-kitchen.jpg",
    imageAlt: "Two-tone natural oak and matte white kitchen cabinetry with quartz countertops",
    highlights: [
      "Custom and semi-custom cabinet installation",
      "Quartz and natural stone countertop prep",
      "Subway and large-format tile backsplashes",
      "Under-cabinet task and pendant lighting",
    ],
    deliverables: [
      {
        name: "Millwork & Plumb Calibration",
        detail: "Shimmed wall frames, aligned reveal gaps, soft-close hardware tuning, and island paneling.",
      },
      {
        name: "Backsplash Tile Setting",
        detail: "Clean layouts centered around range hoods and windows with stain-resistant grout.",
      },
      {
        name: "Trim & Floor Continuity",
        detail: "Matching shoe molding and flush transitions into adjoining dining spaces.",
      },
    ],
  },
  {
    slug: "bathroom",
    plate: "CH. II",
    title: "Bathroom & Wet-Room Craft",
    shortTitle: "Bathrooms",
    summary: "Waterproofed walk-in showers, recessed niches, porcelain surrounds, and frameless glass enclosures.",
    headline: "Quiet, Watertight Bathrooms Engineered Behind the Tile",
    description:
      "Longevity starts beneath the porcelain. Every wet area is pitched, waterproofed with continuous membranes, and finished with balanced tile courses and tempered glass.",
    timeline: "2 to 4 Weeks",
    warranty: "Continuous Waterproof Membrane",
    image: "/images/marble-niche-shower.jpg",
    imageAlt: "Veined porcelain tile shower with built-in stainless-trimmed storage niche",
    highlights: [
      "Sloped shower pans and continuous waterproofing",
      "Recessed shampoo niches with metal profiles",
      "Frameless heavy tempered glass doors",
      "Vanities, fixtures, and exhaust upgrades",
    ],
    deliverables: [
      {
        name: "Waterproofing & Substrate Prep",
        detail: "Sealed wall boards, pre-sloped pans, and corner membrane reinforcement.",
      },
      {
        name: "Balanced Tile Architecture",
        detail: "Symmetrical wall courses, mitered niche edges, and tight perimeter silicone joints.",
      },
      {
        name: "Fixture & Glass Fitting",
        detail: "Plumb glass panels, brushed nickel or matte black trim, and crisp mirror installation.",
      },
    ],
  },
  {
    slug: "flooring",
    plate: "CH. III",
    title: "Hardwood Floors & Staircases",
    shortTitle: "Flooring & Stairs",
    summary: "Wide-plank white oak installation, subfloor leveling, and custom LED-illuminated staircases.",
    headline: "Solid Oak Craftsmanship Beneath Every Step",
    description:
      "From wide-plank living areas to custom oak stair treads with concealed warm LED lighting, our flooring crew eliminates squeaks and delivers razor-tight miters.",
    timeline: "1 to 3 Weeks",
    warranty: "Acclimated & Moisture Verified",
    image: "/images/staircase-vertical.jpg",
    imageAlt: "Custom white oak staircase with warm concealed LED step lighting",
    highlights: [
      "Solid and engineered wide-plank oak",
      "Custom oak stair treads, risers, and rails",
      "Concealed low-voltage warm LED channels",
      "Subfloor fastening and flatness prep",
    ],
    deliverables: [
      {
        name: "Subfloor & Moisture Prep",
        detail: "Screw-fastened joists, flatness grinding, and proper wood acclimation prior to install.",
      },
      {
        name: "Illuminated Stair Carpentry",
        detail: "Custom nosing profiles with recessed warm LED channels wired cleanly per tread.",
      },
      {
        name: "Baseboard & Vent Detailing",
        detail: "Flush wood air registers and clean baseboard scribed to historic Boston plaster walls.",
      },
    ],
  },
  {
    slug: "painting",
    plate: "CH. IV",
    title: "Interior Painting & Woodwork",
    shortTitle: "Interior Painting",
    summary: "Plaster and drywall skimming, crisp architectural trimwork, and durable low-VOC interior coatings.",
    headline: "Crisp Cut Lines & Plaster-Smooth Walls",
    description:
      "Boston homes deserve patient surface prep. We mask every room, skim-coat imperfections under raking light, and apply hard-wearing enamels to doors, casings, and crown.",
    timeline: "3 to 10 Days",
    warranty: "Spotless Site Protection",
    image: "/images/dining-trim-paint.jpg",
    imageAlt: "Freshly painted dining room with crisp white window casing and refinished oak flooring",
    highlights: [
      "Plaster repair and level-5 skim coating",
      "Fine-finish urethane enamels on woodwork",
      "Low-VOC matte and satin interior walls",
      "Full floor masking and daily cleanup",
    ],
    deliverables: [
      {
        name: "Surface Restoration",
        detail: "Crack stabilization, feather-sanded joint compound, and stain-blocking primer coats.",
      },
      {
        name: "Architectural Trim Enamel",
        detail: "Smooth, brush-mark-free urethane finishes on historic casings, doors, and built-ins.",
      },
      {
        name: "Two-Coat Uniform Depth",
        detail: "Even sheen across sunlit walls and evening interior lighting.",
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "oak-led-staircase",
    plate: "P-01",
    title: "Illuminated White Oak Staircase",
    category: "Flooring",
    location: "Greater Boston, MA",
    year: "2026",
    scope: "Custom white oak treads, concealed warm LED under-tread lighting, and matching wide-plank landing.",
    materials: "Select White Oak, Warm 2700K LED Channel, Matte Urethane",
    image: "/images/led-oak-staircase.jpg",
    imageAlt: "Custom white oak staircase with recessed warm LED lighting under each tread",
  },
  {
    id: "two-tone-oak-kitchen",
    plate: "P-02",
    title: "Two-Tone White & Natural Oak Kitchen",
    category: "Kitchens",
    location: "Newton, MA",
    year: "2026",
    scope: "Natural white oak base cabinets paired with tall matte white upper storage and continuous oak flooring.",
    materials: "White Oak Veneer, Matte Lacquer Uppers, Quartz",
    image: "/images/two-tone-kitchen.jpg",
    imageAlt: "Two-tone kitchen with oak base cabinets and white upper cabinets",
  },
  {
    id: "emerald-subway-kitchen",
    plate: "P-03",
    title: "Olive Tile & Shaker Kitchen",
    category: "Kitchens",
    location: "Boston, MA",
    year: "2026",
    scope: "Full cabinetry suite, glazed green subway backsplash, matte black pulls, and wide-plank hardwood.",
    materials: "Glazed Ceramic Subway Tile, Painted Shaker Cabinetry",
    image: "/images/emerald-tile-kitchen.jpg",
    imageAlt: "Kitchen remodel with white cabinetry and green subway tile backsplash",
  },
  {
    id: "frameless-glass-bath",
    plate: "P-04",
    title: "Frameless Glass Walk-In Shower",
    category: "Bathrooms",
    location: "Brookline, MA",
    year: "2026",
    scope: "Vertical stacked ceramic shower walls, brushed nickel valve trim, and custom frameless glass door.",
    materials: "Stacked Ceramic Wall Tile, 3/8-inch Tempered Glass",
    image: "/images/frameless-glass-shower.jpg",
    imageAlt: "Modern walk-in shower with vertical tile and frameless glass door",
  },
  {
    id: "marble-niche-shower",
    plate: "P-05",
    title: "Veined Porcelain Niche Shower",
    category: "Bathrooms",
    location: "Cambridge, MA",
    year: "2026",
    scope: "Large-format stone-veined tile surround, built-in recessed shelf niche, and recessed LED ceiling lights.",
    materials: "Veined Porcelain Slab Tile, Brushed Steel Niche Trim",
    image: "/images/marble-niche-shower.jpg",
    imageAlt: "Custom shower with veined porcelain wall tiles and built-in niche",
  },
  {
    id: "dining-casing-paint",
    plate: "P-06",
    title: "Historic Casing & Dining Refresh",
    category: "Painting",
    location: "Somerville, MA",
    year: "2026",
    scope: "Wall resurfacing, muted sage finish, enameled window casings and baseboards, and oak floor restoration.",
    materials: "Low-VOC Matte Wall Paint, Urethane Trim Enamel",
    image: "/images/dining-trim-paint.jpg",
    imageAlt: "Dining room with newly painted walls and crisp white architectural trim",
  },
  {
    id: "open-island-kitchen",
    plate: "P-07",
    title: "Open-Concept Island Kitchen",
    category: "Kitchens",
    location: "Boston, MA",
    year: "2026",
    scope: "Center waterfall prep island, triple glass pendant fixtures, and continuous wide-plank flooring.",
    materials: "Quartz Island Top, Brushed Steel Pulls, Wide-Plank Oak",
    image: "/images/open-kitchen-island.jpg",
    imageAlt: "Open-concept kitchen with white quartz island and pendant lighting",
  },
  {
    id: "precision-cabinet-fit",
    plate: "P-08",
    title: "On-Site Cabinetry Fit & Trim",
    category: "Kitchens",
    location: "Boston, MA",
    year: "2026",
    scope: "Precision cabinet shelf fitting, crown molding joinery, and solid brass hardware installation.",
    materials: "Painted Shaker Doors, Brass Knobs, Architectural Crown",
    image: "/images/craftsman-cabinetry.jpg",
    imageAlt: "Ashori Partners craftsman fitting white kitchen cabinet shelving",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "On-Site Walkthrough",
    detail: "We measure rooms in person, inspect subfloors or plumbing access, and discuss finish goals.",
  },
  {
    step: "02",
    title: "Written Scope & Schedule",
    detail: "You receive a clear line-item proposal outlining materials, milestones, and duration.",
  },
  {
    step: "03",
    title: "Home Protection",
    detail: "Before work starts, we mask floors, seal dust zones, and stage tools cleanly.",
  },
  {
    step: "04",
    title: "Craft Execution",
    detail: "Our experienced crew handles framing, waterproofing, tile, hardwood, cabinetry, and paint.",
  },
  {
    step: "05",
    title: "Final Inspection",
    detail: "We walk every detail together under natural and evening lighting before sign-off.",
  },
];

export const STANDARDS = [
  {
    number: "01",
    title: "We Treat Your Home Like Our Own",
    description: "Protective floor runners, clean dust barriers, and daily sweep-ups come standard.",
  },
  {
    number: "02",
    title: "Licensed & Insured Professionals",
    description: "Complete Massachusetts residential licensing and liability protection on every job.",
  },
  {
    number: "03",
    title: "Stage-by-Stage Quality Control",
    description: "Every substrate, waterproof layer, and miter joint is verified before moving ahead.",
  },
  {
    number: "04",
    title: "Over 20 Years Experience",
    description: "Two decades of construction craft backed by more than 10 years in business.",
  },
  {
    number: "05",
    title: "Direct, Honest Communication",
    description: "Straight timelines and transparent answers directly from the team building your space.",
  },
  {
    number: "06",
    title: "Durable, Lasting Finishes",
    description: "Materials and installation methods chosen for daily family life and New England homes.",
  },
];

export const FAQS = [
  {
    question: "Where around Boston does Ashori Partners LLC work?",
    answer:
      "We serve Greater Boston homeowners across Boston, Brookline, Cambridge, Somerville, Newton, Quincy, and surrounding communities.",
  },
  {
    question: "How quickly can I schedule an estimate walkthrough?",
    answer:
      "Call +1 (617) 290-0302, message us on WhatsApp, or submit the form below. Most Boston walkthroughs are scheduled within a few business days.",
  },
  {
    question: "Can one crew handle kitchen, flooring, and painting together?",
    answer:
      "Yes. Coordinating cabinetry, tile, hardwood flooring, stairs, and interior painting together keeps transitions seamless and shortens overall downtime.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Ashori Partners LLC is fully licensed and insured with over 20 years of construction experience and more than 10 years in business.",
  },
];
