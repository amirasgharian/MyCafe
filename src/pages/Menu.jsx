import { useState } from "react";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import "../styles/menu.css"


function Menu() {
 
  return (
    <div>
      <h2 className="text-center text-white mb-4">منوی کافه</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default Menu;