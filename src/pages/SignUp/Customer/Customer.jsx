import { HashLink } from "react-router-hash-link";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import Header from "../../../components/Header/Header";
import Profile from "../../../assets/images/photoIcon.png";
import { useState } from "react";
import axios from "axios";
import "./Customer.css";

const Customer = () => {
  // State hooks for form data
  const [desc, setDesc] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const maxWords = 500;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [profile, setProfile] = useState(null); // Change to hold file data

  const handleChange = (e) => {
    const text = e.target.value;
    const words = text.split(" ");
    if (words.length <= maxWords) {
      setDesc(text);
      setWordCount(words.length);
    } else {
      const trimmedText = words.slice(0, maxWords).join(" ");
      setDesc(trimmedText);
      setWordCount(maxWords);
    }
  };

  const handleFileChange = (e) => {
    setProfile(e.target.files[0]); // Store the selected file
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mghfoiqj"); // Replace with your actual upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dsd2dgasn/image/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let fileUrl = "";

      if (profile) {
        fileUrl = await uploadToCloudinary(profile);
      }

      const formData = {
        firstName,
        lastName,
        id,
        title,
        rate,
        description: desc,
        fileUrl, // Include the Cloudinary file URL
      };

      await axios.post("http://localhost:5000/upload", formData);

      // Reset form fields
      setDesc("");
      setWordCount(0);
      setFirstName("");
      setLastName("");
      setId("");
      setTitle("");
      setRate("");
      setProfile(null); // Clear the file input

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="container2">
        <form onSubmit={handleSubmit}>
          <HashLink to="/">
            <p id="skip"> Skip</p>
          </HashLink>
          <h2>
            Bem-vindo ao <br /> <span>TugaFreela</span>
          </h2>

          <div className="name">
            <input
              type="text"
              name="firstName"
              id="Nome"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              id="Apelido"
              placeholder="Apelido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="file"
            name="File"
            id="profile"
            onChange={handleFileChange}
          />
          <label htmlFor="profile" className="file">
            <img src={Profile} alt="" />
            <button
              type="button"
              onClick={() => document.getElementById("profile").click()}
            >
              Add Photo
            </button>
          </label>

          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título Profissional"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            name="description"
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
          <input
            type="text"
            name="rate"
            id="rate"
            placeholder="Taxa/hora"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />

          <button type="submit"> Cadastrar</button>
        </form>
      </div>

      <Footer2 />
    </>
  );
};

export default Customer;
