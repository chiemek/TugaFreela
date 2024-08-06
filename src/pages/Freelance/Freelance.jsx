import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Showcase from "../../components/Showcase/Showcase";
import "./Freelance.css";
import showcaseImg from "../../assets/images/img19.png";
import Button from "../../components/Button/Button";
import First from "../../assets/images/img31.png";
import Second from "../../assets/images/img43.png";
import Third from "../../assets/images/img39.png";
import Fourth from "../../assets/images/img11.png";
import Fifth from "../../assets/images/img23.png";
import Firstline from "../../assets/icons/line4.png";
import Secondline from "../../assets/icons/line2.png";
import ProfilePics from "../../assets/images/img1375.jpg";
import Img1 from "../../assets/icons/lateIcon1.png";
import Img2 from "../../assets/icons/lateIcon2.png";
import Img3 from "../../assets/icons/lateIcon3.png";
import Img4 from "../../assets/icons/lateIcon4.png";
import Img5 from "../../assets/icons/lateIcon5.png";
import Img6 from "../../assets/icons/lateIcon6.png";
import SmallLineUp from "../../assets/icons/lineUp.png";
import SmallLineDown from "../../assets/icons/lineDown.png";

import { Link } from "react-router-dom";

const Freelance = () => {
  const review = [
    {
      name: "Eduardo Lopes",
      image: ProfilePics,
      title: "Realtech Produções",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      name: "Eduardo Lopes",
      image: ProfilePics,
      title: "Realtech Produções",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      name: "Eduardo Lopes",
      image: ProfilePics,
      title: "Realtech Produções",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      name: "Eduardo Lopes",
      image: ProfilePics,
      title: "Realtech Produções",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
  ];

  return (
    <>
      <div id="free"></div>
      <Header />
      <Showcase
        className="shoecase"
        image={
          <img className="showcase-img" src={showcaseImg} alt="woman working" />
        }
        text={
          <>
            <p>
              NÃO PERCA TEMPO!!! <br />
            </p>
            <h3>
              Contrate freelancers <br />
              especializados para qualquer <br />
              trabalho online.
            </h3>
          </>
        }
        button={
          <div className="button">
            <Link to="/ContactUs">
              <Button bgColor="rgb(177, 137, 239)">QUERO CONTRATAR</Button>
            </Link>

            <Link to="/FreelancerLogin">
              <Button bgColor="#333">TRABALHE COMO FREELA</Button>
            </Link>
          </div>
        }
      />

      <div id="how-it-works">
        <h2>
          Saiba como funciona <br />
          nossoprocesso.
        </h2>

        <section>
          <div className="left">
            <img src={First} alt="" className="group" />

            <div className="text">
              <h3>Publique o projeto</h3>
              <p>
                Conte-nos em poucas palavras o que você <br />
                precisa. É grátis e sem compromisso!
              </p>
            </div>
          </div>
          <img src={Firstline} alt="" className="line" />
          <div className="right">
            <div className="text">
              <h3>Selecione o profissional</h3>
              <p>
                Receba propostas de excelentes freelancers. <br /> Escolha o
                melhor para o seu projeto.
              </p>
            </div>
            <img src={Second} alt="" className="group" />
          </div>
          <img src={Secondline} alt="" className="line" />
          <div className="left">
            <img src={Third} alt="" className="group" />

            <div className="text">
              <h3>Faça o pagamento</h3>
              <p>
                Você faz o pagamento com total garantia sobre <br /> o valor
                depositado e já começa a trabalhar :)
              </p>
            </div>
          </div>
          <img src={Firstline} alt="" className="line" />
          <div className="right">
            <div className="text">
              <h3>Aceite e Finalize</h3>
              <p>
                Receba o projeto concluído e libere o valor <br /> depositado ao
                freelancer.
              </p>
            </div>
            <img src={Fourth} alt="" className="group" />
          </div>
          <div className="button">
            <Link to="/Basic">
              <Button bgColor="rgb(177, 137, 239)" borderRadius="2rem">
                PUBLIQUE UM PROJETO
              </Button>
            </Link>
            <Link to="/FreelancerLogin">
              <Button bgColor="#333" borderRadius="2rem">
                TRABALHE COMO FREELA
              </Button>
            </Link>
          </div>

          <div className="right-now">
            <div className="text-now">
              <h3>
                <span>Torne-se um profissional digital.</span>
                Torne-se um freelancer.
              </h3>
              <p>
                Você pode melhorar a sua presença na web, vender online, vender
                nas redes sociais, criar conteúdos que mantenham seus clientes
                interessados na sua marca e muito mais!
              </p>
              <Link to="/Basic">
                <Button bgColor="rgb(177, 137, 239)">
                  COMEÇE SUA JORNADA!
                </Button>
              </Link>
            </div>
            <img src={Fifth} alt="" className="group-now" />
          </div>
        </section>

        <div className="reviews">
          <h5>
            Milhares de pessoas acreditam <br /> em nossos{" "}
            <span>FREELANCES</span>
          </h5>
          <div className="card-container">
            {review.map((item, i) => (
              <Card
                key={i}
                image={item.image}
                desc={item.desc}
                name={item.name}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className="last">
          <h3>
            Não deixe para amanhã, o que pode fazer HOJE! <br />
            <span>Coloque suas ideias em prática</span>
          </h3>
          <div className="set">
            <div className="one">
              <img src={Img1} alt="" className="lastOne" />
              <p>Renove seu site</p>
            </div>
            <img src={SmallLineDown} alt="" className="liner" />
            <div className="one">
              <img src={Img2} alt="" className="lastOne" />
              <p>Lance seu App </p>
            </div>
            <img src={SmallLineUp} alt="" className="liner" />
            <div className="one">
              <img src={Img3} alt="" className="lastOne" />
              <p>Crie sua Id.Visual</p>
            </div>
          </div>
          <div className="set">
            <div className="one">
              <img src={Img4} alt="" className="lastOne" />
              <p>Tradutores &Escritores </p>
            </div>
            <img src={SmallLineDown} alt="" className="liner" />
            <div className="one">
              <img src={Img5} alt="" className="lastOne" />
              <p>Marketing &Vendas</p>
            </div>
            <img src={SmallLineUp} alt="" className="liner" />
            <div className="one">
              <img src={Img6} alt="" className="lastOne" />
              <p>E muito mais...</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const Card = ({ image, desc, name, title }) => {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <p>{desc}</p>
      <h3>
        {name} - {title}
      </h3>
    </div>
  );
};

export default Freelance;
