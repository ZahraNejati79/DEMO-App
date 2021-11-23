const PostPage = (props) => {
  const id = props.match.params.id || 1;
  return (
    <>
      <p>PostPage -{id}</p>
      <h2>{JSON.stringify(props.match.params.id)}</h2>
    </>
  );
};

export default PostPage;
