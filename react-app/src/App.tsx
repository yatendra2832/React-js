import { useEffect, useState } from "react";
import axios from "axios";
interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data[0].name);
        setUsers(response.data);
      })
      .catch((error) => {
        setError(error.message); // that is used to log the error in the console
      });
    // this method returns a promise that resolves with the response data: promise an object that holds the eventual result or the failure of an asynchronous operations
  }, []);
  return (
    <div>
      {error && <p className="text-danger fw-bold fs-1">{error}</p>}
      <ul>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
