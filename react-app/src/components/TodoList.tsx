import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const TodoList = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <ul className="list-group">
      {data?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
/* This code is a React component that uses the @tanstack/react-query library for data fetching and state management. It fetches a list of todos from the JSONPlaceholder API (a fake online REST API for testing and prototyping) using the axios library.

Here's a breakdown of the code:

Imports:
useQuery is imported from @tanstack/react-query. It is a hook used for data fetching with React Query.
axios is imported for making HTTP requests.
React hooks (useEffect, useState) are imported from "react".

Interface:
The Todo interface defines the structure of a todo item with id, title, and completed properties.
TodoList Component:

fetchTodos is a function that makes an HTTP GET request to the JSONPlaceholder API to fetch a list of todos.

The useQuery hook is used to perform the data fetching. It takes an object with queryKey and queryFn properties.

queryKey is an array used as a unique identifier for the query. In this case, it's ["todos"].
queryFn is the function that actually performs the data fetching. It's set to fetchTodos.
The component renders an unordered list (ul) with a list group class.

It maps over the data received from the query and renders a list item (li) for each todo, displaying the title of the todo.

Usage:

The component can be used in a parent component, and it will fetch todos from the specified API endpoint and display them in a list.
This code assumes that you have a development environment set up with React, TypeScript, and the necessary dependencies installed. When this component is rendered, it will fetch todos from the JSONPlaceholder API and display them in a list.
*/
