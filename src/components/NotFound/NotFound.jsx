import "./NotFound.css";
import { HashLink } from "react-router-hash-link";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <HashLink to="/">Go to Home</HashLink>
    </div>
  );
};

export default NotFound;
