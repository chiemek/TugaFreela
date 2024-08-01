import { HashLink } from "react-router-hash-link";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import Header from "../../../components/Header/Header";
import Profile from "../../../assets/images/photoIcon.png";
import { useState } from "react";
import "./Customer.css";

const Customer = () => {
  const [desc, setDesc] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const maxWords = 500;

  const handleChange = (e) => {
    const text = e.target.value;
    const words = text;
    if (words.length <= maxWords) {
      setDesc(text);
      setWordCount(words.length);
    } else {
      const trimmedText = words.slice(0, maxWords).join(" ");
      setDesc(trimmedText);
      setWordCount(maxWords);
    }
  };

  return (
    <>
      <Header />
      <div className="container2">
        <form action="/submit" method="POST">
          <HashLink to="/">
            <p id="skip"> Skip</p>
          </HashLink>
          <h2>
            Bem-vindo ao <br /> <span>TugaFreela</span>
          </h2>

          <div className="name">
            <input type="text" name="Nome" id="Nome" placeholder="Nome" />
            <input
              type="text"
              name="Apelido"
              id="Apelido"
              placeholder="Apelido"
            />
          </div>
          <input type="text" name="id" id="id" placeholder="ID" />
          <input
            type="file"
            name="profile"
            id="profile"
            style={{ display: "none" }}
          />
          <label htmlFor="profile" className="file">
            <img src={Profile} alt="" />
            <button>Add Photo</button>
          </label>

          <input
            type="text"
            name="tittle"
            id="title"
            placeholder="Título Profissional"
          />

          <textarea
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
            rows="4"
            cols="50"
            placeholder="Descrição"
          >
            Descrição
          </textarea>
          <div className="counter">
            {wordCount}/{maxWords} words
          </div>
          <input type="text" name="rate" id="rate" placeholder="Taxa/hora" />

          <HashLink to="/Dashboard">
            <button type="submit"> Cadastrar</button>
          </HashLink>
        </form>
      </div>

      <Footer2 />
    </>
  );
};

export default Customer;
