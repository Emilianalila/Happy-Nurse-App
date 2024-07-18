import React, { useState } from "react";
import createProfileImg from "../../assets/loginGroup.jpg";
import { useNavigate } from "react-router-dom";
import "./create-profile.css";
import Nav from "../../components/nav/Nav";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/footer/Footer";

export type FormNurse = {
  name: string;
  lastName: string;
  price: number | null;
  email: string;
  rating: string;
  img: string;
  licenseNumber: string;
};

export type addNurseProp = {
  handleNewNurse: () => void;
};

const CreateProfile = ({ handleNewNurse }: addNurseProp) => {
  const [nurse, setNurse] = useState<FormNurse>({
    name: "",
    lastName: "",
    price: null,
    email: "",
    rating: "",
    img: "",
    licenseNumber: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const regexName = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexLicense = /^NR\d{3}$/;
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNurse((preFormData) => ({ ...preFormData, [name]: value }));
  };

  const baseUrl = "http://localhost:8080/api/nurse/create";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = nurse.name.trim();
    const trimmedLastname = nurse.lastName.trim();

    if (!regexName.test(trimmedName)) {
      setError("Invalid format name, add capital letters, without numbers❗️");
      setTimeout(() => {
        setError(" ");
      }, 3000);
      return;
    }
    if (!regexName.test(trimmedLastname)) {
      setError("Invalid format LastName, add capital letters❗️");
      setTimeout(() => {
        setError(" ");
      }, 3000);
      return;
    }
    if (!regexEmail.test(nurse.email)) {
      setError("Invalid email format, correct format name@gmail.com❗️");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (!regexLicense.test(nurse.licenseNumber)) {
      setError("Invalid license number, correct format(NR000)❗️");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nurse),
    };
    try {
      const response = await fetch(baseUrl, options);
      if (!response.ok) {
        toast.error("Some fields are not completed");
        throw new Error("could not fetch resource");
      }
      const result = await response.json();
      console.log(result);

      handleNewNurse();
      setMessage("redirected to your profile →");
      toast.success("User created successfully! 🎊");

      setTimeout(() => {
        setNurse({
          name: "",
          lastName: "",
          price: null,
          email: "",
          rating: "",
          img: "",
          licenseNumber: "",
        });
        setMessage("");
        navigate(`/NurseDetail/${result}`);
      }, 2000);
    } catch (err) {
      console.error(err, "could not fetch resource");
      setMessage("error creating user");
    }
  };
  const { name, lastName } = nurse;

  return (
    <>
      <Nav />
      <div className="main_container">
        <div className="content_container">
          <div className="form_container">
            <h6 className="profile-title">♥️Create your Profile</h6>
            <form className="addDeveloperForm" onSubmit={handleSubmit}>
              <label>*Name</label>
              <input
                name="name"
                onChange={handleInputChange}
                className="form__input-name"
                value={name}
                type="text"
                placeholder="Name"
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
                placeholder="Last Name"
              />
              <label>*License Number</label>
              <input
                name="licenseNumber"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.licenseNumber}
                type="text"
                placeholder="NR000"
                required
              />
              <label>Price</label>
              <input
                name="price"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.price !== null ? nurse.price : ""}
                type="number"
                placeholder="hourly in sek"
              />
              <label>*Email</label>
              <input
                name="email"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.email}
                type="text"
                placeholder="name@gmail.com"
                required
              />
              {/* <label>Rating</label>
              <input
                name="rating"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.rating}
                type="text"
              /> */}
              <label>*Image</label>
              <input
                name="img"
                onChange={handleInputChange}
                className="form__input-name"
                value={nurse.img}
                type="text"
                required
              />
              {message && <div className="message">{message}</div>}
              {error && <p className="form__error-message">{error}</p>}
              <div className="form__buttonContainer">
                <button className="form__button-addDev" type="submit">
                  Create Profile
                </button>
                <Toaster position="top-center" reverseOrder={false} />
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
