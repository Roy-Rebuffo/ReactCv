import './Hero.css'
const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image}></img>
      <div className="card">
        <h2>{hero.name}{hero.adress}</h2>
        <p>🗺️{hero.city}</p>
        <p>🗓️{hero.birthDate}</p>
        <p>📧
        <a href={"Mail:" + hero.email}>
        tony@starkindustries.com
        </a></p>
        <p>📱{hero.phone}</p>
        <p>💾<a href={"gitHubLink" + hero.gitHub}>GitHub</a></p>
      </div>
    </div>
  )
}

export default Hero
