import { useOrder } from "../../context/order-context";
import "./styles.sass";
import FoodTray from "/assets/icons/food-tray.png";
import Back from "/assets/icons/back.png";
import { Link } from "react-router-dom";

type HeaderProps = {
  showBackBtn: boolean;
  showOrderIcon: boolean;
  backUrl?: string;
};

const Header = ({ showBackBtn, backUrl, showOrderIcon }: HeaderProps) => {
  const { openOrder, orderQuantity } = useOrder();

  return (
    <div className="header">
      {showBackBtn && (
        <Link to={backUrl || ""} className="back-btn">
          <img src={Back} alt="" />
        </Link>
      )}
      <Link to={"/menu"} className="header-title">
        <img src="/assets/icons/cafe-logo.png" />
        Sasha's Coffee Shop
      </Link>
      {showOrderIcon && (
        <button onClick={openOrder} className="waiter-icon">
          <img src={FoodTray} alt="" />
          {orderQuantity > 0 && (
            <div className="order-quantity">{orderQuantity}</div>
          )}
        </button>
      )}
    </div>
  );
};

export default Header;
