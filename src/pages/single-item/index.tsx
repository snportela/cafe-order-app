import "./styles.sass";
import Item from "../../data/menu.json";
import { useParams } from "react-router-dom";

const SingleItem = () => {
  let { slug } = useParams();
  console.log(Item.filter((i) => i.slug === slug));
  return <div>SingleItem</div>;
};

export default SingleItem;
