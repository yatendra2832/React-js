import { useState } from "react";

// import { Fragment } from "react"; <fragment></fragment> we can also use that ype fragment or another way is using the <></> empty angular bracket

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
              setSelectIndex(index);
              onSelectItem(item);
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
