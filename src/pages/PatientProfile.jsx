// import { FaArrowLeft } from "react-icons/fa";
import Banner from "../components/Banner";
import Details from "../components/Details";
import Goal from "../components/Goal";
import Heder from "../components/Heder";
import "./PatientProfile.css";
const PatientProfile = () => {
  return (
    <div className="patient-profile">
      <header className="  patient-view">
        {/* <h1>Patient View</h1> */}
        <Heder/>
      </header>
      <Banner />
      <Goal />
      <Details />
      <footer className="app-footer">
        <p>&copy; 2023 Patient Management App</p>
      </footer>
    </div>
  );
};

export default PatientProfile;
