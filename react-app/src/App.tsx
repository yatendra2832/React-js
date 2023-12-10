import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios"; //axios from "axios";
interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // get -> promise -> res / err
    const fetchUsers = async () => {
      try {
        const res = await axios.get<Users[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
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
