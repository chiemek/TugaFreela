import Header from "../../components/Header/Header";
import Showcase from "../../components/Showcase/Showcase";
import "./Terms.css";
import Underline from "../../assets/icons/Vector.png";
import Footer from "../../components/Footer/Footer";

const Terms = () => {
  return (
    <>
      <div id="terme"></div>
      <Header />
      <Showcase
        text={
          <h5
            style={{
              textAlign: "center",
              color: "white",
              width: "80vw",
              fontSize: "3rem",
              marginTop: "-5rem",
            }}
          >
            Termos de uso
          </h5>
        }
      />
      <div className="terms">
        <h2>1. Who can participate in this program</h2>
        <img src={Underline} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2>2. Who can participate in this program</h2>
        <img src={Underline} alt="" />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2>3. Who can participate in this program</h2>
        <img src={Underline} alt="" />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2>4. Who can participate in this program</h2>
        <img src={Underline} alt="" />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
