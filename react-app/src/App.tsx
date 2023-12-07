import { useState } from "react";
import ExpenseList from "./expense-tracker/component/ExpenseList";

// here we are passing the expenses  array where as later we will setting the data by collecting the data from the form and sending it to the server
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Food", amount: 100, category: "Food" },
    { id: 2, description: "Food", amount: 10, category: "Food" },
    { id: 3, description: "Food", amount: 180, category: "Food" },
    { id: 4, description: "Food", amount: 100, category: "Food" },
  ]);
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

//now when we are clicking on the delete button the following function will be called and the id will be passed as a parameter and the expenses will be filtered
export default App;
