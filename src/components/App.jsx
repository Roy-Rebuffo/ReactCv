import '../css/App.css'
import { CV } from "./CV/Cv";
import About from './About/About';
import Hero from './Hero/Hero'
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Languages from './Languages/Languages';
import Habilities from './Habilities/Habilities';
import Volunteer from './Volunteer/Volunteer';

const { hero, education, languages, habilities, volunteer} = CV;
const App = () => {
  return (
    <div className="App">
     <Hero hero = { hero }></Hero>
     <About hero = { hero.aboutMe }></About>
     <Education education = { education }></Education>
     <Experience></Experience>
     <Languages languages = { languages }></Languages>
     <Habilities habilities = { habilities }></Habilities>
     <Volunteer volunteer = { volunteer }></Volunteer>
    </div>
  )
}

export default App
