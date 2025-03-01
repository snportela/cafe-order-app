import "./styles.sass";
import Header from "../../components/header";
import Item from "../../data/menu.json";
import { useParams } from "react-router-dom";
import MenuItem from "../../components/menu-item";

const Menu = () => {
  let { category } = useParams();
  let items = Item.filter((i) => i.type === category);

  return (
    <>
      <Header showBackBtn={true} backUrl="/menu" />
      <div className="menu">
        <div className="banner">
          <img src={`/assets/images/${category}-banner.jpg`} alt="" />
        </div>
        <div className="items">
          {items.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
