import { Link } from "react-router-dom";

const items = [
  { name: "blog-1", to: "/blogs/1" },
  { name: "blogs-2", to: "/blogs/2" },
  { name: "blogs-3", to: "/blogs/3" },
  { name: "blogs-4", to: "/blogs/4" },
];

const BlogsPage = () => {
  return (
    <>
      <p>this is Blog</p>
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogsPage;
