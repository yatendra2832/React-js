import { useEffect, useState } from "react";
import axios from "axios";
interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data[0].name);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // this method returns a promise that resolves with the response data: promise an object that holds the eventual result or the failure of an asynchronous operations
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
