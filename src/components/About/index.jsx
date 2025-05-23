import about from '../../db/aboutData.json';

const   About = () => (
  <section className="about">
    <div className="about__container">
      <h4 className="about__title">{about.title}</h4>
      <input type="checkbox" id="toggle" className="about__toggle" />
      <p className="about__description">{about.description}</p>
      <label htmlFor="toggle" className="about__button">
        <span className="button-text--more">{about.button.more}</span>
        <span className="button-text--less">{about.button.less}</span>
      </label>
    </div>
  </section>
);

export default About;