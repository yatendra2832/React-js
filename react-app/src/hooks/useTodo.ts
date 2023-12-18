import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import todoService, { Todo } from "../services/todoService";

const apiClient = new APIClient<Todo>("/todos");

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};
export default useTodos;
