import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Item  1", "Item  2", "Item  3", "Item  4", "Item  5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Items"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
