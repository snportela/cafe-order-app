import "./styles.sass";
import Item from "../../data/menu.json";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { useOrder } from "../../context/order-context";
import { formatCurrency } from "../../utilities/format-currency";

const SingleItem = () => {
  let { slug } = useParams();
  const itemInfo = Item.filter((i) => i.slug === slug);

  const { increaseOrderQuantity, decreaseOrderQuantity, getItemQuantity } =
    useOrder();

  return (
    <>
      <Header showBackBtn={true} showOrderIcon={true} />
      <div className="single-item">
        <div className="content">
          {itemInfo.map((i) => (
            <>
              <div key={i.id} className="container-top">
                <div className="item-image">
                  <img src={i.imgUrl} alt="" />
                </div>
              </div>
              <div className="container-bottom">
                <div className="item-info">
                  <p className="name">{i.name}</p>
                  <p className="description">{i.description}</p>
                  <p className="price">{formatCurrency(i.price)}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => increaseOrderQuantity(i.id)}>+</button>
                  <span>{getItemQuantity(i.id)}</span>
                  <button onClick={() => decreaseOrderQuantity(i.id)}>-</button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleItem;
