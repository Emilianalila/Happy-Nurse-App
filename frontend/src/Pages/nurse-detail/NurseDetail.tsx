import { useNavigate, useParams } from "react-router-dom";
import NavLogout from "../../components/nav-logout/NavLogout";
import { useEffect, useState } from "react";
import { Nurse } from "../../App";
import "./nurse-detail.css";
import listImg from "../../assets/nurseImg2.jpg";
import { addNurseProp } from "../create-profile/CreateProfile";
import toast, { Toaster } from "react-hot-toast";

type Params = {
  id: string;
};

const NurseDetail = ({ handleNewNurse }: addNurseProp) => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [nurseData, setNurseData] = useState<Nurse>({
    id: 0,
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    licenseNumber: "",
    gender: "",
    address: "",
    price: 0,
    rating: "",
    img: "",
  });
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const baseUrl = import.meta.env.VITE_APP_API_URL as string;

  useEffect(() => {
    // Obtener los datos iniciales de la enfermera
    const fetchNurseData = async () => {
      const response = await fetch(`${baseUrl}/api/nurse/${id}`);
      const data = await response.json();
      setNurseData(data);
    };
    fetchNurseData();
  }, [id]);

  if (!nurseData) {
    return <div>Loading...</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNurseData({ ...nurseData, [name]: value });
  };

  const handleSave = async () => {
    const response = await fetch(`${baseUrl}/api/nurse/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nurseData),
    });
    if (response.ok) {
      setEditMode(false);
      
      handleNewNurse();

      setMessage("Changes saved successfully 🎉.");
      // toast.success("Changes saved successfully 🎉")
      
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      console.log("Failed to save changes.");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this profile?"
    );
    if (confirmDelete) {
      const response = await fetch(`${baseUrl}/api/nurse/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAlertMessage(
          `This profile has been deleted successfully ♳.`
        );
        toast.success(`${nurseData.name}'s profile has been deleted successfully♳.`)
        handleNewNurse();

        setTimeout(() => {
          setAlertMessage("");
          navigate("/HomeNurse");
        }, 2000);
      } else {
        console.log("Failed to delete profile.");
      }
    }
  };

  const handleBack = () => {
    setEditMode(false);
  };

  return (
    <>
      <NavLogout />
      <div className="Profile-main_container">
        <div className="column">
          <div className="Profile_card">
            <div className="Profile-card_header">
              <button className="btn-secondary2" onClick={handleBack}>
                Back to view
              </button>
              <div>
                {editMode ? (
                  <button className=" btn-success1" onClick={handleSave}>
                    Save Changes
                  </button>
                ) : (
                  <a className="editicon" onClick={handleEdit}>
                    Edit 🖍️
                  </a>
                )}
              </div>
            </div>
            <div className="profile-card_body">
              <div className="text-center">
                <img
                  src={nurseData.img}
                  alt="Nurse"
                  className="rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <h6 className="mt-1">
                  {nurseData.name} {nurseData.lastName}
                </h6>
                {alertMessage && (
              <div
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{alertMessage}</div>
              </div>
            )}
                {message && <div className="message">{message}</div>}
              </div>
              <div>
                <label className="profile-form_label Profile_label">
                  *Email
                </label>
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={nurseData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p className="form-control-plaintext">{nurseData.email}</p>
                )}
              </div>
              <div>
                <label className="profile-form_label Profile_label">
                  Phone Number
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name="phoneNumber"
                    value={nurseData.phoneNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p className="form-control-plaintext">
                    {nurseData.phoneNumber}
                  </p>
                )}
              </div>
              <div>
                <label className="profile-form_label Profile_label">
                  *License Number
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name="licenceNumber"
                    value={nurseData.licenseNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p className="form-control-plaintext">
                    {nurseData.licenseNumber}
                  </p>
                )}
              </div>
              <div>
                <label className="profile-form_label Profile_label">
                  Gender
                </label>
                {editMode ? (
                  // <input
                  //   type="text"
                  //   name="gender"
                  //   value={nurseData.gender}
                  //   onChange={handleChange}
                  //   className="form-control"
                  // />
                  <select
                    name="gender"
                    value={nurseData.gender}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="" disabled></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p className="form-control-plaintext">{nurseData.gender}</p>
                )}
              </div>
              <div>
                <label className="profile-form_label Profile_label">
                  Address
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name="address"
                    value={nurseData.address}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p className="form-control-plaintext">{nurseData.address}</p>
                )}
              </div>
              <div>
                <label className="profile-form_label Profile_label">
                  Price
                </label>
                {editMode ? (
                  <input
                    type="number"
                    name="price"
                    value={nurseData.price}
                    onChange={handleChange}
                    placeholder="Hourly"
                    className="form-control"
                  />
                ) : (
                  <p className="form-control-plaintext">{nurseData.price} sek</p>
                )}
              </div>
              {/* { <div>
                <label className="profile-form_label Profile_label">
                  Rating
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name="rating"
                    value={nurseData.rating}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p className="form-control-plaintext">{nurseData.rating}</p>
                )}
              </div> } */}
            </div>
            <div className="card-footer">
              <a className="card-footer" onClick={handleDelete}>
                Delete 🗑️
              </a>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </div>
        <div className="column">
          <div className="profile-description_container">
            <h4 className="middle-title1">
              Here you can add more details to your profile and update any
              existing information.
            </h4>
            <p className="middlep">
              You can edit your price, email, phone number and more,
              Make sure to save your changes before navigating away.
            </p>
          </div>
        </div>
      </div>
      <div className="main_container1">
        <div className="row_container">
          <div className="info-container">
            <h2 className="info-title">Preview Card Information</h2>
            <p className="info-paragraph">
              This card is a preview of what users will see when they search for
              nurses.
            </p>
            <img src={listImg} alt="Small Preview" className="info-image" />
            <p className="edit-profile">Edit your profile to keep it updated</p>
          </div>
          <div className="preview-container">
            <div className="detail-container">
              <ul className="list-nurse">
                <div className="card">
                  <img src={nurseData.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      {nurseData.name} {nurseData.lastName}
                    </h5>
                    <p>⭐️⭐️⭐️ ({nurseData.rating})</p>
                    <p className="card-text">
                      Hourly rate: {nurseData.price} sek
                    </p>
                    <a className="btn btn-primary">Contact {nurseData.name}</a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurseDetail;
