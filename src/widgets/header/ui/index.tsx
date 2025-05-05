import { Link } from "react-router";

import { NAV_ROUTES } from "../config/nav-routes";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          {NAV_ROUTES.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
