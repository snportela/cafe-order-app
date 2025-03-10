import "./styles.sass";
import TrashIcon from "/assets/icons/trash-can.png";
import OrderItems from "../../data/menu.json";
import { useOrder } from "../../context/order-context";
import { formatCurrency } from "../../utilities/format-currency";

type OrderItemProps = {
  id: number;
  quantity: number;
};

const OrderItem = ({ id, quantity }: OrderItemProps) => {
  const { increaseOrderQuantity, decreaseOrderQuantity, removeFromOrder } =
    useOrder();

  const item = OrderItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="order-item">
      <div className="item-image">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">{formatCurrency(item.price)}</span>
      </div>
      <div className="item-actions">
        <div className="change-quantity">
          <button
            onClick={() => decreaseOrderQuantity && decreaseOrderQuantity(id)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => increaseOrderQuantity && increaseOrderQuantity(id)}
          >
            +
          </button>
        </div>
        <div className="remove">
          <button onClick={() => removeFromOrder && removeFromOrder(id)}>
            <img src={TrashIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
