export interface Flavor {
  id: string;
  name: string;
  image: string;
  
  
  
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  flavors: Flavor[];
  description: string;
  keyBenefits?: string[];
  howToUse: string;
  ingredients?: string;
  storage?: string;
  images?: {
    front: string;
    back: string;
  };

  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'Mass Gainer',
    name: 'Mass Gainer',
    category: 'Protein',
    description: 'RYZEN Nutrition Mass Gainer – Premium Protein & Clean Carb Blend. Available in Chocolate Milkshake and Banana Milkshake flavors. Each serving (100g / 2 scoops) delivers 30g of protein. Net weight: 6kg, 60 servings.',
    images:{
     front: '/images/ryzen mass gainer.png',
      back: '/images/ryzen mass gainer2.png',
    }, 
    flavors: [
    ],
    keyBenefits: ['Supports solid weight gain and lean muscle mass.', 'Provides a convenient source of quality nutrients for muscle building.', 'High protein and clean carb blend ideal for hard gainers and athletes.', 'Boosts strength and endurance naturally.'],
    howToUse: 'Mix 2 scoops (100g) with 300-400ml of cold water or milk. Blend well using a blender or shaker cup until the powder is fully dissolved. Enjoy before or after workouts for optimal results.',
    ingredients: 'Protein Blend (Whey Protein Concentrate, Whey Protein Isolate, Milk Protein), Carbohydrate Blend (Maltodextrin, Oat Flour, Whey Maize Starch), BCAA (L-Leucine, L-Isoleucine, L-Valine), L-Glutamine, Creatine Monohydrate, Taurine, Vitamin & Mineral Complex, Natural and Artificial Flavors, Thickening Agents (Xanthan Gum, Guar Gum), Sweeteners (Sucralose, Acesulfame K), Anti-Caking Agent (Silicon Dioxide).',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep container tightly sealed.',
    featured: true,
  },
  {
    id: '2',
    slug: 'Whey Protein',
    name: 'Whey Protein',
    category: 'Protein',
    description: 'RYZEN Nutrition Whey Protein Blend. Available in Chocolate Milkshake and Vanilla Ice Cream flavors. Each serving (30g / 1 scoop) delivers 24g of protein. Net weight: 2kg, 66 servings.',
    flavors: [
      {
        id: 'f2-1',
        name: 'CHOCOLATE CHEESECAKE',
        image: '/images/Whey.png',
      },
      {
        id: 'f2-2',
        name: 'VANILLA ICE CREAM',
        image: '/images/whey2.png',
      },
      
    ],
    keyBenefits: ['Supports muscle growth and repair with a high-quality whey protein blend.', 'Delivers sustained muscle nourishment long after your workout.', 'Rich in essential amino acids for optimal muscle protein synthesis.', 'Promotes fast recovery after intense training sessions.'],
    howToUse: 'Add one scoop (30g) to 150-250ml of water and mix well. It is recommended to use two scoops per day (60g). Best consumed immediately after your workout or as a protein-rich snack between meals.',
    ingredients: 'Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Whey Protein Hydrolysate), Natural and Artificial Flavors, Salt, Gum Blend (Cellulose Gum, Xanthan Gum, Carrageenan), Sunflower Lecithin, Sucralose, Acesulfame Potassium, Ground Cinnamon, Lactase, Prohydrolase (Proteases from Bacillus and Pineapple), Dipotassium Phosphate.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    featured: true,
  },
  {
    id: '3',
    slug: 'Iso Protein',
    name: 'Iso Protein',
    category: 'Protein',
    description: 'RYZEN Nutrition Iso Protein – 100% Whey Protein Isolate formula. Available in Chocolate Milkshake and Cookies N Cream flavors. Each serving (30g / 1 scoop) delivers 27g of protein. Net weight: 2kg, 66 servings.',
    flavors: [
      {
        id: 'f3-1',
        name: 'CHOCOLATE MILKSHAKE',
        image: '/images/iso.png',
      },
      {
        id: 'f3-2',
        name: 'COOKIES N CREAM',
        image: '/images/iso 2.png',
      },
    ],
    keyBenefits: ['Supports lean muscle growth and repair with the highest quality whey protein isolate.', 'Each serving provides 27g of pure and complete protein.', ' Low in fat and carbohydrates — ideal for lean bulking or cutting phases.', 'Promotes fast recovery after intense training sessions.'],
    howToUse: 'Add one scoop (30g) into 150-250ml of water and mix well. It is recommended to use two scoops per day (60g). Best consumed immediately after your workout or as a high-protein snack between meals.',
    ingredients: 'Cold Processed Micro & Ultra Filtered Whey Protein Isolate, Long Chain Whey Protein Isolate, and Hydrolyzed Whey Protein Isolate, Natural & Artificial Flavors.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
  },
  {
    id: '4',
    slug: 'Hydro Protein',
    name: 'Hydro Protein',
    category: 'Protein',
    description: 'RYZEN Nutrition Hydro Protein – 100% Hydrolyzed Whey Protein Isolate. Available in Chocolate Milkshake and Banana Smoothie flavors. Each serving (20g / 1 scoop) delivers 20g of protein. Net weight: 2kg, 100 servings.',
    flavors: [
      {
        id: 'f4-1',
        name: 'BANANA SMOOTHIE',
        image: '/images/hydro 1.png',
      },
      {
        id: 'f4-2',
        name: 'CHOCOLATE MILKSHAKE',
        image: '/images/hydro 2.png',
      },
      
    ],
    keyBenefits: ['Contains up to 86% rapid-acting, high-quality hydrolyzed protein with the fastest absorption rate.', 'Provides up to 20g of lean protein per serving.', 'Contributes to the growth and maintenance of muscle mass.', 'Naturally rich in amino acids that aid in fortifying muscle mass and preventing catabolism.'],
    ingredients: 'Hydrolyzed Whey Protein Isolate, Essential Amino Acids, Citric Acid, Sodium Citrate, Potassium Chloride, Magnesium Citrate, Vitamin Blend (Vitamin C, B6, B12), Natural & Artificial Flavors, Sweeteners (Sucralose, Acesulfame K), Emulsifier (Soy Lecithin), Coloring Agents.',
    howToUse: 'Add one scoop (20g) into 250-350ml of water and mix well. Let it sit for a few minutes for a clear, refreshing protein drink. Best enjoyed post-workout or anytime during the day to meet protein requirements.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    featured: true,
  },
  {
    id: '5',
    slug: 'Whey Protein Complex',
    name: 'Whey Protein Complex',
    category: 'Protein',
    description: 'RYZEN Nutrition Whey Protein Complex – Multi-Source Protein Blend. Available in Chocolate Milkshake and Banana Smoothie flavors. Each serving (30g / 1 scoop) delivers 24g of protein. Net weight: 2kg, 66 servings.',
    flavors: [
      {
        id: 'f5-1',
        name: 'BANANA SMOOTHIE',
        image: '/images/Whey complex.png',
      },
      {
        id: 'f5-2',
        name: 'CHOCOLATE MILKSHAKE', 
        image: '/images/Whey complex 2.png',
      },
    ],
    keyBenefits: ['Highest quality multi-source whey protein with more than 24g of protein per serving.', ' Naturally high in BCAAs and glutamine for enhanced recovery.', 'Combines fast, medium, and slow-digesting proteins for sustained muscle nourishment.', 'Contains a digestive enzyme blend for better absorption and digestion.'],
    ingredients: 'Protein Blend (Whey Protein Concentrate, Whey Protein Isolate, Micellar Casein (from milk), Egg Albumin), Emulsifier (Soy Lecithin), Skimmed Milk Powder, Inulin (from chicory), Flavour Enhancer (Glycine), Natural & Nature-Identical Flavourings, Sweeteners (Sucralose, Acesulfame-K), Digestive Enzyme Blend (Lactase enzyme, Bromelain (from Ananas comosus), Papain (from Carica papaya)).',
    howToUse: 'Mix one serving (30g) in 250-350ml of water and consume 30 minutes after exercise. Can also be taken as a protein-rich snack between meals throughout the day.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    featured: true,
  },
  {
    id: '6',
    slug: 'Creatine Complex',
    name: 'Creatine Complex',
    category: 'Amino Acids',
    description: 'RYZEN Nutrition Creatine Complex – Advanced Multi-Ingredient Creatine Formula. Available in Icy Blue Raspberry and Strawberry flavors. Each serving (10g / 1 scoop) delivers 10g of active ingredients. Net weight: 300g, 30 servings.',
    flavors: [
      {
        id: 'f6-1',
        name: 'ICY BLUE RASPBERRY',
        image: '/images/creatine complex blue.png',
      },
      {
        id: 'f6-2',
        name: 'STRAWBERRY',
        image: '/images/creatine complex st.png',
      },
    ],
    keyBenefits: ['Improves strength and energy production during high-intensity resistance training.', 'Enhances muscle exercise capacity and endurance.', 'Promotes recovery after intense training.', 'Supports cognitive performance including memory and reduction of mental fatigue.', 'B Vitamin complex contributes to normal energy-yielding metabolism.',],
    howToUse: 'Mix one scoop (10g) with 250ml of cold water 30 minutes before training. Do not exceed the recommended daily dose. Keep out of reach of children.',
    ingredients: 'Creatine Monohydrate, Beta-Alanine, Loading Agent (Maltodextrin), Acidifier (Malic Acid), Taurine, Flavor, Sweetener (Sucralose), B Vitamin Complex (Nicotinamide, Calcium D-Pantothenate, Riboflavin, Pyridoxine Hydrochloride, Thiamine Hydrochloride, Pteroylmonoglutamic Acid, D-Biotin, Cyanocobalamin), Color (Ponceau 4R).',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '7',
    slug: 'Creatine Monohydrate',
    name: 'Creatine Monohydrate',
    category: 'Amino Acids',
    description: 'RYZEN Nutrition Creatine Monohydrate – 100% Pure Unflavoured Formula. Each serving (5g / 1 scoop) delivers 5g of pure creatine monohydrate. Net weight: 500g, 100 servings.',
    flavors: [
      {
        id: 'f7-1',
        name: 'UNFLAVOURED',
        image: '/images/creatine 1.png',
      },
      {
        id: 'f7-2',
        name: 'STRAWBERRY',
        image: '/images/creatine 2.png',
      },
      {
        id: 'f7-3',
        name: 'ICY BLUE RASPBERRY',
        image: '/images/creatine 3.png',
      },
      
    ],
    keyBenefits: ['100% pure pharmaceutical-grade creatine monohydrate with no additives or fillers.', 'Supports muscle replenishment and peak athletic performance.', 'Enhances lean muscle growth, strength, and training endurance.', 'Mixes easily with any beverage for maximum convenience.' ],
    howToUse: 'Add one scoop (5g) into 150-250ml of water or your preferred beverage and mix well. It is recommended to use one scoop per day (5g). Can be taken with or without food.',
    ingredients: '100% Pure Pharmaceutical-Grade Creatine Monohydrate (5g per serving).',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '8',
    slug: 'Pre Workout',
    name: 'Pre Workout',
    category: 'Energy & Burn',
    description: 'RYZEN Nutrition Pre Workout – High-Stim Performance Formula. Available in Icy Blue Raspberry and Cola flavors. Each serving (5.6g / 1 scoop) delivers 200mg of natural caffeine with performance-boosting nootropics and nitric oxide support.',
    flavors: [
      {
        id: 'f8-1',
        name: 'COLA',
        image: '/images/pre workout1.png',
      },
      {
        id: 'f8-2',
        name: 'ICY BLUE RASPBERRY',
        image: '/images/pre workout 2.png',
      },
    ],
    keyBenefits: ['Boosts energy and mental focus with 200mg of natural caffeine per serving.',  'Citrulline and arginine nitrate support nitric oxide production and muscle pumps.', 'Designed for athletes who demand extreme energy, focus, and performance.',],
    howToUse: 'Add one scoop (5.6g) into 150-250ml of water and mix well. Consume 20-30 minutes before training. During your workout and throughout the day, drink plenty of water. Some individuals may experience a tingling sensation attributed to beta-alanine. Not recommended for caffeine-sensitive individuals.',
    ingredients: "Beta-Alanine, L-Citrulline, Arginine Nitrate, Natural Caffeine (200mg), Lion's Mane Extract, Taurine, Vitamin B Complex, Sweetener Sucralose, Natural Flavors, Anti-Caking Agent (Silicon Dioxide).",
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '9',
    slug: 'Cream of Rice',
    name: 'Cream of Rice',
    category: 'Carbohydrates',
    description: 'RYZEN Nutrition Cream of Rice – Premium Carbohydrate Source. Available in Chocolate Delight and Creamy Banana Pudding flavors. Each serving (50g / 1 scoop) delivers 50g of clean carbohydrates. Net weight: 1kg, 20 servings.',
    flavors: [
      {
        id: 'f9-1',
        name: 'CREMY BANANA PUDDING',
        image: '/images/cream of rise.png',
      },
      {
        id: 'f9-2',
        name: 'CHOCOLATE DELIGHT',
        image: '/images/cream of rise2.png',
      },
      
    ],
        keyBenefits: ['Excellent source of fast-digesting, clean carbohydrates for sustained energy. ', ' Easy on the digestive system — gluten free, soy free, and low in fat.', 'Ideal pre or post-workout carbohydrate source to fuel performance and replenish glycogen.','Contains digestive enzymes to aid the digestive process.'],
    howToUse: 'Add one scoop (50g) into a pan or pot with 200ml of water or milk. Cook over low heat, stirring well until smooth and creamy. Can be enjoyed at any time of day — before or after training, or as a healthy meal. Can be used alone or added to your own recipes.',
    ingredients: 'White Rice Flour, Flavouring, Salt, Sucralose.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '10',
    slug: 'Glutamine',
    name: 'Glutamine',
    category: 'Amino Acids',
    description: 'RYZEN Nutrition Glutamine – Pure Pharmaceutical-Grade L-Glutamine. Unflavoured formula. Each serving (5g / 1 scoop) delivers 5g of pure L-Glutamine. Net weight: 300g, 60 servings.',
    flavors: [
      {
        id: 'f10-1',
        name: 'CREAMY BANANA PUDDING',
        image: '/images/glutabamin.png',
      },
    ],
   keyBenefits: ['Protects muscle tissue against catabolism during and after training.', ' Accelerates post-workout recovery and reduces muscle soreness.', 'Contributes to rapid protein synthesis and better muscle mass gain.', 'Strengthens the immune system and supports gut health.'],
    howToUse: 'Add one scoop (5g) into 150-250ml of water and mix well. It is recommended to use one scoop per day (5g). Best consumed after your workout or at any time of day to maintain amino acid levels.',
    ingredients: '100% Pure Pharmaceutical-Grade L-Glutamine (5g per serving).',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '11',
    slug: 'EAA',
    name: 'EAA',
    category: 'Amino Acids',
    description: 'RYZEN Nutrition EAA – Essential Amino Acids. Unflavoured formula. Each serving (5g / 1 scoop) delivers 5g of essential amino acids. Net weight: 300g, 60 servings.',
    flavors: [
      {
        id: 'f11-1',
        name: 'BUBBLEGUM',
        image: '/images/eAA1.png',
      },
      
    ],
   keyBenefits: ['Provides all 9 Essential Amino Acids in a premium quality, highly bioavailable form.', ' Supports muscle protein synthesis, tissue growth and repair.', 'Aids neurotransmission, glucose uptake, immune function, enzyme production, and oxygen delivery.', 'Can be used intra-workout or between meals to maintain amino acid levels throughout the day.'],
    howToUse: 'Mix one serving (13g) with 250ml of cold water. For best results, consume before, during, or after your workout. Can also be taken between meals to support amino acid levels throughout the day.',
    ingredients: 'EAA Complex (L-Leucine, L-Lysine, L-Threonine, L-Tryptophan, L-Isoleucine, L-Valine, L-Methionine, L-Phenylalanine, L-Histidine), Maltodextrin, Acid (Citric Acid), Colour (Caramel), Flavouring, Sweetener (Sucralose), Pyridoxine Hydrochloride.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '12',
    slug: 'L-Carnitine Liquid',
    name: 'L-Carnitine Liquid',
    category: 'Energy & Burn',
    description: 'RYZEN Nutrition L-Carnitine Liquid – Advanced Fat Burning Formula. Available in Icy Blue Raspberry flavor. Each serving (25ml) delivers L-Carnitine L-Tartrate combined with Vitamin C, Pantothenic Acid, Vitamin B6, and Chromium. Net volume: 500ml, 20 servings.',
    flavors: [
      {
        id: 'f12-1',
        name: 'ICY BLUE RASPBERRY',
        image: '/images/l- carnitine.png',
      },
    ],
   keyBenefits: ['Supports fat burning by transporting fatty acids into cells for energy production.', ' L-Carnitine L-Tartrate is the optimal form of L-Carnitine with superior absorption and antioxidant benefits.', 'Vitamins and Chromium support normal energy-yielding metabolism.', 'Improves performance and endurance during exercise.'],
    howToUse: 'Take one serving (25ml) 30 minutes before starting your physical activity. Shake well before use. Can be consumed directly or mixed with water. Do not exceed the recommended daily dose.',
    ingredients: 'Water, L-Carnitine L-Tartrate, Acid (Citric Acid), L-Ascorbic Acid (Vitamin C), Preservatives (Potassium Sorbate, Sodium Benzoate), Sweeteners (Acesulfame-K, Sucralose), Flavourings, Calcium D-Pantothenate (Vitamin B5), Colouring Agent (Caramel), Pyridoxine Hydrochloride (Vitamin B6), Colouring Agent (Ponceau 4R), Chromium Picolinate.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '13',
    slug: 'Power Pack',
    name: 'Power Pack',
    category: 'Vitamins',
    description: 'RYZEN Nutrition Power Pack – Comprehensive Daily Health Complex. Each pack contains a complete blend of vitamins, minerals, omega-3 fatty acids, lecithin, and Coenzyme Q10. Net quantity: 30 packs (30-day supply).',
    flavors: [
      {
        id: 'f13-1',
        name: '',
        image: '/images/power.png.png',
      },
    ],
   keyBenefits: ['Comprehensive daily supplement covering vitamins, minerals, omega-3 fatty acids, lecithin, and CoQ10 in one convenient pack.', 'Evidence-backed, clinically dosed components for health, wellbeing, and vitality.', 'Supports energy metabolism, immune function, and cardiovascular health.', 'Ideal for active individuals and athletes seeking complete daily nutritional support.'],
    howToUse: 'Take one full pack daily with a meal. Each pack contains all the daily supplements needed. It is recommended to take in the morning with breakfast for optimal absorption. Do not exceed one pack per day.',
    ingredients: 'Vitamin & Mineral Complex (Vitamin A, Vitamin C, Vitamin D3, Vitamin E, Vitamin K, B-Complex), Omega-3 Fatty Acids (EPA, DHA), Lecithin, Coenzyme Q10, and other evidence-backed micronutrient ingredients.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '14',
    slug: 'Testosterone Booster',
    name: 'Testosterone Booster',
    category: 'Amino Acids',
    description: 'RYZEN Nutrition Testosterone Booster – Performance-Focused Hormonal Support Formula. Available in Cola and Icy Blue Raspberry flavors. Each serving (9g / 1 scoop) delivers a powerful blend of botanical extracts and key vitamins and minerals. Net weight: 300g, 33 servings.',
    flavors: [
      {
        id: 'f14-1',
        name: 'ICY BLUE RASPBERRY',
        image: '/images/testosterone.png',
      },
      {
        id: 'f14-2',
        name: 'COLA',
        image: '/images/testosterone 2.png',
      }
    ],
   keyBenefits: ['Zinc contributes to normal testosterone levels in the blood.', 'Vitamin B6 contributes to the regulation of hormonal activity.', 'Nicotinamide and Vitamin B6 support normal energy-yielding metabolism and help reduce tiredness and fatigue.', 'Tribulus terrestris, Maca Root, and Siberian Ginseng support athletic performance and hormonal balance.'],
    howToUse: 'Mix one serving (9g) with 250ml of cold water and take it between meals. Do not exceed the recommended daily dose. Not recommended for individuals under 18 years of age. Consult your healthcare professional before use.',
    ingredients: 'Carbohydrate Matrix (Dextrose, Maltodextrin, Fructose), Anti-Caking Agents (Silicon Dioxide, Calcium Salts of Orthophosphoric Acid), Acid (Citric Acid), Tribulus Terrestris Fruit Extract (standardized to 40% saponins), Beta-Alanine, Citrus Aurantium Fruit Powder (standardized to 60% citrus bioflavonoids), Maca Root (Lepidium meyenii) Powder, D-Aspartic Acid, Siberian Ginseng Root Extract (standardized to 0.8% eleutherosides), Wild Yam Tuber Extract (standardized to 16% Diosgenin), Flavouring, Zinc Citrate, Caffeine Anhydrous, Alfalfa Grass Powder, Sweetener (Sucralose), Nicotinamide, Pyridoxine Hydrochloride.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },

];

export const categories = [
  { id: 'protein', name: 'Protein', description: 'Whey, Iso, and Mass Gainer' },
  { id: 'amino-acids', name: 'Amino Acids', description: 'Creatine Monohydrate and EAA Plus' },
  { id: 'carbohydrates', name: 'Carbohydrates', description: 'Cream of Rice and Fuel' },
  { id: 'energy-burn', name: 'Energy & Burn', description: 'Legend Pre Workout, Evo Burn, and Pump' },
  { id: 'vitamins', name: 'Vitamins', description: 'Daily health, immunity, and wellness support' },
];
