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

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "yatendra" };
    setUsers([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers((users) => [...users, res.data]))
      .catch((err) => {
        setError(err.message);
        setUsers(users.filter((u) => u.id !== newUser.id));
      });
  };
  return (
    <div>
      {error && <p className="text-danger fw-bold fs-3">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        <button className="btn btn-primary mb-3   w-25" onClick={addUser}>
          Add
        </button>
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between "
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                deleteUser(user);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
