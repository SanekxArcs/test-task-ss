import earth from "../../assets/images/earth.webp";
import heroDB from "../../db/heroData.json";

const Hero = () => (
  <section className="hero">
    <div className="hero__container">
      
      <h1 className="hero__title">
        {heroDB.title.main} <span>{heroDB.title.colorfull}</span>
      </h1>
      <p className="hero__description">
        {heroDB.description.main} <span>{heroDB.description.colorfull}</span>
      </p>
      <button className="hero__button">{heroDB.button}</button>
      <img src={earth} alt="Earth" className="hero__image" />
    </div>
  </section>
);

export default Hero;
