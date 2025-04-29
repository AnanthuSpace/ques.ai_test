import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BREADCRUMB_NAMES } from "../util/breadcrumbs";
import { Home } from "lucide-react";

const Breadcrumbs = ({ projectName }) => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const paths = segments.map((_, idx) =>
    "/" + segments.slice(0, idx + 1).join("/")
  );

  return (
    <nav className="flex items-center text-sm text-gray-600 space-x-2">
      <Link to="/" className="flex items-center hover:underline">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>

      {projectName && (
        <>
          <span>/</span>
          <span className="font-medium">{projectName}</span>
        </>
      )}

      {paths.map((path, i) => {
        const key = segments[i];
        const label =
          BREADCRUMB_NAMES[key] ||
          key.charAt(0).toUpperCase() + key.slice(1);
        const isLast = i === paths.length - 1;

        return (
          <React.Fragment key={path}>
            <span>/</span>
            {isLast ? (
              <span className="font-medium main-text">{label}</span>
            ) : (
              <Link to={path} className="hover:underline">
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
