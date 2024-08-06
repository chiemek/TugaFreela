import { useState } from "react";
import Header from "../../components/Header/Header";
import Showcase from "../../components/Showcase/Showcase";
import "./FAQ.css";
import Footer from "../../components/Footer/Footer";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <>
      <div id="faq"></div>
      <Header />
      <Showcase text={<h5>Perguntas Frequentes</h5>} />

      <div className="faq-con">
        <section className="right">
          <h3
            className={active === 0 ? "active" : ""}
            onClick={() => handleActive(0)}
          >
            How much does it cost to <br />
            use EnjoyTickets?
          </h3>
          <h3
            className={active === 1 ? "active" : ""}
            onClick={() => handleActive(1)}
          >
            Do I pay for a free event?
          </h3>
          <h3
            className={active === 2 ? "active" : ""}
            onClick={() => handleActive(2)}
          >
            How to contact <br />
            EnjoyTickets Support?
          </h3>
          <h3
            className={active === 3 ? "active" : ""}
            onClick={() => handleActive(3)}
          >
            How to delete an event?
          </h3>
          <h3
            className={active === 4 ? "active" : ""}
            onClick={() => handleActive(4)}
          >
            I did not receive my payout?
          </h3>
          <h3
            className={active === 5 ? "active" : ""}
            onClick={() => handleActive(5)}
          >
            When do I get pay?
          </h3>
        </section>
        <section className="left">
          <h2>How much does it cost to use EnjoyTickets?</h2>
          <p>all the pricing information can be found here.</p>
          <h2>Do I pay for a free event?</h2>
          <p>No, its completely free for free events.</p>
          <h2>How to contact EnjoyTickets Support?</h2>
          <p>
            if you have questions, please contact info@enjoytickets.co.uk to get
            in touch. We’re more than happy to help!
          </p>
          <h2>How to delete an event?</h2>
          <p>
            If there are no completed orders, go to My Events page and click
            Delete on the Event Dashboard. If there are completed orders, you
            can refund paid orders and cancel or delete free orders to be able
            to delete the event.
          </p>
          <h2>I did not receive my payout?</h2>
          <p>
            your event didn't finish yet, bank details missing, the payout was
            returned due to bank details issue.
          </p>
          <h2>When do I get pay?</h2>
          <p>
            Payouts are transferred 5 working days after the event has taken
            place. You need to make sure your bank details are correct in your
            organiser profile.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
