import { HashLink } from "react-router-hash-link";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import Header from "../../../components/Header/Header";
import "./Email.css";

const Email = () => {
  return (
    <>
      <Header />
      <div className="container3">
        <h2>
          Esqueceu a senha? <br />
          Não tem problema. Nós te ajudamos!
        </h2>
        <form action="/submit" method="POST">
          <h3>Insira o email de registro</h3>

          <div className="emailSpace">
            <p>EMAIL</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user90876@gmail.com"
            />
          </div>
          <HashLink to="/Confirm">
            <button type="submit">Enviar</button>
          </HashLink>
        </form>
      </div>

      <Footer2 />
    </>
  );
};

export default Email;
