import usePosts from "../hooks/usePost";

const PostList = () => {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul className="list-group bg-primary">
      {data?.map((posts) => (
        <li key={posts.id} className="list-group-item text-primary">
          {posts.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
