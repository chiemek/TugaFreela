import "./Showcase.css";
import showcaseBg from "../../assets/icons/topBackground.png";

const Showcase = ({ image, text, button, height }) => {
  return (
    <div className="showcase" style={{ height: height }}>
      <img src={showcaseBg} alt="" className="showcase-bg" />
      <div className="text">
        {text}
        {/* <p>
          NÃO PERCA TEMPO!!! <br />
        </p>
        <h3>
          Contrate freelancers <br />
          especializados para qualquer <br />
          trabalho online.
        </h3> */}
        {button}
        {/* <div className="button">
          <Button bgColor="rgb(177, 137, 239)" borderRadius="2rem">
            QUERO CONTRATAR
          </Button>
          <Button bgColor="#333" borderRadius="2rem">
            TRABALHE COMO FREELA
          </Button>
        </div> */}
      </div>
      {image}
      {/* <img className="showcase-img" src={showcaseImg} alt="woman working" /> */}
    </div>
  );
};

export default Showcase;
