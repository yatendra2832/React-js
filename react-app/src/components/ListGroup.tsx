// import { Fragment } from "react"; <fragment></fragment> we can also use that ype fragment or another way is using the <></> empty angular bracket

function ListGroup() {
  return (
    <>
      <h1>Lists of Item</h1>
      <ul className="list-group">
        <li className="list-group-item">Book</li>
        <li className="list-group-item">Pen</li>
        <li className="list-group-item">Pencil</li>
        <li className="list-group-item">Rubber</li>
        <li className="list-group-item"> Shrapner</li>
      </ul>
    </>
  );
}

export default ListGroup;
