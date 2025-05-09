
import './MenuCard.css';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="menu-card-footer">
          <span className="price">${item.price}</span>
          <button className="btn-add">Add to Order</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;