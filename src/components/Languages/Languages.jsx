import './Languages.css'
const Languages = ({ languages }) => {
  return (
    <>
    <h2 className="title-languages">Languages</h2>
    <div className='card-div'>
      <div className="lang-div">
        <p>{languages.language}</p>
        <p>🖋Writing: {languages.wrlevel}</p>
        <p>💭Speaking: {languages.splevel}</p>
      </div>
    </div>
    </>
  )
}

export default Languages

