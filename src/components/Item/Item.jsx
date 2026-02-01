import { Link } from "react-router-dom";

const Item = ({ id, title, price, image }) => {
  return (
    <div className="item">
      <img
        src={image}
        alt={title}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover"
        }}
      />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
