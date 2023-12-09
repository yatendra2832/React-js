import { useState } from "react";
import ExpenseList from "./expense-tracker/component/ExpenseList";
import ExpenseFilter from "./expense-tracker/component/ExpenseFilter";
import ExpenseForm from "./expense-tracker/component/ExpenseForm";
import categories from "./expense-tracker/categories";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Food", amount: 100, category: "Food" },
    { id: 2, description: "Groceries ", amount: 10, category: "Groceries" },
    { id: 3, description: "Food", amount: 180, category: "Food" },
    { id: 4, description: "Groceries ", amount: 100, category: "Groceries" },
    {
      id: 5,
      description: "Entertaniment",
      amount: 100,
      category: "Entertainment",
    },
    { id: 6, description: "utilities", amount: 100, category: "Utilities" },
    { id: 7, description: "utilities", amount: 100, category: "Utilities" },
    { id: 8, description: "Groceries ", amount: 100, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
