import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pagina storage",
  description: "Descripcion de storage",
};

interface ProductProps {
  params: {
    product: string[];
  };
}

export default function Product(props: ProductProps) {
  console.log(props);

  // Verificar si params y product están definidos
  const { product } = props.params || {};

  return (
    <div>
      <h1 style={{ color: "blue" }}>
        Página de Storage/Productos:{" "}
        {product ? product.toString() : "Sin productos disponibles"}
      </h1>
      {Array.isArray(product) ? (
        product.map((l, index) => (
          <ul key={index} style={{ backgroundColor: "red" }}>
            <li>{l}</li>
          </ul>
        ))
      ) : (
        <p>No se proporcionaron productos válidos.</p>
      )}
    </div>
  );
}
