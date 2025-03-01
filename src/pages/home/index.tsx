import Logo from "/assets/icons/cafe-logo.png";
import "./styles.sass";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <img src={Logo} alt="" />
          <h1>Sasha's coffee shop</h1>
        </div>
      </div>
      <div className="bottom-section">
        <Link to={"/menu"} className="order-btn">
          ORDER
        </Link>
      </div>
    </div>
  );
};

export default Home;
