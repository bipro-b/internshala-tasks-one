import { FaArrowLeft } from "react-icons/fa";

const Heder = () => {
  return (
    <div  style={{display:'flex', marginLeft:'160px'}}>
      <div style={{marginTop:'5px'}}>
        <FaArrowLeft />
      </div>
      <div>
        <p  className=" text-black-500 ml-3 "> View patient</p>
      </div>
    </div>
  );
};

export default Heder;
