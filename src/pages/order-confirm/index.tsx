import "./styles.sass";
import { useOrder } from "../../context/order-context";
import ConfirmedItem from "./confirmed-item";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utilities/format-currency";
import OrderItems from "../../data/menu.json";
import { useState } from "react";

const OrderConfirm = () => {
  const { orderItems, clearOrder } = useOrder();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="order-confirm">
      {orderItems.map((item) => (
        <ConfirmedItem key={item.id} {...item} />
      ))}
      <div className="total">
        Total{" "}
        {formatCurrency(
          orderItems.reduce((total, orderItem) => {
            const item = OrderItems.find((i) => i.id === orderItem.id);
            return total + (item?.price || 0) * orderItem.quantity;
          }, 0)
        )}
      </div>
      <div className="buttons">
        <button onClick={() => setIsModalOpen(true)}>Confirm Order</button>
        <Link to={"/menu"}>Cancel</Link>
      </div>
      {isModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <p>Order Complete!</p>
            <p>Your items will be delivered soon.</p>
            <Link onClick={clearOrder} to={"/"}>
              Ok
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirm;
