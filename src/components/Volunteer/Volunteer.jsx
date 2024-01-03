import "./Volunteer.css";
const Volunteer = ({ volunteer }) => {
  return (
    <>
    <h2 className="title-volunteer">Volunteer</h2>
    <div className="card-div">
      {volunteer.map((item) => {
        return (
            <div className="volunteer-div" key={JSON.stringify(item)}>
              <h2>👓 {item.name}</h2>
              <p>{item.where}</p>
              <p>{item.description}</p>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Volunteer;
