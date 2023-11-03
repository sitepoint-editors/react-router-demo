import { Link, Route, Routes } from "react-router-dom";
import Product from "./Product";

const productData = [
  {
    id: 1,
    name: "Dell OptiPlex 3090",
    description:
      "The Dell OptiPlex 3090 is a compact desktop PC that offers versatile features to meet your business needs.",
    status: "Available",
  },
  {
    id: 2,
    name: "Lenovo ThinkPad X1 Carbon",
    description:
      "Designed with a sleek and durable build, the Lenovo ThinkPad X1 Carbon is a high-performance laptop ideal for on-the-go professionals.",
    status: "Out of Stock",
  },
  {
    id: 3,
    name: "CyberPowerPC Gamer Xtreme",
    description:
      "The CyberPowerPC Gamer Xtreme is a high-performance gaming desktop with powerful processing and graphics capabilities for a seamless gaming experience.",
    status: "Available",
  },
  {
    id: 4,
    name: "Apple MacBook Air",
    description:
      "The Apple MacBook Air is a lightweight and compact laptop with a high-resolution Retina display and powerful processing capabilities.",
    status: "Out of Stock",
  },
];

const Products = () => {
  const linkList = productData.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h3>Products</h3>
      <p>Browse individual products.</p>
      <ul>{linkList}</ul>

      <Routes>
        <Route path=":productId" element={<Product data={productData} />} />
        <Route index element={<p>Please select a product.</p>} />
      </Routes>
    </div>
  );
};

export default Products;
