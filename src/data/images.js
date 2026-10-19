/**
 * Image Manifest for Fork & Knife (फोर्क & नाइफ) Website
 * Single Source of Truth for all imagery assets
 */

export const IMAGES = {
  // Hero Orbit Rotating Dishes
  hero: {
    dish1: {
      src: '/images/hero-dish-1.png',
      alt: 'Fork & Knife Signature Handcrafted White Sauce Pasta',
      width: 550,
      height: 550,
      title: 'White Sauce Pasta',
      subtitle: 'Creamy Italian herbs & garlic tossed pasta'
    },
    dish2: {
      src: '/images/hero-dish-2.png',
      alt: 'Dehradun Famous Veg Steamed Momos',
      width: 500,
      height: 500,
      title: 'Steamed Veg Momos',
      subtitle: 'Hand-pleated dumplings with fiery chutney'
    },
    dish3: {
      src: '/images/hero-dish-3.png',
      alt: 'Crispy Seasoned Chicken Lollipop',
      width: 480,
      height: 480,
      title: 'Chicken Lollipop',
      subtitle: 'Crispy fried winglets with house dip'
    },
    dish4: {
      src: '/images/hero-dish-4.png',
      alt: 'Special Himalayan Jhol Momo',
      width: 480,
      height: 480,
      title: 'Special Jhol Momo',
      subtitle: 'Steamed momos drowned in spicy sesame broth'
    }
  },

  // About Section
  about: {
    plate: {
      src: '/images/about-plate.png',
      alt: 'Fork & Knife Specialty Cafe Dishes',
      width: 600,
      height: 600
    }
  },

  // Popular Dishes Section
  popularDishes: [
    {
      id: 'veg-steam-momo',
      name: 'Veg Steam Momo',
      category: 'Himalayan Dumplings',
      description: 'Delicate hand-wrapped steamed dumplings stuffed with fresh mountain vegetables and garlic.',
      image: '/images/dish-veg-momo.png',
      badge: 'Bestseller',
      width: 220,
      height: 220
    },
    {
      id: 'chicken-lollipop',
      name: 'Chicken Lollipop',
      category: 'Crispy Starters',
      description: 'Succulent chicken winglets frenched, batter-fried to golden perfection, served with spicy dip.',
      image: '/images/dish-chicken-lollipop.png',
      badge: 'Popular',
      width: 220,
      height: 220
    },
    {
      id: 'white-sauce-pasta',
      name: 'White Sauce Pasta',
      category: 'Continental Favorites',
      description: 'Silky rich white sauce pasta tossed with butter, mushrooms, herbs, and shaved cheese.',
      image: '/images/dish-white-sauce-pasta.png',
      badge: "Chef's Special",
      width: 220,
      height: 220
    },
    {
      id: 'jhol-momo',
      name: 'Special Jhol Momo',
      category: 'Signature Special',
      description: 'Hot steamed dumplings served immersed in a tangy, comforting roasted sesame & tomato broth.',
      image: '/images/dish-jhol-momo.png',
      badge: 'Must Try',
      width: 220,
      height: 220
    }
  ],

  // Spotlight Feature Dish
  spotlight: {
    dish: {
      src: '/images/spotlight-dish.png',
      alt: 'Fork & Knife Dehradun Signature Dish Spotlight',
      width: 600,
      height: 600
    }
  },

  // Events & Celebrations Banner
  events: {
    skewers: {
      src: '/images/event-skewers.png',
      alt: 'Party Platters & Fresh Grills for Celebrations',
      width: 500,
      height: 600
    },
    card1: {
      src: '/images/event-card-1.png',
      alt: 'Birthday Party Finger Food Platters',
      width: 200,
      height: 200
    },
    card2: {
      src: '/images/event-card-2.png',
      alt: 'Snack Trays & Group Combos',
      width: 200,
      height: 200
    }
  },

  // Fresh Flavors Section
  freshFlavors: {
    pan: {
      src: '/images/flavor-pan.png',
      alt: 'Sizzling Freshly Prepared Cafe Specials',
      width: 500,
      height: 500
    }
  },

  // Booking & Location Panel
  booking: {
    panel: {
      src: '/images/booking-panel.png',
      alt: 'Rustic Dining at Fork & Knife Dehradun',
      width: 650,
      height: 600
    }
  },

  // Floating Decorative Ingredients
  decorations: {
    tomato: {
      src: '/images/leaf-tomato.png',
      alt: 'Fresh Tomato',
      width: 80,
      height: 80
    },
    lime: {
      src: '/images/leaf-lime.png',
      alt: 'Fresh Lime',
      width: 70,
      height: 70
    },
    garlic: {
      src: '/images/leaf-garlic.png',
      alt: 'Garlic Clove',
      width: 80,
      height: 80
    },
    basil: {
      src: '/images/leaf-basil.png',
      alt: 'Fragrant Basil Leaf',
      width: 75,
      height: 75
    },
    orange: {
      src: '/images/leaf-orange.png',
      alt: 'Zesty Citrus',
      width: 70,
      height: 70
    },
    grapes: {
      src: '/images/leaf-grapes.png',
      alt: 'Green Grapes',
      width: 90,
      height: 90
    }
  }
};
