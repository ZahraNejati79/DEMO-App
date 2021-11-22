import { Link, NavLink, withRouter } from "react-router-dom";
const itams = [
  { name: "Home", to: "/", exact: true },
  { name: "About-Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
];

const Navigation = ({ location }) => {
  return (
    <nav>
      <ul>
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
