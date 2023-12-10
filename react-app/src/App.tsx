import ProductList from "./components/ProductList";
import React, { useState } from "react";
function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        className="form-select "
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
