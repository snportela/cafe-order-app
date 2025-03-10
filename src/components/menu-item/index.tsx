import { Link } from "react-router-dom";
import "./styles.sass";
import { useOrder } from "../../context/order-context";
import { formatCurrency } from "../../utilities/format-currency";

type MenuItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  slug: string;
  type: string;
};

const MenuItem = ({ id, name, price, imgUrl, slug, type }: MenuItemProps) => {
  const { increaseOrderQuantity } = useOrder();

  return (
    <div className="menu-item">
      <Link to={`/menu/${type}/${slug}`} className="top-section">
        <img src={imgUrl} alt={name} />
      </Link>
      <div className="bottom-section">
        <p className="item-name">{name}</p>
        <div className="add-section">
          <p className="price">{formatCurrency(price)}</p>
          <button
            className="add-btn"
            onClick={() => increaseOrderQuantity && increaseOrderQuantity(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
