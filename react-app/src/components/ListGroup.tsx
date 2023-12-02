// import { Fragment } from "react"; <fragment></fragment> we can also use that ype fragment or another way is using the <></> empty angular bracket

function ListGroup() {
  let items = ["Item  1", "Item  2", "Item  3", "Item  4", "Item  5"];
  items = [];

  return (
    <>
      <h1>Lists of Item</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && "No item found"}
      <ul className="list-group">
        {/* <li className="list-group-item">Book</li>
        <li className="list-group-item">Pen</li>
        <li className="list-group-item">Pencil</li>
        <li className="list-group-item">Rubber</li>
        <li className="list-group-item"> Shrapner</li> */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
