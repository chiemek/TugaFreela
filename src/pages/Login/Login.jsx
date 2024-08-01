// import { HashLink } from "react-router-hash-link";
import LoginShowCase from "../../assets/images/loginBg.jpg";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Login.css";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="img-con">
        <img src={LoginShowCase} alt="Login" />
        <div className="overlay"></div>

        <form action="/submit" method="POST">
          <h3>Login</h3>
          <span>
            New user? <Link to="/Basic">Create a new account</Link>
          </span>
          <input type="text" name="email" placeholder="E-mail address" />
          <input type="text" name="password" placeholder="Enter password" />
          <label htmlFor="password">
            Forgot password? <Link to="/Email">Recover</Link>
          </label>

          <Link>
            <button type="submit">Next</button>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
