import { useState } from "react";
import '../Education/Education.css'

const Education = ({ education }) => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <>
    
      <div className="education-btn-div">
        <div className="education-card">
          {education.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <strong><p className="name"> 📕 {item.name}</p></strong>
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
  