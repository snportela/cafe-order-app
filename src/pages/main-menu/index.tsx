import "./styles.sass";
import CakeAndCoffee from "/assets/images/cake-and-coffee.jpg"
import Coffee from "/assets/images/coffee-latte.png";
import Cake from "/assets/images/cake.png";
import Pie from "/assets/images/pie.png";
import Pancake from "/assets/images/pancake.png";
import MenuItem from "../../components/menu-item";
import Item from "../../data/menu.json";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utilities/format-currency";

type MenuItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  slug: string;
  type: string;
};

const MainMenu = () => {
  let randomIds: number[] = [];
  let popularItems: MenuItemProps[] = [];

  for (let i = 0; i < 4; i++) {
    const randomNumber: number = Math.ceil(Math.random() * 36);
    randomIds.push(randomNumber);
  }

  randomIds.forEach((id) => {
    popularItems.push(...Item.filter((i) => i.id === id));
  });

  return (
    <>
      <Header showBackBtn={false} />
      <div className="main-menu">
        <div className="special-section">
          <h1>Special offers</h1>
          <div className="special">
            <div className="special-text">
              <p>Special Combo!</p>
              <p>Get a slice of cake + a coffee of your choice for only {formatCurrency(8.00)}</p>
            </div>
            <div className="special-image">
              <img src={CakeAndCoffee} alt="" />
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
            {popularItems.map((item) => {
              return <MenuItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
