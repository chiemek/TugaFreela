import { useRef, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../../assets/images/photoIcon.png";
import { toast } from "react-toastify";
import "./CombinedForm.css";

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex =
  /^\+?\d{1,3}[-.\s]?(\(?\d{1,5}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

const CombinedForm = () => {
  const [formState, setFormState] = useState({
    role: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    address: "",
    postalCode: "",
    state: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    id: "",
    title: "",
    description: "",
    rate: "",
    nif: "",
    citizenCard: "",
    categories: ["", ""],
  });
  const [showForm, setShowForm] = useState("basic");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [imagePreview, setImagePreview] = useState(Profile);
  const fileInputRef = useRef(null);
  const maxWords = 500;
  const navigate = useNavigate();

  // Change form input type
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Change role
  const handleRoleChange = (e) => {
    const role = e.target.value;
    setFormState((prevState) => ({
      ...prevState,
      role: role,
    }));
  };

  // Trim description field
  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/);
    if (words.length <= maxWords) {
      setFormState((prevState) => ({
        ...prevState,
        description: text,
      }));
    } else {
      const trimmedText = words.slice(0, maxWords).join(" ");
      setFormState((prevState) => ({
        ...prevState,
        description: trimmedText,
      }));
    }
  };

  // Validate input fields
  const validateForm = () => {
    let isValid = true;

    // Check required fields
    const requiredFields = [
      "role",
      "phoneNumber",
      "email",
      "dateOfBirth",
      "address",
      "postalCode",
      "state",
      "password",
      "confirmPassword",
    ];

    requiredFields.forEach((field) => {
      if (!formState[field]) {
        toast.error(`${field.replace(/([A-Z])/g, " $1")} is required.`);
        isValid = false;
      }
    });

    // Specific field validation
    if (!emailRegex.test(formState.email)) {
      toast.error("Invalid email format");
      isValid = false;
    }

    if (!phoneRegex.test(formState.phoneNumber)) {
      toast.error("Invalid phone number format");
      isValid = false;
    }

    if (!passwordRegex.test(formState.password)) {
      toast.error(
        "Password must be at least 8 characters long, include one letter, one number, and one special character"
      );
      isValid = false;
    }

    if (formState.password !== formState.confirmPassword) {
      toast.error("Passwords do not match");
      isValid = false;
    }

    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions.");
      isValid = false;
    }

    return isValid;
  };

  // First form next button
  const handleNext = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowForm(formState.role);
    }
  };

  // Submit button
  const handleRoleFormSubmit = async (e) => {
    e.preventDefault();

    let endpoint = "";

    if (showForm === "client") {
      endpoint = "http://localhost:5000/signup-client";
    } else if (showForm === "freelancer") {
      endpoint = "http://localhost:5000/signup-freelancer";
    } else {
      toast.error("Invalid role");
      return;
    }

    try {
      const response = await axios.post(endpoint, formState);
      console.log("Response:", response.data);
      toast.success("Registration successful!");
      navigate("/ThankYou");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Registration failed. Please try again.");
    }
  };

  // Skip button for client
  const handleSkip = async (e) => {
    e.preventDefault();

    const endpoint = "http://localhost:5000/signup-clientSkip";

    try {
      const response = await axios.post(endpoint, {
        ...formState,
        firstName: null,
        lastName: null,
        id: null,
        title: null,
        description: null,
        rate: null,
        nif: null,
        citizenCard: null,
      });
      console.log("Response:", response.data);
      toast.success("Registration skipped and saved successfully!");
      navigate("/ThankYou");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Registration failed. Please try again.");
    }
  };

  // Terms and condition checkbox
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  // Image to display instead of the default profile image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Button for image upload
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Header />
      <div className={"containerForm"}>
        <form
          onSubmit={showForm === "basic" ? handleNext : handleRoleFormSubmit}
          className="basic-form"
        >
          {showForm === "basic" && (
            <div className="container">
              <h2>
                Bem-vindo ao <br /> <span>TugaFreela</span>
              </h2>
              <p>
                Please provide your basic information to create an account.
                Based on your role, you will be prompted to provide additional
                details.
              </p>
              <div className="radio">
                <div className="ray">
                  <input
                    type="radio"
                    name="role"
                    id="client"
                    value="client"
                    checked={formState.role === "client"}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="client">Cliente</label>
                </div>
                <div className="ray">
                  <input
                    type="radio"
                    name="role"
                    id="freelancer"
                    value="freelancer"
                    checked={formState.role === "freelancer"}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="freelancer">Freelancer</label>
                </div>
              </div>
              <div className="phone">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phone"
                  value={formState.phoneNumber}
                  placeholder="Telefone"
                  onChange={handleInputChange}
                />
              </div>
              <div className="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </div>
              <label htmlFor="" className="dob-c" style={{ fontSize: ".5rem" }}>
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder="Data de nascimento"
                value={formState.dateOfBirth}
                onChange={handleInputChange}
                style={{ width: "100%" }}
              />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Morada"
                value={formState.address}
                onChange={handleInputChange}
              />
              <div className="city">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  placeholder="Código Postal"
                  value={formState.postalCode}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Distrito"
                  value={formState.state}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                value={formState.password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirme a senha"
                value={formState.confirmPassword}
                onChange={handleInputChange}
              />
              <div className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={termsAccepted}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="terms">
                  Aceito os <Link to="/Terms">Termos de Serviço</Link>
                </label>
              </div>
              <button type="submit">Next</button>
            </div>
          )}

          {showForm === "client" && (
            <div className="combined-form">
              <p
                id="skip"
                onClick={handleSkip}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Skip
              </p>

              <div className="name">
                <input
                  type="text"
                  name="firstName"
                  id="Nome"
                  placeholder="Nome"
                  value={formState.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  id="Apelido"
                  placeholder="Apelido"
                  value={formState.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="id, passport or any form of identification"
                value={formState.id}
                onChange={handleInputChange}
              />

              <input
                type="file"
                name="profile"
                id="p"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="p" className="file">
                <img src={imagePreview || Profile} alt="Profile" />
                <button type="button" onClick={handleButtonClick}>
                  Add Photo
                </button>
              </label>

              <textarea
                name="description"
                id="desc"
                value={formState.description}
                onChange={handleDescriptionChange}
                rows="4"
                cols="50"
                placeholder="Descrição"
              >
                Descrição
              </textarea>
              <div className="counter">
                {formState.description.split(/\s+/).length}/{maxWords} words
              </div>

              <button type="submit">Submit</button>
            </div>
          )}

          {showForm === "freelancer" && (
            <div className="combined-form">
              <div className="name">
                <input
                  type="text"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleInputChange}
                  placeholder="Nome"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleInputChange}
                  placeholder="Apelido"
                />
              </div>
              <input
                type="text"
                name="nif"
                value={formState.nif}
                onChange={handleInputChange}
                placeholder="NIF"
              />
              <input
                type="text"
                name="citizenCard"
                value={formState.citizenCard}
                onChange={handleInputChange}
                placeholder="Cartão de Cidadão"
              />
              <input
                type="file"
                name="profile"
                id="p"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="p" className="file">
                <img src={imagePreview || Profile} alt="Profile" />
                <button type="button" onClick={handleButtonClick}>
                  Add Photo
                </button>
              </label>
              <div className="cat">
                <div className="cat-div">
                  <label htmlFor="categories" style={{ display: "block" }}>
                    Categories:
                  </label>
                  <select
                    name="categories"
                    value={formState.categories[0] || ""}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        categories: [e.target.value],
                      }))
                    }
                  >
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div className="cat-div">
                  <label htmlFor="categories" style={{ display: "block" }}>
                    sub-Categories
                  </label>
                  <select
                    name="categories"
                    value={formState.categories[1] || ""}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        categories: [prevState.categories[0], e.target.value],
                      }))
                    }
                  >
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
              </div>
              <textarea
                name="description"
                value={formState.description}
                onChange={handleDescriptionChange}
                rows="4"
                cols="50"
                placeholder="Descrição"
              />
              <div className="counter">
                {formState.description.split(/\s+/).length}/{maxWords} words
              </div>
              <input
                type="text"
                name="rate"
                value={formState.rate}
                onChange={handleInputChange}
                placeholder="Taxa/hora"
              />
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      </div>
      <Footer2 />
    </>
  );
};

export default CombinedForm;
