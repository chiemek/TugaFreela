import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Showcase from "../../components/Showcase/Showcase";
import showcaseImg from "../../assets/images/img19.png";
import "./ContactUs.css";
import image from "../../assets/images/img2333.jpg";

const ContactUs = () => {
  return (
    <>
      <div id="conta"></div>
      <div id="cont"></div>
      <Header />
      <Showcase
        image={
          <>
            <img
              className="showcase-img-contact"
              src={showcaseImg}
              alt="woman working"
            />
          </>
        }
        height="65vh"
      />

      <div className="contact">
        <form action="">
          <h3>
            Entre em contato <br />
            conosco!
          </h3>
          <input type="text" name="nome" placeholder="NOME" />
          <input type="text" name="email" placeholder="EMAIL" />
          <input type="tel" name="phone" placeholder="WHATSAPP" />
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            placeholder="MENSAGEM"
          ></textarea>
          <button type="submit">ENVIAR</button>
        </form>
        <img src={image} alt="" className="img-contact" />
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
