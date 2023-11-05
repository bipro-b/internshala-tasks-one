import { useState, useEffect } from "react";
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { GiHealthNormal } from 'react-icons/gi';
import { FaHeartbeat } from 'react-icons/fa';
import { FaUserMd } from 'react-icons/fa';

const Details = () => {
  const [medicalData, setMedicalData] = useState("");
  const [patientData, setPatientData] = useState("");
  useEffect(() => {
    fetch("/medical.json")
      .then((res) => res.json())
      .then((data) => setMedicalData(data));
  }, []);
  useEffect(() => {
    fetch("/patient.json")
      .then((res) => res.json())
      .then((data) => setPatientData(data));
  }, []);
  console.log(medicalData);
  // console.log(patientData);
  return (
    <div className="b mx-auto">
      <div className="details">
      <div className="detail-row">
          <p>Email ID:</p>
           <span>📞{patientData.phone}</span>
        </div>

        <div className="detail-row">
          <p>Email ID:</p>
          <span >✉️{patientData.mail}</span>
        </div>

        <div className="detail-row">
          <p>Affected Side:</p>
         <span>⚫{medicalData.affected}</span>
        </div>

        <div className="detail-row">
          <p>Condition:</p>
          <span>🩺{medicalData.condition}</span>
        </div>

        <div className="detail-row">
          <p>Speciality:</p>
          <span>:💓{medicalData.speciality}</span>
        </div>
       <div>
        <hr></hr>
       </div>
        <div className="detail-row">
          <p>MedicalHistory: </p>
          <span>📜{medicalData.medicalHistory}</span>
        </div>
      </div>{" "}
    </div>
  );
};

export default Details;
