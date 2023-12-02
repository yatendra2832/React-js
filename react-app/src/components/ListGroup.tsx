// import { Fragment } from "react"; <fragment></fragment> we can also use that ype fragment or another way is using the <></> empty angular bracket

import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Item  1", "Item  2", "Item  3", "Item  4", "Item  5"];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>Lists of Item</h1>
      {items.length === 0 && "No item found"}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
