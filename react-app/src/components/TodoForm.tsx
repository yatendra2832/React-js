import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "../hooks/useTodo";
import axios from "axios";

interface AddTodoContext {
  previousTodos: Todo[];
}
const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => {
        return [newTodo, ...(todos || [])];
      });

      if (ref.current) ref.current.value = "";

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (err, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              userId: 1,
              title: ref.current?.value,
              completed: false,
            });
        }}
      >
        <div className="col">
          <input type="text" ref={ref} className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "adding..." : "add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;

/* let's break down the code and understand how it works:

useMutation and useQueryClient from @tanstack/react-query for handling mutations and managing the query cache.
useRef from React for creating a reference to the input field.
Todo from "../hooks/useTodo" is presumably a custom type for representing a Todo item.
axios is used for making HTTP requests.
Interface:

interface AddTodoContext {
  previousTodos: Todo[];
}
The AddTodoContext interface defines the context object that will be passed to the onMutate and onError callbacks.

TodoForm Component:

const TodoForm = () => {
The TodoForm component is a functional React component.

Initialization:

const queryClient = useQueryClient();
The useQueryClient hook is used to get the query client, which manages the state of queries and caches.

useMutation Hook:

const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
  //...
});
The useMutation hook is used to define a mutation for adding a new todo item. It takes several parameters:

mutationFn: A function that performs the actual mutation (in this case, making a POST request to add a new todo).
onMutate: A function that gets executed optimistically before the mutation. It updates the local state (query cache) to reflect the expected changes.
onSuccess: A function that gets executed if the mutation is successful. It updates the local state based on the result of the mutation.
onError: A function that gets executed if the mutation encounters an error. It can be used to roll back the local state to its previous state.
Ref for Input:

const ref = useRef<HTMLInputElement>(null);
useRef is used to create a reference (ref) to the input field.

Render JSX:

return (
  <>
    {addTodo.error && (
      <div className="alert alert-danger">{addTodo.error.message}</div>
    )}
    <form
      className="row mb-3"
      onSubmit={(event) => {
        //...
      }}
    >

      </form>
      </>
    );
    The component returns JSX containing:
    
    An error message if there is an error in the addTodo mutation.
    A form with an input field and a button for adding a new todo.
    Form Submission:
    
   
    onSubmit={(event) => {
      event.preventDefault();
      if (ref.current && ref.current.value)
        addTodo.mutate({
          id: 0,
          userId: 1,
          title: ref.current?.value,
          completed: false,
        });
    }}
    The form has an onSubmit handler that prevents the default form submission, and it triggers the addTodo mutation with the new todo data.
    
    Button Rendering:
    
    javascript
    Copy code
    <button className="btn btn-primary" disabled={addTodo.isLoading}>
      {addTodo.isLoading ? "adding..." : "add"}
    </button>
    The button is rendered with dynamic text based on whether the mutation is in progress (addTodo.isLoading).
    
    Export:
    
    javascript
    Copy code
    export default TodoForm;
    The TodoForm component is exported as the default export of the module.
    
    In summary, this code defines a React component (TodoForm) that utilizes the React Query library to handle the mutation of adding a new todo item. It includes optimistic updates to the local state, error handling, and UI feedback for the user. The actual mutation is performed using Axios to make a POST request to a hypothetical API endpoint
    
*/
