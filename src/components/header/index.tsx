import "./styles.sass";
import FoodTray from "/assets/icons/food-tray.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Sasha's Bakery</div>
      <div className="waiter-icon">
        <img src={FoodTray} alt="" />
      </div>
    </div>
  );
};

export default Header;
