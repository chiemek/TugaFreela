import "./Showcase.css";
import showcaseBg from "../../assets/icons/topBackground.png";

const Showcase = ({ image, text, button, height, id }) => {
  return (
    <div className="showcase" style={{ height: height }} id={id}>
      <img src={showcaseBg} alt="" className="showcase-bg" />
      <div className="text">
        {text}
        {button}
      </div>
      {image}
    </div>
  );
};

export default Showcase;
