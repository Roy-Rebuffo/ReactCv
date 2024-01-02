import './Languages.css'
const Languages = ({ languages }) => {
  return (
    <div className='card-div'>
      <div className="lang-div">
        <p>{languages.language}</p>
        <p>🖋Writing: {languages.wrlevel}</p>
        <p>💭Speaking: {languages.splevel}</p>
      </div>
      
    </div>
  )
}

export default Languages

