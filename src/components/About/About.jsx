import "../About/About.css";
const About = ({ hero }) => {
  return (
    <>
    <h2 className="title-about">About Me</h2>
    <div className="about-btn-div">
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
    </>
  );
};

export default About;
