import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        color="success"
        onclick={() => console.log("Submitted Successfully")}
      >
        Submit Now
      </Button>
    </div>
  );
}

export default App;
