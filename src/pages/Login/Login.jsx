import { useState } from "react";
import axios from "axios";
import LoginShowCase from "../../assets/images/loginBg.jpg";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom"; // useNavigate instead of useHistory
import "./Login.css";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // navigate instead of history.push
    } catch (err) {
      console.error(err);
      // Optionally handle errors with user feedback
    }
  };

  return (
    <>
      <Header />
      <div className="img-con">
        <img src={LoginShowCase} alt="Login" />
        <div className="overlay"></div>

        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <span>
            New user? <Link to="/Basic">Create a new account</Link>
          </span>
          <input
            type="email" // Updated type
            name="email"
            placeholder="E-mail address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password" // Updated type
            name="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <label htmlFor="password">
            Forgot password? <Link to="/Email">Recover</Link>
          </label>
          <button type="submit">Login</button> {/* Removed unnecessary Link */}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
