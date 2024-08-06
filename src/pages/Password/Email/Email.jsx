import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import "./Email.css";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required!");
      return;
    }

    try {
      // Send a POST request to the backend to initiate the password reset process
      const response = await axios.post(
        "http://localhost:5000/forgot-password", // Ensure the endpoint matches your backend
        { email }
      );

      if (response.status === 200) {
        toast.success("Password reset email sent!");
        navigate("/Confirm"); // Uncomment if using react-router
      } else {
        toast.error(
          response.data.error || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        error.response?.data?.error ||
          "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="container3">
        <h2>
          Esqueceu a senha? <br />
          Não tem problema. Nós te ajudamos!
        </h2>
        <form onSubmit={handleSubmit}>
          <h3>Insira o email de registro</h3>
          <div className="emailSpace">
            <p>EMAIL</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user90876@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer2 />
      <ToastContainer />
    </>
  );
};

export default Email;
