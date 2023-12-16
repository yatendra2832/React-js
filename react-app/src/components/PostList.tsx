import { useState } from "react";
import usePosts from "../hooks/usePost";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group bg-primary">
        {data?.map((posts) => (
          <li key={posts.id} className="list-group-item text-primary">
            {posts.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
