import { Link } from "react-router-dom";
import "./Footer2.css";
import { HashLink } from "react-router-hash-link";
import { useModal } from "../../../../public/ModalContext";

const Footer2 = () => {
  const { openModal } = useModal();

  return (
    <div className="footer">
      <span> @2020-2024 TugaFreela. Todos os direitos reservados. </span>
      <HashLink to="/Terms">Termos de uso </HashLink>
      <Link to="/Privacy" onClick={openModal}>
        | Política de Privacidade
      </Link>
    </div>
  );
};

export default Footer2;
