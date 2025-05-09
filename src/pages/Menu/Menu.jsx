
import MenuCard from '../../components/MenuCard/MenuCard';
import './Menu.css';
import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    // Breakfast (4 items: 2 global + 2 Indian)
    {
      id: 1,
      name: "Avocado Toast",
      description: "Sourdough, smashed avocado, cherry tomatoes, poached eggs",
      price: 12.99,
      image: "/images/avocado-toast.jpg",
      category: "breakfast"
    },
    {
      id: 2,
      name: "Berry Pancakes",
      description: "Fluffy buttermilk pancakes with mixed berries",
      price: 10.99,
      image: "/images/Pancakes.jpg",
      category: "breakfast"
    },
    {
      id: 100,
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spicy potato mash, served with chutney and sambar",
      price: 9.99,
      image: "/images/Masala-Dosa.jpg",
      category: "breakfast"
    },
    

    // Lunch (previously Sandwiches) (4 items: 2 global + 2 Indian)
    {
      id: 4,
      name: "Grilled Cheese",
      description: "3-cheese blend on artisan bread with tomato soup",
      price: 11.99,
      image: "/images/Grilled-cheese.jpg",
      category: "lunch"
    },
    {
      id: 5,
      name: "Chicken Panini",
      description: "Grilled chicken, pesto, and mozzarella",
      price: 13.99,
      image: "/images/Chicken-Panini.jpg",
      category: "lunch"
    },
    {
      id: 102,
      name: "Pav Bhaji",
      description: "Spicy mashed vegetables served with buttered buns",
      price: 10.50,
      image: "/images/Pav-Bhaji.jpg",
      category: "lunch"
    },
   
    // Drinks (Coffee only)
    {
      id: 7,
      name: "Espresso",
      description: "Single shot of our premium house blend",
      price: 3.50,
      image: "/images/Espresso.jpg",
      category: "drinks",
      subcategory: "coffee"
    },
    {
      id: 8,
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: 4.75,
      image: "/images/Cappuccino.jpg",
      category: "drinks",
      subcategory: "coffee"
    },
    {
      id: 9,
      name: "Latte",
      description: "Espresso with generous steamed milk",
      price: 5.25,
      image: "/images/Latte.jpg",
      category: "drinks",
      subcategory: "coffee"
    },
    {
      id: 10,
      name: "Flat White",
      description: "Double espresso with microfoam",
      price: 5.50,
      image: "/images/Flat-White.jpg",
      category: "drinks",
      subcategory: "coffee"
    },
    {
      id: 11,
      name: "Americano",
      description: "Espresso with hot water",
      price: 4.00,
      image: "/images/Americano.jpg",
      category: "drinks",
      subcategory: "coffee"
    },
    {
      id: 12,
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: 5.75,
      image: "/images/Mocha.jpg",
      category: "drinks",
      subcategory: "coffee"
    },
    {
      id: 15,
      name: "Affogato",
      description: "Espresso poured over vanilla gelato",
      price: 6.50,
      image: "/images/Affogato.jpg",
      category: "drinks",
      subcategory: "coffee"
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="container">
        <h1>Cafe Menu</h1>
        <div className="menu-categories">
          <button
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button
            className={`category-btn ${activeCategory === 'breakfast' ? 'active' : ''}`}
            onClick={() => setActiveCategory('breakfast')}
          >
            Breakfast
          </button>
          <button
            className={`category-btn ${activeCategory === 'lunch' ? 'active' : ''}`}
            onClick={() => setActiveCategory('lunch')}
          >
            Lunch
          </button>
          <button
            className={`category-btn ${activeCategory === 'drinks' ? 'active' : ''}`}
            onClick={() => setActiveCategory('drinks')}
          >
            Drinks
          </button>
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
