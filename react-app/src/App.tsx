import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "yatendra singh",
    address: {
      city: "tundla",
      zipcode: 283204,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 283205 },
    });
    console.log(customer);
  };
  return (
    <div>
      <button onClick={handleClick}>Update Address</button>
    </div>
  );
}

export default App;
