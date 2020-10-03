import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import SideBar from "../Sidebar/Sidebar";
import "./index.scss";

export default () => {
  // const fetchmissionData = async () => {
  //   const result = await axios.get(url, {
  //     params: {
  //       launch_success: successfulLaunch,
  //       land_success: successfulLanding,
  //       launch_year: launchYear,
  //     },
  //   });
  //   setData(result.data);
  // };

  const [launchYear, setLaunchYear] = useState(null);
  const [successfulLanding, setSuccessfulLanding] = useState(null);
  const [successfulLaunch, setSuccessfulLaunch] = useState(null);

  const [data, setData] = useState(null);

  const onChangeHandler = (event, heading) => {
    const { value } = event.target;
    switch (heading) {
      case "Launch Year":
        setLaunchYear(value);
        break;
      case "Successful Launch":
        setSuccessfulLaunch(value);
        break;
      case "Successful Landing":
        setSuccessfulLanding(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.spaceXdata.com/v3/launches`, {
        params: {
          limit: 100,
          launch_success: successfulLaunch,
          land_success: successfulLanding,
          launch_year: launchYear,
        },
      });
      setData(result.data);
    };
    fetchData();
  }, [successfulLaunch, successfulLanding, launchYear]);
  return (
    <div className="containerWrapper">
      <h1 className="header">SpaceX Launch Programs</h1>
      <div className="container">
        <div className="menu">
          <SideBar
            onClickHandler={onChangeHandler}
            launchYear={launchYear}
            successfulLanding={successfulLanding}
            successfulLaunch={successfulLaunch}
          />
        </div>
        <div className="content">
          {" "}
          {data &&
            data.map((el, index) => {
              return (
                <Card
                  key={el.mission_name + index}
                  missionId={el.mission_id}
                  launchYear={el.launch_year}
                  onChange={onChangeHandler}
                  icon={el.links.mission_patch}
                  successfulLaunch={el.launch_success}
                  successfullLanding={el.land_success}
                  missionName={`${el.mission_name} # ${el.flight_number}`}
                />
              );
            })}
        </div>
      </div>
      <div className={"footer"}>
        <b> Developed by:</b>{" "}
        <span className={"footerText"}>Shrey Alkhaniya</span>
      </div>
    </div>
  );
};
