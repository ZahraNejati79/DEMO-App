import { Link } from "react-router-dom";
const Blogs = (props) => {
  const id = props.match.params.id;
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
