import '../About/About.css'
const About = ({ hero }) => {
  return (
    <div>
    <div className="about-card">
      {hero.map((item) => {
        return (
          <div key={item.info}>
            <h2>{item.info}</h2>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default About;