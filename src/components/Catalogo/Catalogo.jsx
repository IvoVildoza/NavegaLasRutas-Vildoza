import React from "react";
import products from "../../data/products"; // <-- dos niveles arriba porque estás en catalogo/


function Catalogo() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0", fontSize: "36px" }}>Catálogo</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "30px",
        padding: "0 20px"
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            {/* Imagen */}
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} 
            />

            {/* Nombre del producto */}
            <h3 style={{ margin: "10px 0" }}>{product.title}</h3>

            {/* Descripción */}
            <p>{product.description}</p>

            {/* Precio */}
            <p style={{ fontWeight: "bold", margin: "10px 0" }}>${product.price}</p>

            {/* Botón */}
            <button style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#007BFF",
              color: "white",
              cursor: "pointer"
            }}>
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
