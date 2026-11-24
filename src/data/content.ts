import { Service, GalleryItem, MaterialSwatch, BeforeAfterPair, TestimonialHighlight, ProcessStep } from '../types';

export const BUSINESS_INFO = {
  name: "J D R SOFA LINING WORK",
  shortName: "JDR Sofa Lining",
  category: "Sofa Upholstery, Sofa Lining & Furniture Restoration",
  whatsappNumber: "+91 96000 94172",
  phoneDisplay: "+91 96000 94172",
  phoneRaw: "+919600094172",
  whatsappUrl: "https://wa.me/919600094172",
  defaultMessage: "Hello J D R Sofa Lining Work, I would like to enquire about your sofa lining and upholstery services.",
  rating: 4.9,
  reviewsCount: 66,
  serviceArea: "Doorstep Inspection & Pickup Available across the region",
  workingHours: "Monday – Saturday: 9:00 AM – 8:30 PM | Sunday: By Appointment",
};

export const createWhatsAppUrl = (message?: string) => {
  const text = message ? encodeURIComponent(message) : encodeURIComponent(BUSINESS_INFO.defaultMessage);
  return `https://wa.me/919600094172?text=${text}`;
};

export const SERVICES: Service[] = [
  {
    id: "sofa-lining-upholstery",
    title: "Sofa Lining & Upholstery",
    tagline: "Complete structural relining and artisanal fabric fitting",
    description: "Full strip-down and master lining replacement. We renew the internal support webbing, backing fabrics, and outer luxury upholstery to restore shape, tension, and comfort.",
    features: [
      "Precision hand-guided pattern cutting",
      "Reinforced high-tensile internal webbing",
      "Durable, breathable backing lining fabrics",
      "Double-stitched stress points for longevity"
    ],
    imageUrl: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1200&q=85",
    badge: "Most Popular",
    whatsappMessage: "Hello J D R Sofa Lining Work, I would like to enquire about complete Sofa Lining & Upholstery for my sofa."
  },
  {
    id: "fabric-replacement",
    title: "Sofa Fabric Replacement",
    tagline: "Swap out worn, stained, or outdated coverings",
    description: "Breathe fresh life into your living room aesthetic. Choose from hundreds of premium textures including textured linens, velvets, leatherettes, and performance fabrics.",
    features: [
      "Extensive catalogue of colours & patterns",
      "Stain-resistant and pet-friendly fabric options",
      "Seamless alignment of patterns and piping",
      "Preserves original frame structure"
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    whatsappMessage: "Hello J D R Sofa Lining Work, I would like to enquire about Sofa Fabric Replacement. Can you share fabric catalogues and quotation details?"
  },
  {
    id: "cushion-work-restuffing",
    title: "Sofa Cushion Work & Foam Restuffing",
    tagline: "Eradicate saggy cushions and restore ergonomic bounce",
    description: "Replace tired, hollow, or sagging foam with high-density polyurethane or memory foam cores wrapped in soft virgin fiber for supreme luxury seating.",
    features: [
      "Choice of 32D, 40D, or 50D premium high-resilience foam",
      "Soft micro-poly fiber quilt wrap for plush crown",
      "Custom shape fabrication (T-cushions, bench seats)",
      "Zip-closure cushion refurbishment"
    ],
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85",
    badge: "Comfort Upgrade",
    whatsappMessage: "Hello J D R Sofa Lining Work, my sofa cushions are sagging and need restuffing. Please guide me on foam replacement options and prices."
  },
  {
    id: "restoration-refurbishment",
    title: "Sofa Restoration & Refurbishment",
    tagline: "Comprehensive renewal of heirloom & vintage furniture",
    description: "For heritage sofas, vintage chesterfields, and solid wood sets. We repair internal joinery, tighten springs, refinish exposed woodwork, and re-upholster from scratch.",
    features: [
      "Hardwood frame inspection and reinforcement",
      "Traditional button-tufting and deep diamond pleating",
      "Coil spring retensioning and burlap lining",
      "Exposed wood polish & scratch touch-ups"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85",
    whatsappMessage: "Hello J D R Sofa Lining Work, I have an old/vintage sofa that needs comprehensive restoration and refurbishment. Could you inspect it?"
  },
  {
    id: "furniture-upholstery",
    title: "Furniture Upholstery",
    tagline: "Accent chairs, dining chairs, ottomans & headboards",
    description: "Extend cohesive luxury throughout your interiors. We expertly upholster dining set chairs, wingback armchairs, padded headboards, and storage ottomans.",
    features: [
      "Tailored wingback and lounge armchair restyling",
      "High-back dining chair seat and back upholstery",
      "Padded bedroom wall panels & headboards",
      "Ottoman and footstool custom crafting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=85",
    badge: "Chairs & Ottomans",
    whatsappMessage: "Hello J D R Sofa Lining Work, I would like to get an estimate for upholstering chairs / headboard / furniture."
  },
  {
    id: "custom-upholstery-solutions",
    title: "Custom Upholstery Solutions",
    tagline: "Bespoke dimensions, piping, tufting, and custom styling",
    description: "Have a unique sectional, curved couch, or custom interior vision? We execute tailor-made upholstery solutions with contrast piping, brass nailhead trim, and custom shapes.",
    features: [
      "Decorative brass nailhead and stud detailing",
      "Contrast corded piping and flange seams",
      "L-shape & sectional modular alignment",
      "Commercial upholstery for offices & lounges"
    ],
    imageUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85",
    badge: "Bespoke",
    whatsappMessage: "Hello J D R Sofa Lining Work, I need a custom upholstery solution for my furniture. Can I share the measurements and design requirements?"
  }
];

export const BEFORE_AFTER_SETS: BeforeAfterPair[] = [
  {
    id: "emerald-velvet-transformation",
    title: "3-Seater Classic to Modern Emerald Velvet",
    description: "A 9-year-old living room couch with collapsed seat cushions and faded, worn-out jacquard fabric was completely stripped down. Fitted with heavy-duty 40D foam and enveloped in stain-resistant royal velvet with matching knife-edge piping.",
    beforeImage: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85",
    afterImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    beforeTag: "Before: Faded Fabric & Collapsed Foam",
    afterTag: "After: Master Velvet Relining & High-Density Support",
    workDone: [
      "Replaced sagging base webbing with heavy-duty elastic webbing",
      "Custom-cut 40D high-resilience foam cushions",
      "Premium plush emerald green velvet with scotchgard protection",
      "Handcrafted contrast piped border detailing"
    ]
  },
  {
    id: "leatherette-lounge-transformation",
    title: "Executive Chair Rebirth in Handcrafted Leather",
    description: "Original chairs with peeling, cracked synthetic leather and weak backing were completely overhauled. Stripped to bare frame, reinforced, and re-upholstered in premium embossed leather with hand-guided saddle stitching.",
    beforeImage: "https://upload.wikimedia.org/wikipedia/commons/2/23/Leather_chair_upholstery_by_Eugene_Pik_%282022%29_01.jpg",
    afterImage: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Leather_chair_upholstery_by_Eugene_Pik_%282022%29_05.jpg",
    beforeTag: "Before: Peeling Synthetic Surface",
    afterTag: "After: Master Embossed Leather Craft",
    workDone: [
      "Stripped degraded, peeling imitation vinyl from frames",
      "Reinforced frame joints and ergonomic backing tension",
      "Tailored full-grain embossed leather upholstery",
      "Precision perimeter stitching with artisan leathercraft tools"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Architectural Sectional",
    category: "modern",
    categoryLabel: "Modern Sofas",
    description: "L-shaped living room sectional reupholstered in heavy textured oatmeal linen with clean minimalist piping.",
    fabric: "Oatmeal Textured Linen",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    featured: true
  },
  {
    id: "gal-2",
    title: "Navy Jewel-Tone Modern Sectional",
    category: "velvet-leather",
    categoryLabel: "Velvet & Leatherette",
    description: "Deep jewel-toned navy velvet upholstery with high-resilience foam core and bespoke tailored cushions.",
    fabric: "Midnight Navy Micro-Velvet",
    imageUrl: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=85",
    featured: true
  },
  {
    id: "gal-3",
    title: "Saddle Tan Leatherette Lounge Chair",
    category: "velvet-leather",
    categoryLabel: "Velvet & Leatherette",
    description: "Hand-stitched faux leather armchair with solid wood arm accents, dual-density foam, and reinforced seam tension.",
    fabric: "Saddle Tan Vegan Leatherette",
    imageUrl: "https://images.unsplash.com/photo-1761864293821-033e75c1eba3?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-4",
    title: "Plush Feather-Touch Cushion Restuffing",
    category: "cushions",
    categoryLabel: "Cushions & Detailing",
    description: "Custom crown-cut high-density foam wrapped in fiber batting, returning structured loft to sagging seating.",
    fabric: "Heavy Weave Heather Grey Linen",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-5",
    title: "Chesterfield Deep Tufted Heritage Sofa",
    category: "classic",
    categoryLabel: "Classic & Chesterfield",
    description: "Traditional deep button tufting with rolled armrests, antique brass studs, and hand-pleated diamond diamond folds.",
    fabric: "Vintage Cognac Leatherette",
    imageUrl: "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85",
    featured: true
  },
  {
    id: "gal-6",
    title: "Warm Ochre Contemporary 2-Seater",
    category: "modern",
    categoryLabel: "Modern Sofas",
    description: "Vibrant living room accent piece transformed with soft-touch matte upholstery fabric.",
    fabric: "Sunlit Ochre Brushed Canvas",
    imageUrl: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-7",
    title: "Tailored High-Back Lounge & Ottoman",
    category: "classic",
    categoryLabel: "Classic & Chesterfield",
    description: "Precision upholstered reading chair with matching footrest, tailored fluted contours, and solid walnut leg contrast.",
    fabric: "Dove Grey Wool Blend",
    imageUrl: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-8",
    title: "Bespoke Curved Designer Lounge",
    category: "modern",
    categoryLabel: "Modern Sofas",
    description: "Complex radius upholstery with flawless tension across curved backrest and invisible seams.",
    fabric: "Warm Sand Belgian Linen",
    imageUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
  }
];

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: "mat-velvet",
    name: "Royal Micro-Velvet",
    category: "Velvet",
    colorName: "Forest Emerald / Midnight Navy / Champagne",
    hexCode: "#2A4736",
    textureImageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Green_velvet_fabric.jpg",
    feel: "Sumptuously soft, deep luster, luxurious dense pile",
    durability: "High (45,000+ Martindale Rubs)",
    recommendedFor: "Living room statement sofas, accent chairs, tufted headboards",
    cleaning: "Spot clean with damp cloth, vacuum with soft brush attachment",
    description: "A tightly woven short-pile micro-velvet that resists crushing and snagging while maintaining a rich, luminous sheen in natural and ambient interior lighting."
  },
  {
    id: "mat-linen",
    name: "Heavyweight Textured Linen",
    category: "Textured Fabric",
    colorName: "Oatmeal / Natural Flax / Warm Pebble",
    hexCode: "#D8C8B5",
    textureImageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Tweed_fabric.jpg",
    feel: "Textured, crisp, naturally breathable and cool to touch",
    durability: "Excellent (40,000+ Martindale Rubs)",
    recommendedFor: "Contemporary sectionals, relaxed Scandinavian styling, family sofas",
    cleaning: "Removable cushion covers machine-washable or gentle dry clean",
    description: "Woven with multi-tonal slub yarns that mask minor everyday dust and deliver an effortlessly sophisticated, relaxed architectural aesthetic."
  },
  {
    id: "mat-leatherette",
    name: "Premium Vegan Leatherette",
    category: "Leatherette",
    colorName: "Caramel Walnut / Espresso / Vintage Cognac",
    hexCode: "#604533",
    textureImageUrl: "https://images.unsplash.com/photo-1776344651378-5bbb6d68701c?auto=format&fit=crop&w=800&q=85",
    feel: "Supple, authentic pebble grain with genuine leather-like warmth",
    durability: "Extreme (50,000+ Martindale Rubs & Scratch Resistant)",
    recommendedFor: "High-traffic homes, pet owners, recliners, executive armchairs",
    cleaning: "Wipe-clean with warm mild soapy water; zero conditioning required",
    description: "A breathable, high-grade composite leatherette engineered to resist peeling, cracking, and spills while delivering the rich heritage patina of aged leather."
  },
  {
    id: "mat-chenille",
    name: "Plush Woven Chenille",
    category: "Chenille",
    colorName: "Deep Charcoal / Slate Brown / Dusty Rose",
    hexCode: "#33302D",
    textureImageUrl: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=85",
    feel: "Cushioned, fuzzy yarn texture with soft thermal comfort",
    durability: "High (35,000+ Martindale Rubs)",
    recommendedFor: "Cozy family television rooms, deep-seated lounging couches",
    cleaning: "Light vacuuming, water-based foam upholstery cleaner",
    description: "Renowned for its velvety pile yarns wrapped into the core weave, chenille yields an inviting depth of tactile comfort and heat retention for ultimate lounging."
  },
  {
    id: "mat-performance",
    name: "Stain-Defend Performance Weave",
    category: "Performance",
    colorName: "Sage Olive / Stone Grey / Sand Dune",
    hexCode: "#5F6B5C",
    textureImageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/TEX01227_1.jpg",
    feel: "High-density weave with smooth, spill-resistant finish",
    durability: "Ultimate (60,000+ Martindale Rubs)",
    recommendedFor: "Homes with energetic toddlers, active pets, or dining bench seating",
    cleaning: "Spills bead on contact; easily blotted away with a paper towel",
    description: "Treated with eco-friendly fluorocarbon-free liquid repellent at the yarn level, ensuring coffee, tea, and grease spills remain on the surface without penetrating fibers."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "GET IN TOUCH",
    headline: "Tell us what your furniture needs",
    description: "Send us a quick WhatsApp photo or video of your sofa, chair, or cushions. Mention any specific issues such as sagging foam, torn cloth, or your desire for a completely new color scheme.",
    bulletPoints: [
      "Quick photo sharing on WhatsApp",
      "Mention your sofa dimensions or seating count",
      "Get initial feedback within minutes"
    ],
    iconName: "MessageSquareQuote"
  },
  {
    stepNumber: "02",
    title: "DISCUSS YOUR REQUIREMENTS",
    headline: "Discuss the desired fabric, finish and work",
    description: "We help you select the ideal fabric, texture, and foam firmness. Choose between luxurious velvets, pet-friendly leatherette, or breathable textured linens suited to your space.",
    bulletPoints: [
      "Physical & digital fabric catalogue options",
      "Guidance on foam density (32D to 50D)",
      "Piping, tufting, and custom finish options"
    ],
    iconName: "Sparkles"
  },
  {
    stepNumber: "03",
    title: "GET YOUR QUOTATION",
    headline: "Receive a transparent quotation tailored to you",
    description: "Receive a clear, competitive quotation covering all materials, high-grade foam restuffing, internal webbing renewal, and master craftsman labor without hidden surprises.",
    bulletPoints: [
      "Transparent breakdown of work",
      "No obligation quotation",
      "Scheduled timeline for pickup & delivery"
    ],
    iconName: "ReceiptCheck"
  },
  {
    stepNumber: "04",
    title: "TRANSFORM YOUR FURNITURE",
    headline: "Proceed with the agreed work",
    description: "Our experienced artisans strip, reinforce, restuff, and hand-tailor your sofa with precision stitching. Your furniture is delivered looking and feeling like a brand-new showroom centerpiece.",
    bulletPoints: [
      "Master artisan upholstery craft",
      "Rigorous quality check before delivery",
      "Complete transformation guaranteed"
    ],
    iconName: "Armchair"
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Meticulous Attention to Detail",
    description: "Every cut, seam, and stitch is calculated to align perfectly with your sofa's frame. We take pride in balanced piping, aligned patterns, and unblemished tension."
  },
  {
    number: "02",
    title: "Quality-Focused Workmanship",
    description: "We refuse to cut corners on internal components. We use high-tensile cross-webbing, heavy-gauge springs, and genuine high-density foam that will not sag within months."
  },
  {
    number: "03",
    title: "True Furniture Transformation",
    description: "Instead of spending 3x to 5x on brand-new sofas that often use cheap particle-board frames, we reinforce your sturdy existing wooden frame and give it a bespoke designer finish."
  },
  {
    number: "04",
    title: "Personalised Customer Requirements",
    description: "No two homes are identical. We customize your seating cushion firmness (soft, medium, orthopedic firm), edge borders, tufting style, and fabric textures to your taste."
  },
  {
    number: "05",
    title: "Honest & Transparent Advice",
    description: "We inspect your furniture and provide frank recommendations on what truly needs replacement versus what can be preserved, saving you unnecessary expenditure."
  }
];

export const TRUST_THEMES: TestimonialHighlight[] = [
  {
    id: "trust-1",
    reviewTheme: "Workmanship & Stitching Precision",
    summary: "Customers consistently highlight the flawless fabric stitching, tight tensioning, and immaculate finish that rival high-end furniture showrooms.",
    rating: 5,
    highlight: "Looks better than when purchased new",
    serviceType: "Sofa Lining & Upholstery"
  },
  {
    id: "trust-2",
    reviewTheme: "Cushion Comfort & Foam Restoration",
    summary: "Reviews frequently praise the dramatic improvement in seating firmness and ergonomic comfort after replacing hollowed, sagging foam.",
    rating: 5,
    highlight: "Back pain relief & perfect firmness",
    serviceType: "Cushion Restuffing"
  },
  {
    id: "trust-3",
    reviewTheme: "Punctual Delivery & Reliable Service",
    summary: "Prompt response via WhatsApp, honest cost estimates without hidden charges, and respectful handling during furniture transport.",
    rating: 5,
    highlight: "Transparent quotation & on-time return",
    serviceType: "Fabric Replacement"
  },
  {
    id: "trust-4",
    reviewTheme: "Material Guidance & Finish Selection",
    summary: "Clients appreciate the thoughtful recommendations on selecting pet-friendly, easy-to-clean fabrics suitable for active everyday household use.",
    rating: 5,
    highlight: "Expert fabric advice for pets & children",
    serviceType: "Custom Upholstery"
  }
];

export const FAQS = [
  {
    question: "How do I get an estimate for my sofa?",
    answer: "Simply click the 'Quote on WhatsApp' button and send 2-3 clear photos of your sofa, along with your location. Tell us whether you need complete fabric replacement, cushion restuffing, or both. We usually reply with an estimated quotation within 30 minutes."
  },
  {
    question: "Can you provide door pickup and delivery?",
    answer: "Yes, we arrange convenient doorstep pickup and delivery for sofas and large furniture across our service areas. Our team handles your furniture with care."
  },
  {
    question: "How long does a complete sofa relining take?",
    answer: "Most standard 3-seater or 5-seater sofa relining and fabric replacements are completed within 4 to 7 working days once fabric selection is finalized."
  },
  {
    question: "Can I choose my own fabric or do you provide fabric swatches?",
    answer: "We bring a rich physical catalogue of high-grade fabrics, velvets, linens, and leatherettes directly for you to touch and feel during consultation, or you may provide your own fabric if preferred."
  },
  {
    question: "Why should I re-upholster instead of buying a new sofa?",
    answer: "Older and mid-tier older sofas generally have heavy, solid hardwood or engineered timber frames that far exceed the durability of today's lightweight commercial flat-pack furniture. Re-upholstering saves 50% to 70% of the cost of a comparable new luxury couch while giving you 100% custom fabric control."
  }
];
