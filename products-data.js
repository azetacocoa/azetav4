/* Azeta — shared product catalogue
   Used by index.html (product grid) and product.html (detail template) */

/* Builds a Netlify Image CDN URL: resizes + auto-converts format (WebP/AVIF) on the fly, cached at the edge.
   Only takes effect once deployed on Netlify — falls back harmlessly elsewhere. */
function azetaImgUrl(path, width){
  return '/.netlify/images?url=/' + path + '&w=' + width;
}

const AZETA_CATEGORIES = [
  { id: 'couverture', label: 'Couverture Bars', anchor: 'cat-couverture',
    intro: "Experience true couverture chocolate crafted from traceable, single origin Anamalai cacao for an exceptionally smooth, luxurious taste." },
  { id: 'cacao', label: 'Cocoa Products', anchor: 'cat-cacao',
    intro: "Discover premium cocoa products made from traceable, single origin Anamalai beans processed in house for unmatched purity and quality." },
  { id: 'coatings', label: 'Coated Snacks', anchor: 'cat-coatings',
    intro: "Premium nuts wrapped in our signature single origin chocolate, delivering the perfect balance of crunch and indulgence." },
  { id: 'fillings', label: 'Fillings', anchor: 'cat-fillings',
    intro: "Premium chocolate fillings with a smooth, creamy texture and rich flavour - perfect for baking, desserts, and confectionery." }
];

const AZETA_PRODUCTS = [
  /* ── COUVERTURE BARS ── */
  {
    id: 'bar-45', category: 'couverture',
    img: 'images/bar-45.jpeg', alt: 'Azeta 45% Dark Couverture label',
    name: '45% Dark Couverture', badge: '45% Dark', qty: '500g min.',
    tag: 'Clean melt, gentle cocoa',
    desc: 'Low bitterness, elevated sweetness, excellent melt which is ideal for glazing, enrobing and applications that call for clean sweetness without intensity.',
    ingredients: 'Cocoa nibs · Cocoa butter · Cane sugar',
    fluidity: 3
  },
  {
    id: 'bar-55', category: 'couverture',
    img: 'images/bar-55.jpeg', alt: 'Azeta 55% Dark Couverture label',
    name: '55% Dark Couverture', badge: '55% Dark', qty: '500g min.',
    tag: 'Professional precision',
    desc: 'Well balanced dark couverture with pronounced cocoa notes and controlled bitterness which gives a smooth, versatile everyday choice for ganache and moulding.',
    ingredients: 'Cocoa nibs · Cocoa butter · Cane sugar',
    fluidity: 3
  },
  {
    id: 'bar-70', category: 'couverture',
    img: 'images/bar-70.jpeg', alt: 'Azeta 70% Dark Couverture label',
    name: '70% Dark Couverture', badge: '70% Dark', qty: '500g min.',
    tag: 'Refined bitterness',
    desc: 'Bold cocoa character, restrained sweetness, clean bitterness and strong aroma which is ideal for ganache, pastry fillings, and flavour forward desserts.',
    ingredients: 'Cocoa nibs · Cocoa butter · Cane sugar',
    fluidity: 4
  },
  {
    id: 'bar-85', category: 'couverture',
    img: 'images/bar-85.jpeg', alt: 'Azeta 85% Dark Couverture label',
    name: '85% Dark Couverture', badge: '85% Dark', qty: '500g min.',
    tag: 'Pure expression',
    desc: 'High intensity dark couverture with deep cocoa notes, minimal sweetness, and firm bitterness which gives a clean finish for maximum cocoa impact.',
    ingredients: 'Cocoa nibs · Cocoa butter · Cane sugar',
    fluidity: 4
  },
  {
    id: 'bar-35milk', category: 'couverture',
    img: 'images/bar-35milk.jpeg', alt: 'Azeta 35% Milk Couverture label',
    name: '35%  Milk Couverture', badge: '35% Milk', qty: '500g min.',
    tag: 'Smooth, gentle melt',
    desc: 'Pronounced dairy notes and gentle cocoa flavour. High fluidity and a creamy melt make it ideal for moulding and soft centre fillings.',
    ingredients: 'Cocoa nibs · Cocoa butter · Cane sugar · Milk powder',
    fluidity: 3
  },
  {
    id: 'bar-45milk', category: 'couverture',
    img: 'images/bar-45milk.jpeg', alt: 'Azeta 45% Milk Couverture label',
    name: '45% Milk Couverture', badge: '45% Milk', qty: '500g min.',
    tag: 'Refined balance',
    desc: 'Reduced sweetness and subtle caramel notes with a smooth melt which is ideal for premium pastries, ganache, and refined milk chocolate work.',
    ingredients: 'Cocoa nibs · Cocoa butter · Cane sugar · Milk powder',
    fluidity: 3
  },

  /* ── CACAO PRODUCTS ── */
  {
    id: 'cocoa-butter', category: 'cacao',
    img: 'images/cocoa-butter.png', alt: 'Azeta Natural Non-Deodorised Cocoa Butter',
    name: 'Cocoa Butter', badge: 'Pure Cacao', qty: '1000g min.',
    tag: 'Natural, Non deodorised',
    desc: 'Pure cocoa fat with natural aroma which can be used in food and cosmetics.',
    ingredients: '100% Cocoa Butter', fluidity: null
  },
  {
    id: 'cocoa-powder', category: 'cacao',
    img: 'images/cocoa-powder.png', alt: 'Azeta Natural Cocoa Powder',
    name: 'Cocoa Powder', badge: 'Pure Cacao', qty: '1000g min.',
    tag: 'Unprocessed, Unsweetened',
    desc: 'Packed with flavonoids and rich in minerals. For baking and beverages.',
    ingredients: '100% Cocoa Powder', fluidity: null
  },
  {
    id: 'cocoa-nibs', category: 'cacao',
    img: 'images/cocoa-nibs.png', alt: 'Azeta Natural Cocoa Nibs',
    name: 'Roasted Cacao Nibs', badge: 'Pure Cacao', qty: '1000g min.',
    tag: 'Crisp, Clean bitterness',
    desc: 'Coarsely crushed cacao. Great for inclusions, toppings, and cereals.',
    ingredients: '100% Roasted Cacao Nibs', fluidity: null
  },
  {
    id: 'cocoa-mass', category: 'cacao',
    img: 'images/cocoa-mass.png', alt: 'Azeta Natural Cocoa Mass',
    name: 'Cocoa Mass', badge: 'Pure Cacao', qty: '1000g min.',
    tag: '100% Pure Cocoa',
    desc: 'Finely ground cacao which has an intense flavour, deep colour, the base of all great chocolate.',
    ingredients: '100% Cocoa Mass', fluidity: null
  },

  /* ── COATED SNACKS ── */
  {
    id: 'coated-almonds', category: 'coatings',
    img: 'images/coated-almonds.png', alt: 'Azeta Chocolate Coated Almonds',
    name: 'Chocolate Coated Almonds', badge: null, qty: '500g min.',
    tag: 'Crunchy roasted, Smooth dark',
    desc: 'Crisp roasted almonds enrobed in smooth, rich Azeta dark chocolate for a perfectly balanced bite.',
    ingredients: 'Roasted almonds · Azeta dark chocolate', fluidity: null
  },
  {
    id: 'coated-pista', category: 'coatings',
    img: 'images/coated-pista.png', alt: 'Azeta Chocolate Coated Pistachios',
    name: 'Chocolate Coated Pistachios', badge: null, qty: '500g min.',
    tag: 'Premium pistachio, refined finish',
    desc: 'Premium pistachios coated in smooth, rich chocolate for a refined crunch.',
    ingredients: 'Pistachios · Azeta chocolate', fluidity: null
  },
  {
    id: 'coated-hazelnut', category: 'coatings',
    img: 'images/coated-hazelnut.png', alt: 'Azeta Chocolate Coated Hazelnuts',
    name: 'Chocolate Coated Hazelnuts', badge: null, qty: '500g min.',
    tag: 'Roasted, velvety enrobed',
    desc: 'Finest roasted hazelnuts enrobed in velvety chocolate for a rich, nutty indulgence.',
    ingredients: 'Roasted hazelnuts · Azeta chocolate', fluidity: null
  },
  {
    id: 'coated-cranberries', category: 'coatings',
    img: 'images/coated-cranberries.png', alt: 'Azeta Chocolate Coated Cranberries',
    name: 'Chocolate Coated Cranberries', badge: null, qty: '500g min.',
    tag: 'Tangy, balanced bite',
    desc: 'Tangy dried cranberries coated in smooth, rich chocolate for a perfectly balanced bite.',
    ingredients: 'Dried cranberries · Azeta chocolate', fluidity: null
  },
  {
    id: 'coated-butterscotch', category: 'coatings',
    img: 'images/coated-butterscotch.png', alt: 'Azeta Chocolate Coated Butterscotch',
    name: 'Chocolate Coated Butterscotch', badge: null, qty: '500g min.',
    tag: 'Caramel sweet, smooth coat',
    desc: 'Crunchy butterscotch pieces coated in smooth, rich chocolate.',
    ingredients: 'Butterscotch pieces · Azeta chocolate', fluidity: null
  },

  /* ── FILLINGS ── */
  {
    id: 'filling-dark', category: 'fillings',
    img: 'images/filling-dark.png', alt: 'Azeta Dark Chocolate Filling',
    name: 'Dark Chocolate Filling', badge: null, qty: '500g min.',
    tag: 'Rich, smooth, deep cocoa',
    desc: 'A smooth, rich dark chocolate filling formulated with fine cocoa solids, delivering consistent texture and deep cocoa flavour across applications.',
    ingredients: 'Cocoa solids · Cocoa butter · Cane sugar', fluidity: null
  },
  {
    id: 'filling-milk', category: 'fillings',
    img: 'images/filling-milk.png', alt: 'Azeta Milk Chocolate Filling',
    name: 'Milk Chocolate Filling', badge: null, qty: '500g min.',
    tag: 'Creamy, mild, versatile',
    desc: 'A milk chocolate filling with a rich, creamy mouthfeel and mild cocoa profile, suitable for confectionery, bakery, and filled chocolate applications.',
    ingredients: 'Cocoa solids · Cocoa butter · Cane sugar · Milk powder', fluidity: null
  },
  {
    id: 'filling-hazelnut', category: 'fillings',
    img: 'images/filling-hazelnut.png', alt: 'Azeta Choco Hazelnut Filling',
    name: 'Choco Hazelnut Filling', badge: null, qty: '500g min.',
    tag: 'Balanced sweetness, nut notes',
    desc: 'A creamy chocolate hazelnut filling with balanced sweetness and pronounced nut notes, suitable for confectionery, bakery, and filled chocolate centres.',
    ingredients: 'Cocoa solids · Hazelnut paste · Cane sugar', fluidity: null
  }
];

function azetaGetProduct(id){
  return AZETA_PRODUCTS.find(p => p.id === id) || null;
}
function azetaGetCategory(id){
  return AZETA_CATEGORIES.find(c => c.id === id) || null;
}
