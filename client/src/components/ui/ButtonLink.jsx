import { Link } from "react-router-dom";

export function ButtonLink({ to, children, className = "", ...props }) {

  return (
    <Link
      className={`${className}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}