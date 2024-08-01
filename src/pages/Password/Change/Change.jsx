import { HashLink } from "react-router-hash-link";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import Header from "../../../components/Header/Header";
import "./Change.css";

const Change = () => {
  return (
    <>
      <Header />
      <div className="container5">
        <h2>Crie sua nova senha !</h2>
        <form action="/submit" method="POST">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="****"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
          />
          <HashLink to="/Login">
            <button type="submit">Enviar</button>
          </HashLink>
        </form>
      </div>
      <Footer2 />
    </>
  );
};

export default Change;
