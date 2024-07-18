import NavLogout from "../../components/nav-logout/NavLogout";
import { Nurse } from "../../App";
import "../../Pages/list-of-nurse/list-of-nurse.css";
import { useState } from "react";

type listofNurseProp = {
  nursesData: Nurse[];
};
const ListOfNurse = ({ nursesData }: listofNurseProp) => {
  // const [contactMode, setContactMode]= useState(true);
  const [nurseId, setSelectNurseId] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortedNurses = [...nursesData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const handleOnClick2 = (nurseId: number) => {
    setSelectNurseId(nurseId);
  };

  // const handleOnClick=()=>{
  //   setContactMode(false);
  // }
  const handleBack = () => {
    // setContactMode(true)
    setSelectNurseId(0);
  };

  return (
    <>
      <NavLogout />
      <div className="detail-container">
        <h5 className="list-title">List of Nurses Available</h5>
        <div className="list-sorted">
          <label htmlFor="sortOrder">Sort by price: </label>
          <select className="sortOrder" onChange={handleSortChange}>
            <option value="">--Select--</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <ul className="list-nurse">
          {sortedNurses.map((item) => (
            <div key={item.id} className="card">
              <div className="card-img_container">
                <img src={item.img} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h6 className="card-title">
                  {item.name} {item.lastName}
                </h6>
                <p>⭐️⭐️⭐️ ({item.rating})</p>
                <p className="card-text">Hourly rate: {item.price} kr</p>
                {nurseId === item.id ? (
                  <>
                    <p className="cursor-pointer">📞 {item.phoneNumber}</p>
                    <p>
                      📩{" "}
                      <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=ALoj5ArrkJTs5cLQGoP9aM1xHZGlDradGhQs5cfTl6xZpsVoarh0bx57zpjA7quB&cid=1&continue=https://myaccount.google.com/signinoptions/password?hl%3Des&flowName=GlifWebSignIn&hl=en_GB&ifkv=AdF4I75XE1Jn6V9wxMyhWKX6IY9osWDpDVsIroSRbb-VDBBGba_mCkJ38FTsItx_3_ZgFzq6HqN36A&kdi=CAM&rart=ANgoxcd1JRlp5nyRIeQMtZ9gPhgc3c29z3P9AT9Mh-lWQUnhaH-WaV6cDjKJ5Toc4IlMEZh5thkB1W9y8ip3J-pUWTACEHiJJu1GoaO6UagJtrh326REIdE&rpbg=1&sarp=1&scc=1&service=accountsettings">
                        {item.email}
                      </a>
                    </p>
                    <div className="contact-list_button">
                      <a className="btn btn-primary" onClick={handleBack}>
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
