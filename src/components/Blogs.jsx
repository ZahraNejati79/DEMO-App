import { Link } from "react-router-dom";
const Blogs = (props) => {
  console.log(props);
  const id = props.match.params.id || 1;
  // console.log(props.match.params.id);
  return (
    <>
      <Link to={`/blogs/${parseInt(id) + 1}`}>
        رفتن به ولاگ {parseInt(id) + 1}
      </Link>
      <br />
    </>
  );
};

export default Blogs;
