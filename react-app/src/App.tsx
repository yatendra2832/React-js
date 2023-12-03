import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={30}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        consectetur iste placeat, facilis, vel eius odio officia perspiciatis
        laborum esse, eum vero. Sint, reprehenderit quam nihil possimus Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sunt in rerum iusto,
        fuga quas reiciendis repellendus dolorem minima cupiditate obcaecati
        aliquam quaerat dolore ducimus maxime, sequi qui doloribus aut autem
        unde perferendis! Ab qui itaque repellat quaerat corrupti aliquam
        commodi. veritatis aperiam illo!
      </ExpandableText>
    </div>
  );
}

export default App;
