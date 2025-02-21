import { Link } from "react-router-dom";
import "./styles.sass";

type MenuItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  slug: string;
  type: string;
};

const MenuItem = ({ id, name, price, imgUrl, slug, type }: MenuItemProps) => {
  return (
    <Link to={`/menu/${type}/${slug}`} className="menu-item">
      <div className="top-section">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="bottom-section">
        <p className="item-name">{name}</p>
        <div className="add-section">
          <p className="price">{price}</p>
          <button className="add-btn">+</button>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
