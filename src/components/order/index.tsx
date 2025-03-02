import { useOrder } from "../../context/order-context";
import { formatCurrency } from "../../utilities/format-currency";
import OrderItem from "../order-item";
import OrderItems from "../../data/menu.json";
import "./styles.sass";
import Close from "/assets/icons/close.png";
import { Link } from "react-router-dom";

type OrderProps = {
  isOpen: boolean;
};

const Order = ({ isOpen }: OrderProps) => {
  const { closeOrder, orderItems } = useOrder();

  return (
    <>
      {isOpen ? (
        <div className="order slide-in">
          <div className="order-top">
            <button onClick={closeOrder} className="close-btn">
              <img src={Close} alt="" />
            </button>
            <h1>Your Order </h1>
          </div>
          <div className="order-items">
            {orderItems.map((item) => (
              <OrderItem key={item.id} {...item} />
            ))}
          </div>
          {orderItems.length > 0 && (
            <>
              <div className="total">
                Total{" "}
                {formatCurrency(
                  orderItems.reduce((total, orderItem) => {
                    const item = OrderItems.find((i) => i.id === orderItem.id);
                    return total + (item?.price || 0) * orderItem.quantity;
                  }, 0)
                )}
              </div>
              <Link
                onClick={closeOrder}
                to={"/confirmation"}
                className="place-order"
              >
                <span>Place Order</span>
              </Link>
            </>
          )}
        </div>
      ) : (
        <div className="order slide-out"></div>
      )}
    </>
  );
};

export default Order;
