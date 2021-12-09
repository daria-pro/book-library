import * as React from "react";

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams
} from "react-router-dom";
import { getAuthors } from "../data";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Authors() {
  let authors = getAuthors();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
        {authors
          .filter((author) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = author.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((author) => (
            <QueryNavLink
              key={author.number}
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to={`/authors/${author.number}`}
            >
              {author.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
