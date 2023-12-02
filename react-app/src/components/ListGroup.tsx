// import { Fragment } from "react"; <fragment></fragment> we can also use that ype fragment or another way is using the <></> empty angular bracket

function ListGroup() {
  const items = ["Item  1", "Item  2", "Item  3", "Item  4", "Item  5"];
  return (
    <>
      <h1>Lists of Item</h1>
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
