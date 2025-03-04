import "./styles.sass";
import Header from "../../components/header";
import Item from "../../data/menu.json";
import { useParams } from "react-router-dom";
import MenuItem from "../../components/menu-item";

const Menu = () => {
  let { category } = useParams();
  let items = Item.filter((i) => i.type === category);

  if (!category) return null;

  const capitalize = <T extends string>(s: T) =>
    (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

  return (
    <>
      <Header showBackBtn={true} showOrderIcon={true} />
      <div className="menu">
        <div
          className="banner"
          style={{
            backgroundImage: `url(/assets/images/${category}-banner.jpg)`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>{capitalize(category)}</h1>
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
