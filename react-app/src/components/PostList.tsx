import { useState } from "react";
import usePosts from "../hooks/usePost";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <ul className="list-group bg-primary">
        {data?.map((posts) => (
          <li key={posts.id} className="list-group-item text-primary">
            {posts.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-3"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
