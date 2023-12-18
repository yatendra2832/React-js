import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Todo>("/todos");
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};
export default useTodos;
