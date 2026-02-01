import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ title, price, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;