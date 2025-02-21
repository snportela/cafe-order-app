import "./styles.sass";
import Placeholder from "/assets/images/sasha-logo.png";
import Coffee from "/assets/images/coffee-latte.png";
import Cake from "/assets/images/cake.png";
import Pie from "/assets/images/pie.png";
import Pancake from "/assets/images/pancake.png";
import MenuItem from "../../components/menu-item/menu-item";
import Item from "../../data/menu.json";
import Header from "../../components/header";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const popular = Item.slice(0, 4);

  return (
    <>
      <Header />
      <div className="main-menu">
        <div className="special-section">
          <h1>Special offers</h1>
          <div className="special">
            <div className="special-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              possimus fugiat autem sequi provident quos, unde itaque nisi
              explicabo, tenetur praesentium ratione corporis dolor nobis.
            </div>
            <div className="special-image">
              <img src={Placeholder} alt="" />
            </div>
          </div>
        </div>

        <div className="categories-section">
          <h1>Categories</h1>
          <div className="categories">
            <Link to={"/menu/drinks"} className="card">
              <img src={Coffee} alt="" />
              <p>Drinks</p>
            </Link>
            <Link to={"/menu/cakes"} className="card">
              <img src={Cake} alt="" />
              <p>Cake</p>
            </Link>
            <Link to={"/menu/pies"} className="card">
              <img src={Pie} alt="" />
              <p>Pie</p>
            </Link>
            <Link to={"/menu/others"} className="card">
              <img src={Pancake} alt="" />
              <p>Others</p>
            </Link>
          </div>
        </div>

        <div className="popular-section">
          <h1>Popular</h1>
          <div className="popular">
            {popular.map((item) => {
              return <MenuItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
