import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Showcase from "../../components/Showcase/Showcase";
import showcaseImg from "../../assets/images/img19.png";
import "./ContactUs.css";
import image from "../../assets/images/img2333.jpg";
import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/contact", { name, email, number, message })
      .then(() => {
        console.log("Message sent");
        setEmail("");
        setName("");
        setNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

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
      />

      <div className="contact">
        <form onSubmit={handleSubmit}>
          <h3>
            Entre em contato <br />
            conosco!
          </h3>
          <input
            type="text"
            name="name"
            placeholder="NOME"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            name="email"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="tel"
            name="number"
            placeholder="WHATSAPP"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            placeholder="MENSAGEM"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
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
