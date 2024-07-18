import { useState } from "react";
import {useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit= async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    if (!regexEmail.test(email)) {
      setError("Invalid email format, correct format(name@gmail.com)❗️");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (password.length < 5) {
      setError("Password must be at least 5 characters long.❗️");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    try{  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: email
    }
    const response = await fetch("http://localhost:8080/api/login", options);
    const data = await response.json();
    console.log(data);

    if (data.rol === 'user') {
      navigate('/ListOfNurse');
    } else if (data.rol === 'admin') {
      navigate(`/NurseDetail/${data.id}`);
    } else {
      alert('Email not found. You will be redirected to create a profile.');
      navigate("/CreateProfile");
    }
  } catch (e:any){
    console.error("Error", e);
  }
}
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            🎈Happy Nurse
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="loginContainer">
        <div className="row">
          <h2 className="login-title">Login</h2>
          {error && <div className="error-message custom-row">{error}</div>}
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              className="login-form_imput"
              placeholder="🔑 email@gmail.com"
              value={email}
              type="text"
            />
            <input
            onChange={handlePasswordChange}
              name="password"
              className="form__input"
              placeholder="🔒 Password"
              type={showPassword ? 'text' : 'Password'}
              required
            />
            <div>
              <input
                type="checkbox"
                onClick={togglePasswordVisibility}
              /> Show Password
            </div>
            <div className="form__buttonContainer">
              <button className="form__button" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
