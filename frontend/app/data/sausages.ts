export interface Sausage {
  id: string;
  badge: string;
  title: string;
  price: string;
  description: string;
  ctaLabel: string;
  image: string;
}

export const sausages: Sausage[] = [
  {
    id: 'house-italian-sausage',
    badge: '4-Pack ~1.0 lb',
    title: 'House Italian Sausage',
    price: '$15',
    description: 'Pork butt and belly, salt, fennel seeds (cracked), black pepper, paprika, garlic, red pepper flakes.',
    ctaLabel: 'Reserve a Pack',
    image: '/italian_jalapeno.jpeg',
  },
  {
    id: 'jalapeno-popper-sausage',
    badge: '4-Pack ~1.0 lb',
    title: 'Jalapeno Popper Sausage',
    price: '$16',
    description: 'Pork butt and belly, bacon(cooked), jalapenos, pepper jack cheese, cheddar cheese, salt, black pepper, mustard powder, paprika, cayenne pepper.',
    ctaLabel: 'Reserve a Pack',
    image: '/italian_jalapeno.jpeg',
  },
  {
    id: 'maple-and-sage-sausage',
    badge: '4-Pack ~1.0 lb',
    title: 'Maple and Sage Sausage',
    price: '$15',
    description: 'Chicken thighs, maple syrup, rubbed sage, salt, black pepper, garlic powder, onion powder, smoked paprika, cayenne pepper, cinnamon, vanilla extract.',
    ctaLabel: 'Reserve a Pack',
    image: '/Maple_and_sage.jpeg',
  },
  {
    id: 'philly-cheesesteak-sausage',
    badge: '4-Pack ~1.0 lb',
    title: 'Philly Cheesesteak Sausage',
    price: '$20',
    description: 'Beef chuck and pork belly, cheddar cheese, american cheese, green and yellow bell peppers, yellow onion, salt, black pepper, garlic powder, onion powder, jalapeno.',
    ctaLabel: 'Reserve a Pack',
    image: '/Philly_Cheese_Steak.jpeg',
  },
];

export const pickupSteps = [
  {
    step: '01',
    title: 'Reserve online',
    description: 'No prepayment needed. Simply select your desired packs before Friday 6pm so ingredients can be portioned and sausages prepared.',
    note: 'Zero prepayment barrier',
  },
  {
    step: '02',
    title: 'Saturday Pickup',
    description: 'Come pick your order up at the Plymouth Farmers market on Saturdays between 8am and 12:30 pm.',
    note: 'The Gathering, 736 Penniman Ave, Plymouth, MI 48170',
  },
  {
    step: '03',
    title: 'Grill & Enjoy',
    description: 'Every bundle arrives vacuum sealed with a label that provides ingredients and instructions specifying internal target temps.',
    note: 'Vacuum sealed for freshness',
  },
];

export const faqs = [
  {
    question: 'Do you ship?',
    answer: 'Not yet — everything is made in a commercial kitchen and sold locally at the Plymouth Farmers Market.',
  },
  // {
  //   question: 'What pork do you use?',
  //   answer: 'Exclusively pasture-raised Berkshire and Duroc heritage pork from small generational farms in the Willamette and Columbia valleys.',
  // },
  {
    question: 'Gluten & nitrate free?',
    answer: 'Yes — natural hog casings only, no fillers, and no synthetic phosphates or binders.',
  },
  {
    question: 'How long do they keep?',
    answer: 'Best within 3-5 days refrigerated, or freeze for up to 3 months in the provided vacuum sealed packaging.',
  },
];
