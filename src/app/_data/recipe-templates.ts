import { Recipe } from '../types/recipe';

// Southeast Asian Recipe Templates for Royal Court Feasts
export const southeastAsianTemplates: Recipe[] = [
  {
    id: 'template-nasi-lemak',
    title: 'Nasi Lemak',
    description: 'Malaysia\'s beloved coconut rice dish with aromatic spices and royal court elegance',
    imagePath: '/images/recipes/nasi-lemak.jpg',
    image: '/images/recipes/nasi-lemak.jpg',
    ingredients: [
      'Jasmine rice',
      'Coconut milk',
      'Pandan leaves',
      'Salt',
      'Anchovies',
      'Peanuts',
      'Boiled eggs',
      'Sambal'
    ],
    instructions: [
      'Rinse jasmine rice until water runs clear',
      'Cook rice with coconut milk and pandan leaves for fragrance',
      'Prepare crispy anchovies and roasted peanuts',
      'Make spicy sambal with chilies and shrimp paste',
      'Serve rice with accompaniments arranged like a royal feast'
    ],
    cuisine: 'Malaysian',
    difficulty: 'medium',
    prepTime: '20 mins',
    cookTime: '30 mins',
    preparationTime: '50 mins',
    servings: 4,
    tags: ['coconut', 'rice', 'traditional', 'breakfast', 'royal'],
    createdAt: new Date().toISOString()
  },
  {
    id: 'template-tom-yum',
    title: 'Tom Yum Goong',
    description: 'Spicy and sour Thai soup with prawns and aromatic herbs fit for royal banquets',
    imagePath: '/images/recipes/tom-yum.jpg',
    image: '/images/recipes/tom-yum.jpg',
    ingredients: [
      'Large prawns',
      'Lemongrass stalks',
      'Kaffir lime leaves',
      'Thai chilies',
      'Galangal',
      'Lime juice',
      'Fish sauce',
      'Mushrooms'
    ],
    instructions: [
      'Bring water to boil with lemongrass and galangal',
      'Add prawns and mushrooms to the aromatic broth',
      'Season with fish sauce and lime juice',
      'Add chilies and kaffir lime leaves for royal fragrance',
      'Serve hot with a garnish fit for court dining'
    ],
    cuisine: 'Thai',
    difficulty: 'easy',
    prepTime: '15 mins',
    cookTime: '15 mins',
    preparationTime: '30 mins',
    servings: 2,
    tags: ['spicy', 'sour', 'soup', 'seafood', 'aromatic'],
    createdAt: new Date().toISOString()
  },
  {
    id: 'template-pad-thai',
    title: 'Pad Thai',
    description: 'Thailand\'s iconic stir-fried noodles with a perfect balance of sweet, sour, and savory',
    imagePath: '/images/recipes/pad-thai.jpg',
    image: '/images/recipes/pad-thai.jpg',
    ingredients: [
      'Rice noodles',
      'Prawns or chicken',
      'Bean sprouts',
      'Eggs',
      'Tofu',
      'Tamarind paste',
      'Palm sugar',
      'Fish sauce',
      'Peanuts',
      'Lime wedges'
    ],
    instructions: [
      'Soak rice noodles until tender but firm',
      'Prepare the pad thai sauce with tamarind, palm sugar, and fish sauce',
      'Stir-fry protein until cooked through',
      'Add noodles and sauce, toss with mystical precision',
      'Garnish with peanuts, bean sprouts, and lime like a jester\'s flourish'
    ],
    cuisine: 'Thai',
    difficulty: 'medium',
    prepTime: '25 mins',
    cookTime: '15 mins',
    preparationTime: '40 mins',
    servings: 3,
    tags: ['noodles', 'stir-fry', 'sweet', 'tangy', 'classic'],
    createdAt: new Date().toISOString()
  },
  {
    id: 'template-beef-rendang',
    title: 'Beef Rendang',
    description: 'Indonesia\'s rich and complex slow-cooked beef curry worthy of royal ceremonies',
    imagePath: '/images/recipes/beef-rendang.jpg',
    image: '/images/recipes/beef-rendang.jpg',
    ingredients: [
      'Beef chuck',
      'Coconut milk',
      'Lemongrass',
      'Galangal',
      'Turmeric leaves',
      'Kaffir lime leaves',
      'Tamarind water',
      'Palm sugar',
      'Rendang spice paste'
    ],
    instructions: [
      'Cut beef into chunks fit for royal consumption',
      'Prepare the mystical rendang spice paste',
      'Slow cook beef with spices and coconut milk',
      'Simmer patiently like a court alchemist until oil separates',
      'Continue cooking until the beef is dark and caramelized'
    ],
    cuisine: 'Indonesian',
    difficulty: 'hard',
    prepTime: '30 mins',
    cookTime: '3 hours',
    preparationTime: '3.5 hours',
    servings: 6,
    tags: ['beef', 'slow-cooked', 'spicy', 'ceremonial', 'complex'],
    createdAt: new Date().toISOString()
  },
  {
    id: 'template-pho-bo',
    title: 'Pho Bo',
    description: 'Vietnam\'s aromatic beef noodle soup with herbs and spices for royal comfort',
    imagePath: '/images/recipes/pho-bo.jpg',
    image: '/images/recipes/pho-bo.jpg',
    ingredients: [
      'Beef bones',
      'Rice noodles',
      'Beef slices',
      'Star anise',
      'Cinnamon stick',
      'Onions',
      'Ginger',
      'Fish sauce',
      'Fresh herbs',
      'Lime wedges'
    ],
    instructions: [
      'Char onions and ginger over open flame like a mystical ritual',
      'Simmer beef bones with spices for hours to create royal broth',
      'Cook rice noodles until perfectly tender',
      'Arrange beef slices and noodles in bowls with courtly precision',
      'Serve with fresh herbs and lime for a feast worthy of kings'
    ],
    cuisine: 'Vietnamese',
    difficulty: 'medium',
    prepTime: '45 mins',
    cookTime: '4 hours',
    preparationTime: '5 hours',
    servings: 4,
    tags: ['soup', 'beef', 'aromatic', 'comfort', 'herbs'],
    createdAt: new Date().toISOString()
  },
  {
    id: 'template-char-kway-teow',
    title: 'Char Kway Teow',
    description: 'Malaysia\'s smoky stir-fried flat noodles with the mystical breath of the wok',
    imagePath: '/images/recipes/char-kway-teow.jpg',
    image: '/images/recipes/char-kway-teow.jpg',
    ingredients: [
      'Fresh flat rice noodles',
      'Prawns',
      'Chinese sausage',
      'Bean sprouts',
      'Eggs',
      'Chives',
      'Dark soy sauce',
      'Light soy sauce',
      'Chili paste'
    ],
    instructions: [
      'Heat wok until it breathes mystical fire',
      'Stir-fry prawns and sausage until aromatic',
      'Add noodles and sauces with the precision of a court chef',
      'Toss in bean sprouts and chives like a jester\'s juggling act',
      'Serve immediately while the wok hei magic still lingers'
    ],
    cuisine: 'Malaysian',
    difficulty: 'medium',
    prepTime: '20 mins',
    cookTime: '10 mins',
    preparationTime: '30 mins',
    servings: 2,
    tags: ['noodles', 'wok-hei', 'smoky', 'street-food', 'savory'],
    createdAt: new Date().toISOString()
  }
];

export const getRandomTemplate = (): Recipe => {
  const randomIndex = Math.floor(Math.random() * southeastAsianTemplates.length);
  return { ...southeastAsianTemplates[randomIndex] };
};