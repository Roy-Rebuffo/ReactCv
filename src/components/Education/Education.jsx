import { useState } from "react";
import '../Education/Education.css'

const Education = ({ education }) => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <>
    <div className="custom-btn-div">
      <button className="custom-btn">Education</button>
      <button className="custom-btn">Experience</button>
      </div>
      <div>
        <div className="education card">
          {education.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">{item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;
