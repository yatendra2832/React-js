import { useEffect, useState } from "react";
import apiclient, { CanceledError } from "./services/api-client";
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
    apiclient
      .get("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
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
    apiclient.delete(`/users/${user.id}`).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "yatendra" };
    setUsers([...users, newUser]);

    apiclient
      .post("/users", newUser)
      .then((res) => setUsers((users) => [...users, res.data]))
      .catch((err) => {
        setError(err.message);
        setUsers(users.filter((u) => u.id !== newUser.id));
      });
  };

  const updateUser = (user: Users) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "@gmail.com" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    apiclient.put("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <div>
      {error && <p className="text-danger fw-bold fs-3">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        <button className="btn btn-primary mb-3 w-25" onClick={addUser}>
          Add
        </button>
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between "
          >
            {user.name}
            <div>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => {
                  updateUser(user);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger mx-2"
                onClick={() => {
                  deleteUser(user);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
