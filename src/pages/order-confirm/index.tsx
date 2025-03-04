import "./styles.sass";
import { useOrder } from "../../context/order-context";
import ConfirmedItem from "./components/confirmed-item";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utilities/format-currency";
import OrderItems from "../../data/menu.json";
import { useState } from "react";
import Header from "../../components/header";

const OrderConfirm = () => {
  const { orderItems, clearOrder } = useOrder();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header showBackBtn={false} showOrderIcon={false} />
      <div className="order-confirm">
        <h1>Order</h1>
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
          <Link to={"/menu"}>Cancel</Link>
          <button onClick={() => setIsModalOpen(true)}>Confirm Order</button>
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
    </>
  );
};

export default OrderConfirm;
