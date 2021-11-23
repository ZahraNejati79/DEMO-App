import { Link } from "react-router-dom";
const Blogs = (props) => {
  console.log(props.match.params.id);
  return (
    <>
      <Link to="/blogs">رفتن به ولاگ</Link>
      <p>this is blog</p>
    </>
  );
};

export default Blogs;
