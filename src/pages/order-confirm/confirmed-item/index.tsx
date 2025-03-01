import "./styles.sass";
import OrderItems from "../../../data/menu.json";
import { formatCurrency } from "../../../utilities/format-currency";

type ConfirmedItemProps = {
  id: number;
  quantity: number;
};

const ConfirmedItem = ({ id, quantity }: ConfirmedItemProps) => {
  const item = OrderItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="confirmed-item">
      <div className="item-image">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">{formatCurrency(item.price)}</span>
      </div>
      <div className="quantity">
        x{quantity}
      </div>
    </div>
  );
};

export default ConfirmedItem;
