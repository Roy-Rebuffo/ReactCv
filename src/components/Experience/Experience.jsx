import './Experience.css'
const Experience = ({experience}) => {
  return (
    <div className='experience-btn-div'>
    <div className='experience-card'>
    {experience.map((item)=>{
      return (
        <div key={JSON.stringify(item)}>
                <strong><p className="name"> 📁 {item.name}</p></strong>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </div>
      )
    })}

    </div>
      
    </div>
  )
}

export default Experience
