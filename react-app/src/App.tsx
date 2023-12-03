import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Coco Cola",
    price: 35,
  });

  const handleClick = () => {
    setDrink({
      ...drink,
      price: drink.price + 5,
    });
    console.log(drink.price);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
