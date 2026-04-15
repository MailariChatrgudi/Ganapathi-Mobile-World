// Mock product data — used as fallback when backend server is offline.
// Keep this in sync with server/data/seed.js

export const mockProducts = [
  {
    _id: 'mock-001',
    name: 'Samsung Galaxy A55 5G', brand: 'Samsung', model: 'Galaxy A55 5G',
    description: 'Premium mid-range with stunning AMOLED display, 50MP camera, and Exynos 1480 processor. Best Samsung experience under ₹40K.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/q/q/t/-original-imahbzpzhcptykzf.jpeg?q=90'],
    price: 35999, mrp: 41999, discount: 14,
    specs: { ram: '8GB', storage: '128GB', battery: '5000mAh', camera: '50MP + 12MP + 5MP', processor: 'Exynos 1480', display: '6.6" Super AMOLED, 120Hz', os: 'Android 14' },
    variants: [
      { ram: '8GB', storage: '128GB', color: 'Awesome Navy', price: 35999, stock: 8 },
      { ram: '8GB', storage: '256GB', color: 'Awesome Lilac', price: 39999, stock: 5 },
    ],
    stock: 8, rating: 4.5, numReviews: 234, tags: ['5G', 'AMOLED', 'popular'],
    isHotDeal: true, isFeatured: true
  },
  {
    _id: 'mock-002',
    name: 'Samsung Galaxy M55 5G', brand: 'Samsung', model: 'Galaxy M55 5G',
    description: 'Power-packed 5G phone with 6000mAh massive battery and 50MP OIS camera. Perfect for heavy users.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/a/i/k/m55s-sm-m558b-samsung-original-imah5wyg6jqmh3uv.jpeg?q=90'],
    price: 26999, mrp: 32999, discount: 18,
    specs: { ram: '8GB', storage: '128GB', battery: '6000mAh', camera: '50MP OIS + 8MP + 2MP', processor: 'Snapdragon 7 Gen 1', display: '6.7" Super AMOLED, 120Hz', os: 'Android 14' },
    variants: [
      { ram: '8GB', storage: '128GB', color: 'Light Green', price: 26999, stock: 12 },
      { ram: '12GB', storage: '256GB', color: 'Dusty Blue', price: 31999, stock: 6 },
    ],
    stock: 12, rating: 4.3, numReviews: 189, tags: ['5G', 'battery', 'value'],
    isLimitedStock: false, isFeatured: true
  },
  {
    _id: 'mock-003',
    name: 'OnePlus 12R 5G', brand: 'OnePlus', model: '12R 5G',
    description: 'Flagship killer with Snapdragon 8 Gen 2, 100W SuperVOOC charging and OxygenOS smoothness. Insane performance.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/r/w/j/12r-cph2585-oneplus-original-imah9zk6nddhcbsh.jpeg?q=90'],
    price: 39999, mrp: 44999, discount: 11,
    specs: { ram: '8GB', storage: '128GB', battery: '5500mAh', camera: '50MP + 8MP + 2MP', processor: 'Snapdragon 8 Gen 2', display: '6.78" AMOLED, 120Hz LTPO', os: 'OxygenOS 14' },
    variants: [
      { ram: '8GB', storage: '128GB', color: 'Iron Gray', price: 39999, stock: 6 },
      { ram: '16GB', storage: '256GB', color: 'Cool Blue', price: 44999, stock: 4 },
    ],
    stock: 6, rating: 4.6, numReviews: 312, tags: ['flagship', '5G', '100W charging'],
    isHotDeal: true, isLimitedStock: true, isFeatured: true
  },
  {
    _id: 'mock-004',
    name: 'OnePlus Nord CE4 5G', brand: 'OnePlus', model: 'Nord CE4 5G',
    description: 'Sleek design with Snapdragon 7s Gen 2, 100W charging and smooth 120Hz display. Best in segment.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/g/2/u/nord-ce4-cph2613-oneplus-original-imahjjynmkftmy4h.jpeg?q=90'],
    price: 24999, mrp: 28999, discount: 14,
    specs: { ram: '8GB', storage: '128GB', battery: '5500mAh', camera: '50MP + 8MP', processor: 'Snapdragon 7s Gen 2', display: '6.7" AMOLED, 120Hz', os: 'OxygenOS 14' },
    variants: [
      { ram: '8GB', storage: '128GB', color: 'Dark Chrome', price: 24999, stock: 15 },
      { ram: '8GB', storage: '256GB', color: 'Celadon Marble', price: 27999, stock: 8 },
    ],
    stock: 15, rating: 4.4, numReviews: 201, tags: ['5G', '100W', 'slim'],
    isFeatured: true
  },
  {
    _id: 'mock-005',
    name: 'Vivo V30 5G', brand: 'Vivo', model: 'V30 5G',
    description: 'AMOLED Curved Display with 50MP Aura Light Portrait Camera. Capture every moment in stunning detail.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/o/g/3/v30-5g-v2318-vivo-original-imagyzhhxumayhzw.jpeg?q=90'],
    price: 33999, mrp: 38999, discount: 13,
    specs: { ram: '8GB', storage: '256GB', battery: '5000mAh', camera: '50MP OIS + 50MP Portrait + 8MP', processor: 'Snapdragon 7 Gen 3', display: '6.78" Curved AMOLED, 120Hz', os: 'Funtouch OS 14' },
    variants: [
      { ram: '8GB', storage: '256GB', color: 'Aqua Green', price: 33999, stock: 7 },
      { ram: '8GB', storage: '256GB', color: 'Noble Black', price: 33999, stock: 5 },
    ],
    stock: 7, rating: 4.4, numReviews: 167, tags: ['camera', '5G', 'curved'],
    isHotDeal: false, isFeatured: true
  },
  {
    _id: 'mock-006',
    name: 'Vivo T3x 5G', brand: 'Vivo', model: 'T3x 5G',
    description: 'Massive 6000mAh battery with 44W fast charging. Budget 5G beast with IP64 rating.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/d/x/1/-original-imah4kxes2ktzf9f.jpeg?q=90'],
    price: 12999, mrp: 16999, discount: 24,
    specs: { ram: '6GB', storage: '128GB', battery: '6000mAh', camera: '50MP + 2MP', processor: 'Snapdragon 6 Gen 1', display: '6.72" LCD, 120Hz', os: 'Funtouch OS 14' },
    variants: [
      { ram: '6GB', storage: '128GB', color: 'Royal Bronze', price: 12999, stock: 20 },
      { ram: '8GB', storage: '128GB', color: 'Crimson Flame', price: 14999, stock: 12 },
    ],
    stock: 20, rating: 4.2, numReviews: 445, tags: ['budget', '5G', 'battery'],
    isFeatured: false
  },
  {
    _id: 'mock-007',
    name: 'Oppo Reno 12 5G', brand: 'Oppo', model: 'Reno 12 5G',
    description: "AI-powered portrait photography, slim design and smooth performance. The creator's phone.",
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/z/i/n/-original-imah3cmbp39chuhr.jpeg?q=90'],
    price: 32999, mrp: 36999, discount: 11,
    specs: { ram: '8GB', storage: '256GB', battery: '5000mAh', camera: '50MP OIS + 8MP + 2MP', processor: 'Dimensity 7300 Energy', display: '6.7" AMOLED, 120Hz', os: 'ColorOS 14.1' },
    variants: [
      { ram: '8GB', storage: '256GB', color: 'Sunset Gold', price: 32999, stock: 9 },
      { ram: '12GB', storage: '256GB', color: 'Astro Silver', price: 36999, stock: 4 },
    ],
    stock: 9, rating: 4.3, numReviews: 143, tags: ['AI camera', '5G', 'slim'],
    isHotDeal: true
  },
  {
    _id: 'mock-008',
    name: 'Oppo A3 Pro 5G', brand: 'Oppo', model: 'A3 Pro 5G',
    description: 'First phone with IP69 rating in segment. Rugged yet stylish with 45W SuperVOOC charging.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/h/9/x/-original-imah4d9fsyvwp7yz.jpeg?q=90'],
    price: 19999, mrp: 24999, discount: 20,
    specs: { ram: '8GB', storage: '128GB', battery: '5100mAh', camera: '50MP + 2MP', processor: 'Dimensity 6300', display: '6.67" AMOLED, 120Hz', os: 'ColorOS 14.1' },
    variants: [
      { ram: '8GB', storage: '128GB', color: 'Starry Black', price: 19999, stock: 11 },
      { ram: '8GB', storage: '256GB', color: 'Starlight White', price: 22999, stock: 7 },
    ],
    stock: 11, rating: 4.1, numReviews: 98, tags: ['IP69', '5G', 'rugged'],
    isLimitedStock: true
  },
  {
    _id: 'mock-009',
    name: 'Realme GT 6T 5G', brand: 'Realme', model: 'GT 6T 5G',
    description: 'Snapdragon 7+ Gen 3 with 120W SuperDart charging and 5500mAh silicon-carbon battery. Speed king.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/d/q/y/gt-6t-5g-rmx3853-realme-original-imahfddqupz7zzmh.jpeg?q=90'],
    price: 29999, mrp: 33999, discount: 12,
    specs: { ram: '8GB', storage: '128GB', battery: '5500mAh', camera: '50MP OIS + 8MP + 2MP', processor: 'Snapdragon 7+ Gen 3', display: '6.78" AMOLED, 144Hz', os: 'Realme UI 5.0' },
    variants: [
      { ram: '8GB', storage: '128GB', color: 'Fluid Silver', price: 29999, stock: 13 },
      { ram: '12GB', storage: '256GB', color: 'Razor Green', price: 34999, stock: 7 },
    ],
    stock: 13, rating: 4.5, numReviews: 278, tags: ['144Hz', '120W', '5G'],
    isHotDeal: true, isFeatured: true
  },
  {
    _id: 'mock-010',
    name: 'Realme Narzo 70 Pro 5G', brand: 'Realme', model: 'Narzo 70 Pro 5G',
    description: "India's first 5G with Sony IMX882 camera at this price point. 67W fast charging.",
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/8/6/m/narzo-70-pro-5g-narzo-70-pro-5g-realme-original-imagz5m63fhjgg2z.jpeg?q=90'],
    price: 19999, mrp: 23999, discount: 17,
    specs: { ram: '8GB', storage: '128GB', battery: '5000mAh', camera: '50MP Sony IMX882 + 8MP', processor: 'Dimensity 7050', display: '6.67" AMOLED, 120Hz', os: 'Realme UI 5.0' },
    variants: [
      { ram: '8GB', storage: '128GB', color: 'Twinkle Purple', price: 19999, stock: 18 },
      { ram: '8GB', storage: '256GB', color: 'Glass Green', price: 21999, stock: 9 },
    ],
    stock: 18, rating: 4.2, numReviews: 213, tags: ['Sony camera', '5G', 'value']
  },
  {
    _id: 'mock-011',
    name: 'Redmi Note 13 Pro+ 5G', brand: 'Xiaomi', model: 'Note 13 Pro+ 5G',
    description: '200MP flagship camera with Snapdragon 7s Gen 2, IP68 waterproofing and 120W HyperCharge. Unmatched value.',
    images: ['https://rukminim2.flixcart.com/image/1408/1408/xif0q/mobile/u/5/f/-original-imagwu9fyya8h6mg.jpeg?q=90'],
    price: 29999, mrp: 33999, discount: 12,
    specs: { ram: '8GB', storage: '256GB', battery: '5000mAh', camera: '200MP OIS + 8MP + 2MP', processor: 'Snapdragon 7s Gen 2', display: '6.67" Curved AMOLED, 120Hz', os: 'HyperOS' },
    variants: [
      { ram: '8GB', storage: '256GB', color: 'Midnight Black', price: 29999, stock: 10 },
      { ram: '12GB', storage: '256GB', color: 'Aurora Purple', price: 33999, stock: 6 },
      { ram: '12GB', storage: '512GB', color: 'Mystic Silver', price: 37999, stock: 3 },
    ],
    stock: 10, rating: 4.6, numReviews: 521, tags: ['200MP', 'IP68', '120W', '5G'],
    isHotDeal: true, isFeatured: true, isLimitedStock: true
  },
  {
    _id: 'mock-012',
    name: 'Poco X6 Pro 5G', brand: 'Xiaomi', model: 'Poco X6 Pro 5G',
    description: 'Powered by Dimensity 8300-Ultra — gaming champion with 67W turbo charging and 120Hz AMOLED.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0t8XyNGsLLrNFTX-s3dMBjvXb58U_Lk0PA&s'],
    price: 26999, mrp: 31999, discount: 16,
    specs: { ram: '8GB', storage: '256GB', battery: '5000mAh', camera: '64MP OIS + 8MP + 2MP', processor: 'Dimensity 8300-Ultra', display: '6.67" AMOLED, 120Hz', os: 'HyperOS' },
    variants: [
      { ram: '8GB', storage: '256GB', color: 'Black', price: 26999, stock: 14 },
      { ram: '12GB', storage: '256GB', color: 'Yellow', price: 29999, stock: 8 },
    ],
    stock: 14, rating: 4.4, numReviews: 389, tags: ['gaming', '5G', 'Dimensity'],
    isHotDeal: true, isFeatured: true
  }
]

export const mockReviews = [
  { _id: 'rev-001', name: 'Rajesh Kumar', rating: 5, comment: 'Best price in Koppal! Got my Samsung Galaxy at ₹2000 less than other shops. Very professional staff and quick service.', product: null },
  { _id: 'rev-002', name: 'Priya Sharma', rating: 5, comment: 'Excellent service! My phone screen was repaired in just 1 hour. Ganapathi Mobile World is the best mobile shop in Koppal.', product: null },
  { _id: 'rev-003', name: 'Mohammed Imran', rating: 4, comment: 'Good prices and service. Wide variety of phones available. Staff is knowledgeable and helpful. Highly recommended!', product: null },
  { _id: 'rev-004', name: 'Kavitha Reddy', rating: 5, comment: 'Trusted shop since years. They gave me genuine accessories at very good price. Will definitely come back!', product: null },
  { _id: 'rev-005', name: 'Suresh Patil', rating: 5, comment: 'Professional staff! They helped me choose the right phone within my budget. Very happy with OnePlus they suggested.', product: null },
  { _id: 'rev-006', name: 'Anita Desai', rating: 4, comment: 'Great experience. Bought Realme GT 6T. Got good discount compared to online. After-sale service is also excellent.', product: null },
]
