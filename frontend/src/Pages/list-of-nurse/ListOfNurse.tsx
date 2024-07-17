import NavLogout from "../../components/nav-logout/NavLogout";
import { Nurse } from "../../App";
import "./list-of-nurse.css"

type listofNurseProp = {
  nursesData: Nurse[];
};
const ListOfNurse = ({ nursesData }: listofNurseProp) => {
  return (
    <>
      <NavLogout />
      <div className="detail-container">
        <h4></h4>
        <ul className="list-nurse">
          {nursesData.map((item) => (
            <div className="card">
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {item.name} {item.lastName}
                </h5>
                <p>⭐️⭐️⭐️ ({item.rating})</p>
                <p className="card-text">Hourly rate: {item.price} kr</p>
                <a href="#" className="btn btn-primary">
                  Contact {item.name}
                </a>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListOfNurse;
