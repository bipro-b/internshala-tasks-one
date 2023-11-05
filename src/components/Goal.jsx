import "./Goal.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Flex, Box } from "rebass";
import "react-circular-progressbar/dist/styles.css";

//import SemiCircleProgressBar from "react-progressbar-semicircle";
export default function Gaol() {
  const percentage = 50;
  return (
    <div className="v  mx-auto">
      <div className="dash_board_one">
      <span style={{color:'white', marginLeft:'80px'}}>Gaol Reached</span>
        <div className="dash_board">
          <Box
            id="container"
            style={{ width: 100, height: 100, paddingLeft: "20px" }}
          >
            {/* <SemiCircleProgressBar percentage={51}  /> */}
            <Box
              style={{ position: "relative", top: "20px" }}
              sx={{
                height: 100,
                width: 100,
              }}
            >
              <CircularProgressbar
                value={40}
                circleRatio={0.5}
                strokeWidth={20}
                styles={{
                  root: {
                    transform: "rotate(0.75turn)",
                  },
                  path: { stroke: "#FCB000", strokeLinecap: "butt" },
                  trail: { stroke: "#ffff", strokeLinecap: "butt" },
                  trailColor: "grey",
                  backgroundColor: "red",
                }}
              />
              <span
                style={{
                  position: "relative",
                  bottom: "65px",
                  marginLeft: "37px",
                  marginBottom: "80px",
                  color: "white",
                }}
              >
                40%
              </span>
            </Box>
          </Box>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                backgroundColor: "#ffff",
                padding: "10px 15px",
                borderRadius: "5px",
              }}
            >
              EMG
            </div>
            <div
              style={{
                backgroundColor: "#ffff",
                padding: "10px 15px",
                borderRadius: "5px",
                marginTop: "5px",
              }}
            >
              ROM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
