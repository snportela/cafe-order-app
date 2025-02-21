import "./styles.sass";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Item from "../../data/menu.json";
import { useParams } from "react-router-dom";
import MenuItem from "../../components/menu-item/menu-item";

const Menu = () => {
  let { category } = useParams();
  let items = Item.filter((i) => i.type === category);
  let { slug } = useParams();
  console.log(Item.filter((i) => i.slug === slug));

  return (
    <>
      <Header />
      <div className="menu">
        <div className="banner"></div>
        <div className="items">
          {items.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
