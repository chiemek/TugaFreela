import Header from "../../../components/Header/Header";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import "./Basic.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Basic = () => {
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/add", {
        phoneNumber,
        email,
        dateOfBirth,
        address,
        postalCode,
        state,
        password,
        confirmPassword,
      })
      .then(() => {
        console.log("success");
        setPhone("");
        setEmail("");
        setDob("");
        setAddress("");
        setPostalCode("");
        setState("");
        setPassword("");
        setConfirm("");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    console.log("Form submitted");
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>
            Bem-vindo ao <br /> <span>TugaFreela</span>
          </h2>
          <div className="radio">
            <div className="ray">
              <input type="radio" name="client" id="client" />
              <label htmlFor="client">Cliente</label>
            </div>
            <div className="ray">
              <input type="radio" name="freelancer" id="freelancer" />
              <label htmlFor="freelancer">freelancer</label>
            </div>
          </div>
          <div className="phone">
            <input
              type="text"
              name="phone"
              id="phone"
              value={phoneNumber}
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input type="text" name="sms" id="sms" placeholder="SMS" />
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text" name="otp" id="otp" placeholder="OTP" />
          </div>

          <input
            type="date"
            name="dob"
            id="dob"
            placeholder="Data de nascimento"
            value={dateOfBirth}
            onChange={(e) => setDob(e.target.value)}
          />
          <label htmlFor="dob" className="dob">
            Data de nascimento
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Morada"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="phone">
            <input
              type="text"
              name="postal"
              id="postal"
              placeholder="Código Postal"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
              type="text"
              name="state"
              id="Cidade"
              placeholder="Cidade"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <div className="terms">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              Aceito os <Link to="/Terms"> Termos de Serviço</Link>{" "}
            </label>
          </div>

          <button type="submit"> Cadastrar</button>
        </form>
      </div>

      <Footer2 />
    </>
  );
};

export default Basic;
