import './Habilities.css'
const Skills = ({ habilities }) => {
  return (
    <div className='card-div'>
    <div className='habilities-div'>
    <p>🔧{habilities[0]}</p>
    <p>🔧{habilities[1]}</p>
    <p>🔧{habilities[2]}</p>
    <p>🔧{habilities[3]}</p>
    <p>🔧{habilities[4]}</p>
    <p>🔧{habilities[5]}</p>
    <p>🔧{habilities[6]}</p>
    <p>🔧{habilities[7]}</p>
    </div>
      
    </div>
  )
}

export default Skills
