import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  // that will remove the redundant state of the name variable
  const [isLoading, setLoading] = useState(false);
  return <div></div>;
}

/* Best practices for 
Avoid redundant state variables
Group related variables inside an object
Avoid deeply nested structures
 */
export default App;
