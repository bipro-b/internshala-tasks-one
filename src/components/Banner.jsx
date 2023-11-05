import { useEffect, useState } from "react";

const Banner = () => {
  const [p, setPatientData] = useState([]);
  useEffect(() => {
    fetch("/patient.json")
      .then((res) => res.json())
      .then((data) => setPatientData(data));
  }, []);
  return (
    <>
      <hr />
      <div className="b mx-auto">
        <div className="banner">
          {" "}
          <div className="patient-info">
            <span>{p.name}</span>
            <span className="ml-1">
              {p.gender}/{p.age}
            </span>
            <p>Patient ID: 87 20200727153457</p>
          </div>
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src={p.imageUrl}
              alt="Patient Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
