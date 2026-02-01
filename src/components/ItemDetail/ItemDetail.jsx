const ItemDetail = ({ title, price, category, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Precio: ${price}</p>
      <p>Categoría: {category}</p>
      <p>Descripción: {description}</p>
    </div>
  );
};

export default ItemDetail;
