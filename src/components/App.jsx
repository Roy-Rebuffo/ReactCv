import '../css/App.css'
import { CV } from "./CV/Cv";
import About from './About/About';
import Hero from './Hero/Hero'
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Languages from './Languages/Languages';
import Habilities from './Habilities/Habilities';
import Volunteer from './Volunteer/Volunteer';
import { useState } from 'react';

const { hero, education, languages, habilities, volunteer, experience} = CV;
const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
     <Hero hero = { hero }></Hero>
     <About hero = { hero.aboutMe }></About>
     <div className='father-switch-btn'>
     <button
              className="switch-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="switch-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            </div>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
     <Languages languages = { languages }></Languages>
     <Habilities habilities = { habilities }></Habilities>
     <Volunteer volunteer = { volunteer }></Volunteer>
    </div>
  )
}

export default App
