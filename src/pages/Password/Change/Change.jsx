import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/Header/Header";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import "./Change.css";

const Change = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Both password fields are required!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/reset-password/${token}`,
        { newPassword, confirmPassword } // Ensure both fields are sent
      );

      if (response.status === 200) {
        toast.success("Password successfully updated!");
        navigate("/thank-you");
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
      <div className="container5">
        <h2>Crie sua nova senha!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            name="newPassword"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer2 />
      <ToastContainer />
    </>
  );
};

export default Change;
