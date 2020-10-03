import React from "react";
import "./index.scss";

export default (props) => {
  const {
    icon,
    missionId,
    launchYear,
    missionName,
    successfulLaunch,
    successfulLanding,
  } = props;
  return (
    <div className={"cardWrapper"}>
      <div className={"iconWrapper"}>
        <img alt="" src={icon} className={"icon"}></img>
      </div>
      <div className={"cardInfo"}>
        <div className={"cardName"}>{missionName}</div>
        <div className={"missionInfo"}>
          <ul className={"missionHeadingList"}>
            Mission Ids:
            {missionId &&
              missionId.map((el, index) => (
                <li key={index} className={"missionId"}>
                  {el}
                </li>
              ))}
          </ul>
          <div className={"missionHeading"}>
            Launch Year: <span className={"missionId"}>{launchYear}</span>
          </div>
          <div className={"missionHeading"}>
            Successful
            <br /> Launch:{" "}
            <span className={"missionId"}>
              {successfulLaunch ? "true" : "false"}
            </span>
          </div>
          <div className={"missionHeading"}>
            Successful
            <br />
            Landing: <span className={"missionId"}>{successfulLanding}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
