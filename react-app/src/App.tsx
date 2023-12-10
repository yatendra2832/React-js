import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios"; //axios from "axios";
interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {error && <p className="text-danger fw-bold fs-1">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
