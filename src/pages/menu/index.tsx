import Header from "../../components/header/header";
import "./styles.sass";
import Placeholder from "/assets/images/sasha-logo.png";
import Coffee from "/assets/images/coffee-latte.png";
import Cake from "/assets/images/cake.png";
import Pie from "/assets/images/pie.png";
import Pancake from "/assets/images/pancake.png";
import Order from "../../components/order/order";
import MenuItem from "../../components/menu-item/menu-item";

const Menu = () => {
  return (
    <>
      <Header />
      <Order />
      <div className="menu">
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
            <div className="card">
              <img src={Coffee} alt="" />
              <p>Coffee</p>
            </div>
            <div className="card">
              <img src={Cake} alt="" />
              <p>Cake</p>
            </div>
            <div className="card">
              <img src={Pie} alt="" />
              <p>Pie</p>
            </div>
            <div className="card">
              <img src={Pancake} alt="" />
              <p>Others</p>
            </div>
          </div>
        </div>
        <div className="popular-section">
          <h1>Popular</h1>
          <div className="popular">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
