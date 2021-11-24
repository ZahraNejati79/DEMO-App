import { Link } from "react-router-dom";
import queryString from "query-string";
const Blogs = ({ location, match }) => {
  const id = match.params.id || 1;
  const query = queryString.parse(location.search);
  console.log(query);
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
