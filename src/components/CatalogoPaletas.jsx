import React, { useEffect, useState } from "react";
import PaletaCard from "./PaletaCard";
import { obtenerPaletas } from "../services/api";

const CatalogoPaletas = () => {
  const [paletas, setPaletas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerPaletas()
      .then((res) => {
        setPaletas(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener paletas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando catálogo...</p>;

  return (
    <section style={{ padding: "30px 0" }}>
      <h2
        style={{
          textAlign: "left",
          fontSize: "24px",
          margin: "0 0 20px 30px",
          fontFamily: "'Fredoka', sans-serif",
          color: "#5B2A2A",
        }}
      >
        Nuestros Productos
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {paletas.map((paleta) => (
          <PaletaCard
            key={paleta.id}
            nombre={paleta.nombre}
            descripcion={paleta.descripcion}
            precio={paleta.precio}
            imagenUrl={paleta.imagen_url}
            promocion={paleta.promocion} // opcional
          />
        ))}
      </div>
    </section>
  );
};

export default CatalogoPaletas;
