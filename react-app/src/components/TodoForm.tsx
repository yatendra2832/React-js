import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "../hooks/useTodo";
import axios from "axios";
const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // Approach:invalidating the cache
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });

    // Approach 2:upating the data in the cache
    queryClient.setQueryData<Todo[]>(["todos"], (todos) => {
        return [savedTodo, ...(todos || [])];
    });
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
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
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
