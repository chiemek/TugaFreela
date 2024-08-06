import "./Showcase.css";
import showcaseBg from "../../assets/icons/topBackground.png";

const Showcase = ({ image, text, button, height }) => {
  return (
    <div className="showcase" style={{ height: height }}>
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
