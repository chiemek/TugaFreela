import Header from "../../../components/Header/Header";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import "./Basic.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Basic = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confim, setConfirm] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <form action="/submit" method="POST">
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
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input type="text" name="sms" id="sms" placeholder="SMS" />
          </div>
          <div className="email">
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="text" name="otp" id="otp" placeholder="OTP" />
          </div>

          <input
            type="date"
            name="dob"
            id="dob"
            placeholder="Data de nascimento"
          />
          <label htmlFor="dob" className="dob">
            Data de nascimento
          </label>
          <input type="text" name="address" id="address" placeholder="Morada" />
          <div className="phone">
            <input
              type="text"
              name="postal"
              id="postal"
              placeholder="Código Postal"
            />
            <input type="text" name="state" id="Cidade" placeholder="Cidade" />
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirme a senha"
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
