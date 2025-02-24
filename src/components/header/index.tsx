import { useOrder } from "../../context/order-context";
import "./styles.sass";
import FoodTray from "/assets/icons/food-tray.png";

const Header = () => {
  const { openOrder, orderQuantity } = useOrder();

  return (
    <div className="header">
      <div className="logo">Sasha's Bakery</div>
      {orderQuantity > 0 && (
        <button onClick={openOrder} className="waiter-icon">
          <img src={FoodTray} alt="" />
          <div className="order-quantity">{orderQuantity}</div>
        </button>
      )}
    </div>
  );
};

export default Header;
