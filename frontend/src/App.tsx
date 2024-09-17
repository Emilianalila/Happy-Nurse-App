import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import MiddleSection from "./components/middle-section/MiddleSection";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PrincipalSection from "./components/principal-section/PrincipalSection";
import HomeNurse from "./Pages/home-nurse/HomeNurse";
import ListOfNurse from "./Pages/list-of-nurse/ListOfNurse";
import Login from "./Pages/login/Login";
import CreateProfile from "./Pages/create-profile/CreateProfile";
import ProfileDetails from "./Pages/nurse-detail/NurseDetail";
import NurseDetail from "./Pages/nurse-detail/NurseDetail";
import ContactNurse from "./Pages/contact-Nurse/ContactNurse";

export type Nurse = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  licenseNumber: string;
  gender: string;
  address: string;
  price: number;
  rating: string;
  img: string;
};


function App() {
  const [nursesData, setNursesData] = useState<Nurse[]>([]);
  
  const baseUrl = import.meta.env.VITE_APP_API_URL as string; 

  const getAllNurses = async () => {
    const response = await fetch(`${baseUrl}/api/nurse`);
    const data = await response.json();
    setNursesData(data);
    console.log(data);
  };

  useEffect(() => {
    getAllNurses();
  }, []);

  const handleNewNurse = () => {
    getAllNurses();
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <PrincipalSection />
              <MiddleSection />
            </>
          }
        />
        <Route path="HomeNurse" element={<HomeNurse />} />
        <Route
          path="ListOfNurse"
          element={<ListOfNurse nursesData={nursesData} />}
        />
        <Route
          path="CreateProfile"
          element={<CreateProfile handleNewNurse={handleNewNurse}/>}
        />
        <Route path="ProfileDetails" element={<ProfileDetails handleNewNurse={handleNewNurse}/>} />
        <Route path="Login" element={<Login />} />
        <Route path="NurseDetail/:id" element={<NurseDetail handleNewNurse={handleNewNurse}/>} />
        <Route path="ContactNurse" element={<ContactNurse />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
