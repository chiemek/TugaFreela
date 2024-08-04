import { useState } from "react";
import axios from "axios";
import LoginShowCase from "../../assets/images/loginBg.jpg";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL; // Access environment variable
      if (!apiUrl) {
        throw new Error("API URL is not defined");
      }

      // Make the API call to login
      const res = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      // Save JWT token to localStorage
      localStorage.setItem("token", res.data.token);

      // Display success message
      toast.success("Login successful!");

      // Navigate to the dashboard or desired route
      navigate("/dashboard");
    } catch (err) {
      // Display error message
      toast.error(
        err.response?.data?.error || "An error occurred. Please try again."
      );
      console.error(err);
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
            type="email"
            name="email"
            placeholder="E-mail address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <label htmlFor="password">
            Forgot password? <Link to="/Email">Recover</Link>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
      <ToastContainer /> {/* Add ToastContainer to the component */}
    </>
  );
};

export default Login;
