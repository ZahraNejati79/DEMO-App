import { NavLink, withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";

const itams = [
  { name: "Home", to: "/", exact: true },
  { name: "About-Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
];

const Navigation = ({ location }) => {
  return (
    <nav>
      <ul className={styles.ulList}>
        {itams.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
