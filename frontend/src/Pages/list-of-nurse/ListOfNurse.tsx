import NavLogout from "../../components/nav-logout/NavLogout";
import { Nurse } from "../../App";
import "./list-of-nurse.css"
import { useState } from "react";

type listofNurseProp = {
  nursesData: Nurse[];
};
const ListOfNurse = ({ nursesData }: listofNurseProp) => {
  const [contactMode, setContactMode]= useState(true);
  const [nurseId, setSelectNurseId] = useState <number>(0);

  // {nursesData.find((item1)=>{item1.name ===})}
  const handleOnClick2=(nurseId: number)=>{
    setSelectNurseId(nurseId);
  }


  const handleOnClick=()=>{
    setContactMode(false);
  }
  const handleBack = ()=>{
    // setContactMode(true)
    setSelectNurseId(0)
  }

  return (
    <>
      <NavLogout />
      <div className="detail-container">
        {/* <h6  className="list-title">List of Nurses available</h6> */}
        <ul className="list-nurse">
          {nursesData.map((item) => (
            <div key={item.id} className="card">
              <div className="card-img_container">
                <img src={item.img} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {item.name} {item.lastName}
                </h5>
                <p>⭐️⭐️⭐️ ({item.rating})</p>
                <p className="card-text">Hourly rate: {item.price} kr</p>
                {nurseId === item.id ? (
                  <>
                    <p>📞 {item.phoneNumber}</p>
                    <p>📩 {item.email}</p>
                    <div className="contact-list_button">
                      <a
                      
                        className="btn btn-primary"
                        onClick={handleBack}
                      >
                      Back
                      </a>
                    </div>
                  </>
                ) : (
                  <a
                  className="btn btn-primary"
                    onClick={() => handleOnClick2(item.id)}
                  >
                    Contact {item.name}
                  </a>
                )}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListOfNurse;
