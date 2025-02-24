import { useOrder } from "../../context/order-context";
import "./styles.sass";
import FoodTray from "/assets/icons/food-tray.png";
import Back from "/assets/icons/back.png";
import { Link } from "react-router-dom";

type HeaderProps = {
  showBackBtn: boolean;
  backUrl?: string;
};

const Header = ({ showBackBtn, backUrl }: HeaderProps) => {
  const { openOrder, orderQuantity } = useOrder();

  return (
    <div className="header">
      {showBackBtn && (
        <Link to={backUrl || ""} className="back-btn">
          <img src={Back} alt="" />
        </Link>
      )}
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
