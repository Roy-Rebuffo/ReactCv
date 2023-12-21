import '../css/App.css'
import { CV } from "./CV/Cv";
import About from './About/About';
import Hero from './Hero/Hero'
import Education from './Education/Education';
import Experience from './Experience/Experience';

const { hero, education} = CV;
const App = () => {
  return (
    <div className="App">
     <Hero hero = { hero }></Hero>
     <About hero = { hero.aboutMe }></About>
     <Education education = { education }></Education>
     <Experience></Experience>
    </div>
  )
}

export default App
