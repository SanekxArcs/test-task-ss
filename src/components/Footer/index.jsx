import rocket from "../../assets/icons/rocket.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <img src={rocket} alt="Rocket" className="footer__image" />
      <p className="footer__text">Exciting space adventure!</p>
    </div>
  </footer>
);

export default Footer;
