export interface Tailor {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  area: string;
  priceRange: '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹';
  minPrice: number;
  maxPrice: number;
  services: string[];
  distance: string;
  portfolioImages: string[];
  deliveryAvailable: boolean;
  homeConsultation: boolean;
  categories: string[];
  featured: boolean;
  tagline: string;
  lat: number;
  lng: number;
}

export const MUMBAI_AREAS = [
  'Andheri West',
  'Andheri East',
  'Bandra West',
  'Bandra East',
  'Juhu',
  'Santacruz',
  'Versova',
  'Khar',
  'Vile Parle',
];

export const CATEGORIES = [
  { id: 'western-wear', label: 'Western Wear', image: '/assets/generated/cat-western-wear.dim_128x128.png' },
  { id: 'ethnic-wear', label: 'Ethnic Wear', image: '/assets/generated/cat-ethnic-wear.dim_128x128.png' },
  { id: 'bridal-wear', label: 'Bridal Wear', image: '/assets/generated/cat-bridal-wear.dim_128x128.png' },
  { id: 'alterations', label: 'Alterations', image: '/assets/generated/cat-alterations.dim_128x128.png' },
  { id: 'kids-wear', label: 'Kids Wear', image: '/assets/generated/cat-kids-wear.dim_128x128.png' },
  { id: 'mens-formal', label: "Men's Formal", image: '/assets/generated/cat-mens-formal.dim_128x128.png' },
];

const PORTFOLIO_IMAGES = [
  '/assets/generated/portfolio-outfit-1.dim_400x500.png',
  '/assets/generated/portfolio-outfit-2.dim_400x500.png',
  '/assets/generated/portfolio-outfit-3.dim_400x500.png',
];

// ─── Original 8 entries ───────────────────────────────────────────────────────
const ORIGINAL_TAILORS: Tailor[] = [
  {
    id: '1',
    name: 'Meena Boutique & Tailors',
    rating: 4.8,
    reviewCount: 142,
    address: 'Shop 4, Lokhandwala Complex, Andheri West, Mumbai 400053',
    phone: '+91 98201 45678',
    area: 'Andheri West',
    priceRange: '₹₹',
    minPrice: 800,
    maxPrice: 5000,
    services: ['Salwar Kameez', 'Blouse Stitching', 'Alterations', 'Lehenga'],
    distance: '0.8 km',
    portfolioImages: PORTFOLIO_IMAGES,
    deliveryAvailable: true,
    homeConsultation: true,
    categories: ['ethnic-wear', 'bridal-wear', 'alterations'],
    featured: true,
    tagline: 'Expert in ethnic & bridal wear since 1998',
    lat: 19.136,
    lng: 72.826,
  },
  {
    id: '2',
    name: 'Stitch Perfect — Bandra',
    rating: 4.6,
    reviewCount: 89,
    address: '12, Hill Road, Bandra West, Mumbai 400050',
    phone: '+91 98765 32100',
    area: 'Bandra West',
    priceRange: '₹₹₹',
    minPrice: 1500,
    maxPrice: 12000,
    services: ['Western Wear', 'Formal Suits', 'Dresses', 'Alterations'],
    distance: '2.3 km',
    portfolioImages: [PORTFOLIO_IMAGES[1], PORTFOLIO_IMAGES[0], PORTFOLIO_IMAGES[2]],
    deliveryAvailable: true,
    homeConsultation: false,
    categories: ['western-wear', 'mens-formal', 'alterations'],
    featured: true,
    tagline: 'Contemporary cuts, timeless style',
    lat: 19.059,
    lng: 72.836,
  },
  {
    id: '3',
    name: 'Juhu Silai Centre',
    rating: 4.4,
    reviewCount: 67,
    address: 'Near Juhu Beach, JVPD Scheme, Juhu, Mumbai 400049',
    phone: '+91 99200 11234',
    area: 'Juhu',
    priceRange: '₹',
    minPrice: 300,
    maxPrice: 2500,
    services: ['Alterations', 'Kids Wear', 'Casual Stitching', 'Repairs'],
    distance: '1.5 km',
    portfolioImages: [PORTFOLIO_IMAGES[2], PORTFOLIO_IMAGES[1], PORTFOLIO_IMAGES[0]],
    deliveryAvailable: false,
    homeConsultation: false,
    categories: ['alterations', 'kids-wear'],
    featured: false,
    tagline: 'Quick, affordable alterations & repairs',
    lat: 19.098,
    lng: 72.826,
  },
  {
    id: '4',
    name: 'Santacruz Bridal Studio',
    rating: 4.9,
    reviewCount: 203,
    address: '7, Linking Road, Santacruz West, Mumbai 400054',
    phone: '+91 98334 56789',
    area: 'Santacruz',
    priceRange: '₹₹₹₹',
    minPrice: 5000,
    maxPrice: 50000,
    services: ['Bridal Lehenga', 'Saree Blouse', 'Bridal Gown', 'Embroidery'],
    distance: '3.1 km',
    portfolioImages: PORTFOLIO_IMAGES,
    deliveryAvailable: true,
    homeConsultation: true,
    categories: ['bridal-wear', 'ethnic-wear'],
    featured: true,
    tagline: 'Your dream bridal look, crafted with love',
    lat: 19.082,
    lng: 72.843,
  },
  {
    id: '5',
    name: 'Khar Tailoring House',
    rating: 4.3,
    reviewCount: 55,
    address: '22, 16th Road, Khar West, Mumbai 400052',
    phone: '+91 97690 78901',
    area: 'Khar',
    priceRange: '₹₹',
    minPrice: 700,
    maxPrice: 6000,
    services: ["Men's Kurta", 'Formal Shirts', 'Trousers', 'Alterations'],
    distance: '2.7 km',
    portfolioImages: [PORTFOLIO_IMAGES[1], PORTFOLIO_IMAGES[2], PORTFOLIO_IMAGES[0]],
    deliveryAvailable: false,
    homeConsultation: true,
    categories: ['mens-formal', 'ethnic-wear', 'alterations'],
    featured: false,
    tagline: 'Precision tailoring for the modern man',
    lat: 19.071,
    lng: 72.833,
  },
  {
    id: '6',
    name: 'Versova Fashion Studio',
    rating: 4.5,
    reviewCount: 78,
    address: 'Aram Nagar Part 2, Versova, Andheri West, Mumbai 400061',
    phone: '+91 98456 23456',
    area: 'Versova',
    priceRange: '₹₹',
    minPrice: 600,
    maxPrice: 4500,
    services: ['Western Wear', 'Casual Dresses', 'Kids Wear', 'Blouses'],
    distance: '1.2 km',
    portfolioImages: [PORTFOLIO_IMAGES[0], PORTFOLIO_IMAGES[2], PORTFOLIO_IMAGES[1]],
    deliveryAvailable: true,
    homeConsultation: true,
    categories: ['western-wear', 'kids-wear', 'ethnic-wear'],
    featured: false,
    tagline: 'Trendy styles for the whole family',
    lat: 19.127,
    lng: 72.812,
  },
  {
    id: '7',
    name: 'Vile Parle Master Tailor',
    rating: 4.7,
    reviewCount: 119,
    address: 'Shop 8, Nehru Road, Vile Parle East, Mumbai 400057',
    phone: '+91 99876 54321',
    area: 'Vile Parle',
    priceRange: '₹₹',
    minPrice: 900,
    maxPrice: 7000,
    services: ['Formal Suits', 'Sherwanis', 'Ethnic Wear', 'Alterations'],
    distance: '4.0 km',
    portfolioImages: [PORTFOLIO_IMAGES[1], PORTFOLIO_IMAGES[0], PORTFOLIO_IMAGES[2]],
    deliveryAvailable: true,
    homeConsultation: false,
    categories: ['mens-formal', 'ethnic-wear', 'alterations'],
    featured: false,
    tagline: 'Master craftsmanship, 25 years of excellence',
    lat: 19.099,
    lng: 72.849,
  },
  {
    id: '8',
    name: 'Andheri East Stitch Works',
    rating: 4.2,
    reviewCount: 44,
    address: 'Marol Naka, Andheri East, Mumbai 400059',
    phone: '+91 98100 67890',
    area: 'Andheri East',
    priceRange: '₹',
    minPrice: 250,
    maxPrice: 2000,
    services: ['Alterations', 'Repairs', 'Casual Stitching', 'Kids Wear'],
    distance: '5.2 km',
    portfolioImages: [PORTFOLIO_IMAGES[2], PORTFOLIO_IMAGES[0], PORTFOLIO_IMAGES[1]],
    deliveryAvailable: false,
    homeConsultation: false,
    categories: ['alterations', 'kids-wear'],
    featured: false,
    tagline: 'Fast, reliable, budget-friendly stitching',
    lat: 19.115,
    lng: 72.868,
  },
];

// ─── Generated filler tailors (IDs 9–220) ────────────────────────────────────

type PriceRange = '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹';

interface AreaConfig {
  area: string;
  streets: string[];
  pincode: string;
  latBase: number;
  lngBase: number;
}

const AREA_CONFIGS: AreaConfig[] = [
  {
    area: 'Andheri West',
    streets: ['Lokhandwala Market', 'Four Bungalows', 'DN Nagar', 'Oshiwara', 'Andheri Station Road', 'Millat Nagar', 'Azad Nagar'],
    pincode: '400053',
    latBase: 19.136,
    lngBase: 72.826,
  },
  {
    area: 'Andheri East',
    streets: ['Marol Naka', 'MIDC Road', 'Chakala', 'Saki Naka', 'JB Nagar', 'Kondivita Road', 'Andheri Kurla Road'],
    pincode: '400059',
    latBase: 19.115,
    lngBase: 72.868,
  },
  {
    area: 'Bandra West',
    streets: ['Hill Road', 'Linking Road', 'Turner Road', 'Chapel Road', 'Pali Hill', 'Carter Road', 'Waterfield Road'],
    pincode: '400050',
    latBase: 19.059,
    lngBase: 72.836,
  },
  {
    area: 'Bandra East',
    streets: ['BKC Road', 'Kurla Road', 'Kherwadi', 'Dharavi Road', 'Bandra Station Road', 'Kalanagar', 'Vakola Road'],
    pincode: '400051',
    latBase: 19.062,
    lngBase: 72.855,
  },
  {
    area: 'Juhu',
    streets: ['Juhu Tara Road', 'JVPD Scheme', 'Gulmohar Road', 'Vile Parle West Road', 'Juhu Church Road', 'Irla Road', 'Nehru Road'],
    pincode: '400049',
    latBase: 19.098,
    lngBase: 72.826,
  },
  {
    area: 'Santacruz',
    streets: ['Linking Road', 'SV Road', 'Ambedkar Road', 'Vakola Bridge Road', 'Santacruz Station Road', 'Tilak Road', 'Nehru Nagar'],
    pincode: '400054',
    latBase: 19.082,
    lngBase: 72.843,
  },
  {
    area: 'Versova',
    streets: ['Aram Nagar Part 1', 'Aram Nagar Part 2', 'Versova Village Road', 'Yari Road', 'Gilbert Hill Road', 'Fishermen Colony Road', 'Madh Island Road'],
    pincode: '400061',
    latBase: 19.127,
    lngBase: 72.812,
  },
  {
    area: 'Khar',
    streets: ['16th Road', '14th Road', 'Khar Danda Road', 'SV Road', 'Linking Road', 'Khar Station Road', '18th Road'],
    pincode: '400052',
    latBase: 19.071,
    lngBase: 72.833,
  },
  {
    area: 'Vile Parle',
    streets: ['Nehru Road', 'SV Road', 'Irla Road', 'Hanuman Road', 'Vile Parle Station Road', 'Bhulabhai Desai Road', 'Navpada Road'],
    pincode: '400057',
    latBase: 19.099,
    lngBase: 72.849,
  },
];

const TAILOR_FIRST_NAMES = [
  'Meena', 'Sunita', 'Priya', 'Rekha', 'Kavita', 'Anita', 'Sushma', 'Geeta',
  'Radha', 'Lata', 'Usha', 'Nirmala', 'Shobha', 'Pushpa', 'Sarla', 'Kamla',
  'Ranjit', 'Suresh', 'Ramesh', 'Mahesh', 'Dinesh', 'Rajesh', 'Naresh', 'Ganesh',
  'Vijay', 'Sanjay', 'Ajay', 'Manoj', 'Anil', 'Sunil', 'Kapil', 'Rahul',
  'Deepak', 'Prakash', 'Mukesh', 'Rakesh', 'Ashok', 'Vinod', 'Pramod', 'Santosh',
  'Fatima', 'Zainab', 'Nasreen', 'Shabana', 'Rubina', 'Salma', 'Nazia', 'Reshma',
  'Pooja', 'Neha', 'Ritu', 'Sonia', 'Nisha', 'Divya', 'Anjali', 'Swati',
  'Harish', 'Girish', 'Nilesh', 'Hitesh', 'Jitesh', 'Ritesh', 'Mitesh', 'Paresh',
];

const SHOP_SUFFIXES = [
  'Boutique', 'Tailors', 'Fashion House', 'Stitch Studio', 'Silai Centre',
  'Tailoring Works', 'Dress Studio', 'Fashion Studio', 'Creations', 'Designs',
  'Stitching Hub', 'Garment Studio', 'Tailor Shop', 'Fashion Point', 'Style Studio',
  'Sewing Centre', 'Couture House', 'Embroidery Works', 'Alteration Studio', 'Craft Studio',
];

const SHOP_PREFIXES = [
  'Shop', 'Unit', 'Gala', 'Office', 'Cabin', 'Stall', 'Room',
];

const BUILDING_NAMES = [
  'Shanti Niwas', 'Laxmi Complex', 'Ganesh Apartment', 'Sai Krupa Building', 'Radha Krishna Chawl',
  'Shiv Shakti Complex', 'Jai Hind Market', 'Navrang Building', 'Prabhat Complex', 'Sunrise Tower',
  'Moonlight Apartment', 'Evergreen Building', 'Tulsi Complex', 'Lotus Market', 'Orchid Tower',
  'Mahalaxmi Complex', 'Saraswati Niwas', 'Durga Building', 'Ambika Complex', 'Bhavani Market',
  'Anand Niwas', 'Siddhi Vinayak Complex', 'Balaji Tower', 'Tirupati Building', 'Venkateswara Market',
];

const TAGLINES = [
  'Stitching dreams into reality since 2005',
  'Your style, our craft',
  'Perfect fit, every time',
  'Where fashion meets tradition',
  'Tailored to perfection',
  'Quality stitching at your doorstep',
  'Bringing your wardrobe to life',
  'Expert hands, beautiful results',
  'Crafting elegance, one stitch at a time',
  'Your trusted neighbourhood tailor',
  'Fashion forward, budget friendly',
  'Precision cuts, premium finish',
  'Blending tradition with modern style',
  'Affordable luxury tailoring',
  'Stitching happiness since 2010',
  'Custom fits for every occasion',
  'Where every stitch tells a story',
  'Tailoring excellence for over a decade',
  'Your style vision, our expertise',
  'Handcrafted fashion for every body',
  'Alterations done right, every time',
  'Bridal dreams made real',
  'Kids fashion with a personal touch',
  'Formal wear specialists',
  'Ethnic elegance, modern sensibility',
];

const CATEGORY_SERVICE_MAP: Record<string, string[]> = {
  'western-wear': ['Western Wear', 'Casual Dresses', 'Tops & Skirts', 'Jeans Alterations', 'Western Blouses', 'Jumpsuits', 'Co-ord Sets'],
  'ethnic-wear': ['Salwar Kameez', 'Saree Blouse', 'Lehenga', 'Kurta Stitching', 'Ethnic Suits', 'Anarkali', 'Sharara'],
  'bridal-wear': ['Bridal Lehenga', 'Bridal Gown', 'Wedding Saree Draping', 'Bridal Blouse', 'Embroidery Work', 'Zardosi Work', 'Bridal Dupatta'],
  'alterations': ['Alterations', 'Repairs', 'Hemming', 'Resizing', 'Zipper Replacement', 'Lining Work', 'Patch Work'],
  'kids-wear': ['Kids Wear', 'School Uniforms', 'Kids Party Wear', 'Baby Clothes', 'Kids Ethnic Wear', 'Kids Western Wear', 'Fancy Dress'],
  'mens-formal': ['Formal Suits', 'Sherwanis', "Men's Kurta", 'Formal Shirts', 'Trousers', 'Blazers', 'Bandhgala'],
};

const PRICE_CONFIGS: Array<{ priceRange: PriceRange; minPrice: number; maxPrice: number }> = [
  { priceRange: '₹', minPrice: 200, maxPrice: 2000 },
  { priceRange: '₹₹', minPrice: 600, maxPrice: 7000 },
  { priceRange: '₹₹₹', minPrice: 1500, maxPrice: 15000 },
  { priceRange: '₹₹₹₹', minPrice: 5000, maxPrice: 60000 },
];

const PHONE_PREFIXES = ['98201', '98765', '99200', '98334', '97690', '98456', '99876', '98100', '96543', '90123', '91234', '97812', '98654', '99012', '96789', '90876', '91567', '97345', '98901', '99456'];

// Deterministic pseudo-random based on seed
function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function pickItem<T>(arr: T[], seed: number): T {
  return arr[Math.floor(seededRand(seed) * arr.length)];
}

function generatePhone(seed: number): string {
  const prefix = pickItem(PHONE_PREFIXES, seed);
  const suffix = String(Math.floor(seededRand(seed * 7 + 3) * 90000) + 10000);
  return `+91 ${prefix} ${suffix}`;
}

function generateDistance(seed: number): string {
  const dist = (0.3 + seededRand(seed) * 7.7).toFixed(1);
  return `${dist} km`;
}

function generateRating(seed: number): number {
  return Math.round((3.0 + seededRand(seed) * 2.0) * 10) / 10;
}

function generateReviewCount(seed: number): number {
  return Math.floor(10 + seededRand(seed) * 290);
}

function generateCategories(seed: number): string[] {
  const allCats = Object.keys(CATEGORY_SERVICE_MAP);
  const count = 1 + Math.floor(seededRand(seed * 3) * 3); // 1–3 categories
  const shuffled = [...allCats].sort(() => seededRand(seed + allCats.indexOf(allCats[0])) - 0.5);
  // Use deterministic selection
  const selected: string[] = [];
  for (let i = 0; i < allCats.length && selected.length < count; i++) {
    const idx = Math.floor(seededRand(seed * 11 + i) * allCats.length);
    const cat = allCats[idx];
    if (!selected.includes(cat)) selected.push(cat);
  }
  return selected.length > 0 ? selected : [allCats[Math.floor(seededRand(seed) * allCats.length)]];
}

function generateServices(categories: string[], seed: number): string[] {
  const services: string[] = [];
  categories.forEach((cat, ci) => {
    const catServices = CATEGORY_SERVICE_MAP[cat];
    const count = 1 + Math.floor(seededRand(seed + ci * 17) * 3);
    for (let i = 0; i < count; i++) {
      const svc = catServices[Math.floor(seededRand(seed + ci * 13 + i * 7) * catServices.length)];
      if (!services.includes(svc)) services.push(svc);
    }
  });
  return services;
}

function generatePortfolioImages(seed: number): string[] {
  const order = [0, 1, 2];
  const a = Math.floor(seededRand(seed) * 3);
  const b = Math.floor(seededRand(seed + 1) * 3);
  const c = Math.floor(seededRand(seed + 2) * 3);
  return [PORTFOLIO_IMAGES[a % 3], PORTFOLIO_IMAGES[b % 3], PORTFOLIO_IMAGES[c % 3]];
}

function generateAddress(areaConfig: AreaConfig, seed: number): string {
  const shopPrefix = pickItem(SHOP_PREFIXES, seed * 3);
  const shopNum = Math.floor(seededRand(seed * 5) * 99) + 1;
  const building = pickItem(BUILDING_NAMES, seed * 7);
  const street = pickItem(areaConfig.streets, seed * 11);
  return `${shopPrefix} ${shopNum}, ${building}, ${street}, ${areaConfig.area}, Mumbai ${areaConfig.pincode}`;
}

function generateLatLng(areaConfig: AreaConfig, seed: number): { lat: number; lng: number } {
  const latOffset = (seededRand(seed * 13) - 0.5) * 0.02;
  const lngOffset = (seededRand(seed * 17) - 0.5) * 0.02;
  return {
    lat: Math.round((areaConfig.latBase + latOffset) * 1000) / 1000,
    lng: Math.round((areaConfig.lngBase + lngOffset) * 1000) / 1000,
  };
}

// ─── Category-guaranteed batches ─────────────────────────────────────────────
// We generate tailors in a structured way to guarantee coverage:
// 9 areas × ~24 tailors each = 216 generated tailors (IDs 9–224)

const GENERATED_TAILORS: Tailor[] = [];

// Names pool per area to avoid repetition
const namePool: string[] = [];
for (let i = 0; i < TAILOR_FIRST_NAMES.length; i++) {
  for (let j = 0; j < SHOP_SUFFIXES.length; j++) {
    namePool.push(`${TAILOR_FIRST_NAMES[i]} ${SHOP_SUFFIXES[j]}`);
  }
}

// Category rotation to ensure even distribution
const CAT_ROTATION: string[][] = [
  ['western-wear', 'alterations'],
  ['ethnic-wear', 'kids-wear'],
  ['bridal-wear', 'ethnic-wear'],
  ['alterations', 'mens-formal'],
  ['kids-wear', 'western-wear'],
  ['mens-formal', 'alterations'],
  ['western-wear', 'ethnic-wear'],
  ['ethnic-wear', 'bridal-wear'],
  ['bridal-wear', 'mens-formal'],
  ['alterations', 'kids-wear'],
  ['kids-wear', 'ethnic-wear'],
  ['mens-formal', 'western-wear'],
  ['western-wear', 'bridal-wear'],
  ['ethnic-wear', 'alterations'],
  ['bridal-wear', 'kids-wear'],
  ['alterations', 'western-wear'],
  ['kids-wear', 'mens-formal'],
  ['mens-formal', 'ethnic-wear'],
  ['western-wear', 'kids-wear'],
  ['ethnic-wear', 'mens-formal'],
  ['bridal-wear', 'alterations'],
  ['alterations', 'ethnic-wear'],
  ['kids-wear', 'bridal-wear'],
  ['mens-formal', 'kids-wear'],
];

let idCounter = 9;

AREA_CONFIGS.forEach((areaConfig, areaIdx) => {
  const tailorsPerArea = 24;
  for (let t = 0; t < tailorsPerArea; t++) {
    const seed = areaIdx * 1000 + t * 37 + 42;
    const categories = CAT_ROTATION[(areaIdx * tailorsPerArea + t) % CAT_ROTATION.length];
    const services = generateServices(categories, seed);
    const priceIdx = Math.floor(seededRand(seed * 19) * PRICE_CONFIGS.length);
    const priceConfig = PRICE_CONFIGS[priceIdx];
    const nameIdx = (areaIdx * tailorsPerArea + t) % namePool.length;
    const { lat, lng } = generateLatLng(areaConfig, seed);
    const rating = generateRating(seed * 23);

    GENERATED_TAILORS.push({
      id: String(idCounter++),
      name: namePool[nameIdx],
      rating,
      reviewCount: generateReviewCount(seed * 29),
      address: generateAddress(areaConfig, seed),
      phone: generatePhone(seed * 31),
      area: areaConfig.area,
      priceRange: priceConfig.priceRange,
      minPrice: priceConfig.minPrice,
      maxPrice: priceConfig.maxPrice,
      services,
      distance: generateDistance(seed * 41),
      portfolioImages: generatePortfolioImages(seed * 43),
      deliveryAvailable: seededRand(seed * 47) > 0.5,
      homeConsultation: seededRand(seed * 53) > 0.5,
      categories,
      featured: false,
      tagline: pickItem(TAGLINES, seed * 59),
      lat,
      lng,
    });
  }
});

export const MOCK_TAILORS: Tailor[] = [...ORIGINAL_TAILORS, ...GENERATED_TAILORS];

export const FEATURED_TAILORS = MOCK_TAILORS.filter(t => t.featured);
