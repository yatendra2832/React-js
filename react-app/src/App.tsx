import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerfull", "excited"]);

  const handleClick = () => {
    // we want when the button is clicked them the new item will be add to the array
    // add
    setTags([...tags, "greetings"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "excited"));

    // update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    console.log(tags);
  };
  return (
    <div>
      <button onClick={handleClick}>Update Tags</button>
    </div>
  );
}

export default App;
