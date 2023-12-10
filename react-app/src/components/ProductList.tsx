import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching the product in", category);
    setProducts(["Product 1", "Product 2", "Product 3"]);
  }, [category]);
  // second argument to the useEffect is the dependency array which is an array of values that will trigger the effect to re-run when they change in the dependency array that is passed in as the second argument to the useEffect function in this case the category
  return <div>ProductList</div>;
};

export default ProductList;
