import ProductList from "./components/ProductList";
import React, { useEffect, useState } from "react";
function App() {
  const connect = () => {
    console.log("Connecting...");
  };
  const disconnect = () => {
    console.log("Disconnecting...");
  };
  useEffect(() => {
    connect();
    return () => disconnect();
    // return is called when the component is unmounted or we can say that when the component is destroyed from the memory or when the component is removed from the DOM this is used for cleaning up the resources that are used by the component
  });
  return <div></div>;
}

export default App;
