import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Showcase from "../../assets/images/img1431.jpg";
import Showcase2 from "../../assets/images/img1379.jpg";
import Showcase20 from "../../assets/images/img1411.jpg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "./Home.css";
import Icon1 from "../../assets/icons/icon2.png";
import Icon2 from "../../assets/icons/icon3.png";
import Icon3 from "../../assets/icons/icon4.png";
import Icon4 from "../../assets/icons/icon1.png";
import Icon5 from "../../assets/icons/icon5.png";
import Icon6 from "../../assets/icons/icon6.png";
import Icon7 from "../../assets/icons/icon7.png";
import Quote from "../../assets/icons/quote.png";
import ProfilePics from "../../assets/images/img1375.jpg";
import img1 from "../../assets/images/img1407.jpg";
import img2 from "../../assets/images/img1427.jpg";
import img3 from "../../assets/images/img1423.jpg";
import img4 from "../../assets/images/img1403.jpg";
import img5 from "../../assets/images/img1411.jpg";
import img6 from "../../assets/images/img1395.jpg";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const cards = [
    {
      image: img1,
      desc: "Renove seu site",
    },
    {
      image: img2,
      desc: "Lance seu App Mobile",
    },
    {
      image: img3,
      desc: "Crie sua Id. Visual",
    },
    {
      image: img4,
      desc: "Tradutores/Escritores",
    },
    {
      image: img5,
      desc: "Marketing e Vendas ",
    },
    {
      image: img6,
      desc: "E muito mais!",
    },
  ];

  return (
    <>
      <div id="here"></div>
      <Header />
      <main>
        <div className="text">
          <h2>
            <span>Contrate freelancers</span> <br />
            especializados para <br />
            qualquer{" "}
            <span>
              trabalho, <br />
              online.
            </span>
          </h2>
          <div className="main-button">
            <Link to="/ContactUs">
              <Button
                bgColor="rgba(214, 184, 255, 1)"
                size="bold"
                margin="0 1rem 0 0"
                height="3.5rem"
              >
                QUERO CONTRATAR
              </Button>
            </Link>
            <Link to="/Freelance">
              <Button bgColor="rgba(54, 54, 54, 1)" size="bold" height="3.5rem">
                TRABALHE COMO FREELA
              </Button>
            </Link>
          </div>
        </div>
        <img src={Showcase} alt="image of a lady working" />
      </main>
      <div className="how-it-works">
        <h2 id="How-it-works">Como funciona?</h2>

        <div className="container">
          <div className="icon-container">
            <img src={Icon1} alt="" />
            <h3>Publique o projeto</h3>
            <p>
              Conte-nos em poucas <br />
              palavras o que você precisa. <br />É grátis e sem compromisso!
            </p>
          </div>
          <div className="icon-container">
            <img src={Icon2} alt="" />
            <h3>Selecione o Profissional</h3>
            <p>
              Receba propostas de <br />
              excelentes freelancers. <br />
              Escolha o melhor para o <br />
              seu projeto.
            </p>
          </div>
          <div className="icon-container">
            <img src={Icon3} alt="" />
            <h3>Faça o pagamento</h3>
            <p>
              Você faz o pagamento com <br />
              total garantia sobre o valor <br />
              depositado e já começa a <br />
              trabalhar :)
            </p>
          </div>
          <div className="icon-container">
            <img src={Icon4} alt="" />
            <h3>Aceitar</h3>
            <p>
              Receba o projeto concluído e <br />
              libere o valor depositado ao <br />
              freelancer.
            </p>
          </div>
        </div>

        <div className="button">
          <Link to="/ContactUs">
            <Button bgColor="rgba(214, 184, 255, 1)">
              PUBLIQUE UM PROJETO
            </Button>
          </Link>

          <Link to="/Freelance">
            <Button bgColor="rgba(54, 54, 54, 1)">TRABALHE COMO FREELA</Button>
          </Link>
        </div>
      </div>
      <div className="become-a-freelancer">
        <div className="showcase-cont">
          <div className="text">
            <h2>
              <span>
                Torne-se um profissional <br /> digital.
              </span>
              Torne-se um freelancer.
            </h2>
            <p>
              Você pode melhorar a sua presença na web, vender online, vender
              nas redes sociais, criar conteúdos que mantenham seus clientes
              interessados na sua marca e muito mais!
            </p>
            <HashLink to="/ContactUs#conta">
              <div className="btn-con">
                <Button bgColor="rgba(214, 184, 255, 1)">
                  COMEÇE SUA JORNADA!
                </Button>
              </div>
            </HashLink>
          </div>
          <img src={Showcase2} alt="image of a lady working" />
        </div>
      </div>
      <div className="results">
        <h2>Acompanhe nossos resultados!</h2>

        <div className="container">
          <div className="icon-container">
            <img src={Icon5} alt="" />
            <h3>2.200</h3>
            <p>Freelancers</p>
          </div>
          <div className="icon-container">
            <img src={Icon6} alt="" />
            <h3>2.200</h3>
            <p>Projeto Mensal</p>
          </div>
          <div className="icon-container">
            <img src={Icon7} alt="" />
            <h3>2.200</h3>
            <p>Usuários Online</p>
          </div>
        </div>

        <div className="button">
          <HashLink to="/ContactUs#conta">
            <Button bgColor="rgba(214, 184, 255, 1)">
              PUBLIQUE UM PROJETO
            </Button>
          </HashLink>

          <Link to="/Freelance">
            <Button bgColor="rgba(54, 54, 54, 1)">TRABALHE COMO FREELA</Button>
          </Link>
        </div>
      </div>

      <div className="testimony">
        <h2>
          Milhares de pessoas acreditam <br />
          emnossos <span>FREELANCES</span>
        </h2>
        <Testimony />
      </div>

      <div className="what-we-do">
        <h3>
          Não deixe para amanhã, o que pode fazer <strong>HOJE!</strong> <br />
          <span>Coloque suas ideias em prática</span>
        </h3>
        <div className="card-container">
          {cards.map((card, i) => (
            <Card key={i} image={card.image} desc={card.desc} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const Testimony = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  const testimony = [
    {
      id: 1,
      name: "Eduardo Lopes",
      image: ProfilePics,
      title: "Realtech Produções",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 2,
      name: "Eduardo Peace",
      image: ProfilePics,
      title: "Realtech Produções",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIps`,
    },
  ];

  const handleDotClick = (index) => {
    setCurrentTestimony(index);
  };

  return (
    <div className="testimony-container">
      <img src={Quote} alt="quotation" className="quote" />
      <div className="det">
        <div className="testmony-details">
          <img
            src={testimony[currentTestimony].image}
            alt={testimony[currentTestimony].name}
          />
          <div className="text">
            <p>{testimony[currentTestimony].desc}</p>
            <h3>
              {testimony[currentTestimony].name} -{" "}
              {testimony[currentTestimony].title}
            </h3>
          </div>
        </div>
      </div>

      <div className="dots" style={{ cursor: "pointer" }}>
        {testimony.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentTestimony ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ image, desc }) => {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <p>{desc}</p>
    </div>
  );
};

export default Home;
