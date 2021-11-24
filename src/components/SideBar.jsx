import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/profile/download">download</Link>
        </li>
        <li>
          <Link to="/profile/upload">upload</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
