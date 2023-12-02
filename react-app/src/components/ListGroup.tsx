import { useState } from "react";

// import { Fragment } from "react"; <fragment></fragment> we can also use that ype fragment or another way is using the <></> empty angular bracket
function ListGroup() {
  let items = ["Item  1", "Item  2", "Item  3", "Item  4", "Item  5"];
  //   Hooks: useState is a function that returns an array with two elements: the current state and a function to update it.
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>Lists of Item</h1>
      {items.length === 0 && "No item found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectIndex(index); // update the state with the index of the clicked item
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
