import { createElementObj } from './content';

export const menuContent = [
  createElementObj('div', '', 'main flex flex-col', [
    createElementObj('h1', "Gabe's Italian", 'logo'),
    createElementObj('h2', 'Menu', 'menu-header'),
    createElementObj('div', '', 'menu-grid', [
      createElementObj('h3', 'Appetiser', 'course'),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Bruschetta', 'dish-name'),
          createElementObj('h4', '$7.99', 'price'),
        ]),
        createElementObj(
          'p',
          "Our classic bruschetta features toasted bread topped with fresh diced tomatoes, garlic basil, and drizzled with extra virgin olive oil. It's a light and refreshing appetizer that's perfect for summer",
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Arancini', 'dish-name'),
          createElementObj('h4', '$9.99', 'price'),
        ]),
        createElementObj(
          'p',
          "These crispy fried rice balls are stuffed with a savory filling of mozzarella cheese and either meat, mushrooms, or vegetables. They're a popular Sicilian street food and make for a delicious and filling appetizer that's perfect for sharing.",
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Caprese Salad', 'dish-name'),
          createElementObj('h4', '$8.99', 'price'),
        ]),
        createElementObj(
          'p',
          "Made with ripe tomatoes, fresh mozzarella, and fragrant basil leaves, our Caprese salad is a simple and classic Italian appetizer. Drizzled with extra virgin olive oil and a sprinkle of salt and black pepper, it's a light and refreshing way to start your meal.",
          'dish-desc'
        ),
      ]),
    ]),
    createElementObj('div', '', 'menu-grid', [
      createElementObj('h3', 'Main', 'course'),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Spaghetti Carbonara', 'dish-name'),
          createElementObj('h4', '$16.99', 'price'),
        ]),
        createElementObj(
          'p',
          'A classic Roman dish made with spaghetti, pancetta, eggs, and Pecorino Romano cheese. Creamy and delicious, this dish is perfect for those who love rich and savory flavors.',
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Margherita Pizza', 'dish-name'),
          createElementObj('h4', '$14.99', 'price'),
        ]),
        createElementObj(
          'p',
          'A traditional Neapolitan pizza topped with tomato sauce, mozzarella cheese, and fresh basil. Simple yet satisfying, this pizza is a crowd-pleaser and a staple of Italian cuisine.',
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Chicken Parmigiana', 'dish-name'),
          createElementObj('h4', '$18.99', 'price'),
        ]),
        createElementObj(
          'p',
          'A classic Italian-American dish made with breaded chicken, tomato sauce, and melted mozzarella cheese. Served with a side of spaghetti, this hearty dish is sure to fill you up.',
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Risotto ai Funghi', 'dish-name'),
          createElementObj('h4', '$19.99', 'price'),
        ]),
        createElementObj(
          'p',
          "Creamy and flavorful, this dish features Arborio rice cooked with porcini mushrooms, white wine, and Parmesan cheese. Perfect for vegetarians, it's a delicious way to enjoy the earthy flavors of mushrooms in a rich and satisfying meal.",
          'dish-desc'
        ),
      ]),
    ]),
    createElementObj('div', '', 'menu-grid', [
      createElementObj('h3', 'Dessert', 'course'),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Tiramisu', 'dish-name'),
          createElementObj('h4', '$8.99', 'price'),
        ]),
        createElementObj(
          'p',
          "This classic Italian dessert consists of layers of ladyfingers soaked in espresso and layered with a light and fluffy mascarpone cheese filling. It's the perfect combination of sweet and bitter flavors, making it a favorite among coffee lovers.",
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Cannoli', 'dish-name'),
          createElementObj('h4', '$8.99', 'price'),
        ]),
        createElementObj(
          'p',
          "These crunchy pastry shells are filled with a sweet, creamy ricotta cheese filling and can be flavored with ingredients such as chocolate chips or pistachios. They're a beloved Sicilian treat that has become a staple in Italian-American cuisine.",
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Gelato', 'dish-name'),
          createElementObj('h4', '$5.99', 'price'),
        ]),
        createElementObj(
          'p',
          'This Italian-style ice cream is known for its rich and creamy texture and intense flavors. Our gelato is made fresh daily using the finest ingredients, with classic flavors like chocolate and vanilla, as well as more unique options like stracciatella and hazelnut.',
          'dish-desc'
        ),
      ]),
      createElementObj('div', '', 'menu-item', [
        createElementObj('div', '', 'flex space-btw', [
          createElementObj('h4', 'Affogato', 'dish-name'),
          createElementObj('h4', '$7.99', 'price'),
        ]),
        createElementObj(
          'p',
          'This simple yet delicious dessert consists of a scoop of vanilla gelato "drowned" in a shot of hot espresso. The combination of cold and hot, sweet and bitter flavors is a perfect end to any meal.',
          'dish-desc'
        ),
      ]),
    ]),
  ]),
];

// New Course
// createElementObj('div', '', 'menu-grid', [
//   createElementObj('h3', '', 'course'),
//   createElementObj('div', '', 'menu-item', [])
// ])

// Menu Item
// createElementObj('div', '', 'menu-item', [
//   createElementObj('div', '', 'flex space-btw', [
//     createElementObj('h4', '', 'dish-name'),
//     createElementObj('h4', '', 'price')
//   ]),
//   createElementObj('p', '', 'dish-desc')
// ])
