import React, { useState } from "react";
import NavLogout from "../../components/nav-logout/NavLogout";
import createProfileImg from "../../assets/loginGroup.jpg";
import { useNavigate } from "react-router-dom";
import "./create-profile.css"

export type FormNurse = {
  name: string;
  lastName: string;
  price: number;
  email: string;
  rating: string;
  img: string;
  licenseNumber: string;
};

type addDevProp = {
  handleNewNurse: () => void;
};

const CreateProfile = ({ handleNewNurse }: addDevProp) => {
  const [nurse, setNurse] = useState<FormNurse>({
    name: "",
    lastName: "",
    price: 0,
    email: "",
    rating: "",
    img: "",
    licenseNumber: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNurse((preFormData) => ({ ...preFormData, [name]: value }));
  };

  const baseUrl = "http://localhost:8080/api/nurse/create";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nurse),
    };
    try {
      const response = await fetch(baseUrl, options);
      if (!response.ok) {
        throw new Error("could not fetch resource");
      }
      const result = await response.json();
      console.log(result);

      // handleNewNurse();
      setMessage("User created successfully!🎉");
      //otro msj para decirle al usuario que va a ser redirigino a su nueva cart...

      setTimeout(() => {
        setNurse({
          name: "",
          lastName: "",
          price: 0,
          email: "",
          rating: "",
          img: "",
          licenseNumber: "",
        });
        setMessage("");
        navigate(`/NurseDetail/${result}`);
      }, 3000);
    } catch (err) {
      console.error(err, "could not fetch resource");
      setMessage("error creating user");
    }
  };
  const { name, lastName } = nurse;

  return (
    <>
      <NavLogout />
      <div className="main_container">
        <div className="content_container">
          <div className="form_container">
            <h3>Create your Profile</h3>
            {message && <div className="message">{message}</div>}
            <form className="addDeveloperForm" onSubmit={handleSubmit}>
              <label>*Name</label>
              <input
                name="name"
                onChange={handleInputChange}
                className="form__input-name"
                value={name}
                type="text"
                required
              />
              <label>*Last Name</label>
              <input
                name="lastName"
                onChange={handleInputChange}
                className="form__input-name"
                value={lastName}
                type="text"
                required
              />
              <label>*License Number</label>
              <input
                name="licenseNumber"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.licenseNumber}
                type="text"
                required
              />
              <label>Price</label>
              <input
                name="price"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.price}
                type="text"
              />
              <label>*Email</label>
              <input
                name="email"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.email}
                type="text"
                required
              />
              <label>Rating</label>
              <input
                name="rating"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.rating}
                type="text"
              />
              <label>*Image</label>
              <input
                name="img"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.img}
                type="text"
                required
              />
              <div className="form__buttonContainer">
                <button className="form__button-addDev" type="submit">
                  Create Profile
                </button>
              </div>
            </form>
          </div>
          <div className="image_container">
            <img src={createProfileImg} alt="createProfileImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
