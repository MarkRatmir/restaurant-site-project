import FoodItem from '../components/FoodItem.jsx';
import '../styles/Menu.css';
import Section from '../components/SectionAnimation.jsx';


function Menu() {

    const foodList = [
  {
    name: 'Bruschetta',
    description: 'Grilled bread, garlic, tomatoes, basil, olive oil',
    price: 6.99,
    category: 'Entrees',
  },
  {
    name: 'Stuffed Mushrooms',
    description: 'Mushrooms, cheese, breadcrumbs, herbs',
    price: 7.99,
    category: 'Entrees',
  },
  {
    name: 'Grilled Salmon',
    description: 'Salmon fillet, lemon butter, asparagus',
    price: 18.99,
    category: 'Main Dishes',
  },
  {
    name: 'Steak Frites',
    description: 'Grilled steak, fries, peppercorn sauce',
    price: 21.99,
    category: 'Main Dishes',
  },
  {
    name: 'Chicken Alfredo',
    description: 'Fettuccine, grilled chicken, creamy Alfredo sauce',
    price: 16.99,
    category: 'Main Dishes',
  },
  {
    name: 'Tiramisu',
    description: 'Espresso-soaked ladyfingers, mascarpone, cocoa',
    price: 7.49,
    category: 'Desserts',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey center',
    price: 6.99,
    category: 'Desserts',
  },
  {
    name: 'Lemonade',
    description: 'Fresh squeezed lemons, sugar, water',
    price: 3.50,
    category: 'Drinks',
  },
  {
    name: 'Iced Tea',
    description: 'Brewed black tea, lemon, ice',
    price: 2.99,
    category: 'Drinks',
  },
];

    const categories = [...new Set(foodList.map(item => item.category))];


    return (
        <div>
          <div className="menu-page-banner">
            <div className="menu-overlay">
              <h1>Our Menu</h1>
            </div>
          </div>
            {categories.map(category => (
                <div key={category}>
                    <div className="category-heading">
                        <div className="line"></div>
                        <h2>{category}</h2>
                        <div className="line"></div>
                    </div>
                    <div className="food-container">
                    {foodList
                    .filter(item => item.category === category)
                    .map((food, index) => (
                        <Section animation="fadeUp" key={index}>
                        <FoodItem 
                            key={index}
                            name={food.name}
                            description={food.description}
                            price={food.price}
                        />
                        </Section>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;