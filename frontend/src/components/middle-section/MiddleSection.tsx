import { useNavigate } from "react-router-dom";
import middlePhoto1 from "../../assets/middle1.png";
import middlePhoto2 from "../../assets/middle2.png"
import "./middle-section.css"


const MiddleSection = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/HomeNurse');
  }
  return (
    <div className="container my-5">
      <div className="row middleBackground">
        <div className="col-md-6 d-flex align-items-center my-2">
          <img src={middlePhoto1} className="img-fluid" alt="Description 1" />
        </div>
        <div className="col-md-6 my-2">
          <h3 className="middle-title1">It's that simple</h3>
          <p className="middleP">
            Using Happy Nurse is super easy. You can book a nurse for a weekly
            visit, once every two weeks, or just a one-time appointment. Matched
            with the perfect nurse, and start enjoying a exceptional home
            healthcare.
          </p>
          <ul className="list-group mt-3">
            <li className="list-group-item middleItem">
              ♥️ Set up your home profile.
            </li>
            <li className="list-group-item middleItem">
              ♥️ You will find your perfect Happy Nurse.
            </li>
            <li className="list-group-item middleItem">
              ♥️ Sit back, relax, and enjoy exceptional home healthcare.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-2">
          <h3 className="middle-title1">
            Want to make money on your own terms?
          </h3>
          <ul className="list-group ms-3">
            <li className="list-group-item middleItem">♥️ Be your own boss.</li>
            <li className="list-group-item middleItem">
              ♥️ Set up your profile and pricing.
            </li>
            <li className="list-group-item middleItem">
              ♥️ Control your schedule and free time.
            </li>
            <li className="list-group-item middleItem">
              ♥️ Become a part of our nursing community.
            </li>
          </ul>
          <button className="middle-button" onClick={handleClick}>See more details</button>
        </div>
        <div className="col-md-6 d-flex align-items-center my-2">
          <img src={middlePhoto2} className="img-fluid" alt="Description 4" />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
