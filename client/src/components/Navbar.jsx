import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Task Manager</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <ButtonLink to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-md">Add Task</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login" className="bg-indigo-500 px-4 py-1 rounded-md">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register" className="bg-indigo-500 px-4 py-1 rounded-md">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}