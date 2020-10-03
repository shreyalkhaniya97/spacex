import React from "react";
import Button from "../Button/Button";
import "./index.scss";

const Sidebar = ({
  onClickHandler,
  launchYear,
  successfulLanding,
  successfulLaunch,
}) => {
  const data = [
    {
      id: 1,
      heading: "Launch Year",
      elements: [
        { id: 1, text: "2006" },
        { id: 2, text: "2007" },
        { id: 3, text: "2008" },
        { id: 4, text: "2009" },
        { id: 5, text: "2010" },
        { id: 6, text: "2011" },
        { id: 7, text: "2012" },
        { id: 8, text: "2013" },
        { id: 9, text: "2014" },
        { id: 10, text: "2015" },
        { id: 11, text: "2016" },
        { id: 12, text: "2017" },
        { id: 13, text: "2018" },
        { id: 14, text: "2019" },
        { id: 15, text: "2020" },
      ],
    },
    {
      id: 2,
      heading: "Successful Launch",
      elements: [
        { id: 1, text: "true" },
        { id: 2, text: "false" },
      ],
    },
    {
      id: 3,
      heading: "Successful Landing",
      elements: [
        { id: 1, text: "true" },
        { id: 2, text: "false" },
      ],
    },
  ];
  return (
    <div className={"filterContainer"}>
      <div className={"filterHeading"}>Filters</div>
      {data &&
        data.map((el, id) => {
          return (
            <div key={id}>
              <div className={"headingWrapper"}>
                <p className={"heading"}>{el.heading}</p>
              </div>
              <div className={"filterWrapper"}>
                {el.elements &&
                  el.elements.map((element, index) => {
                    return (
                      <div className={"filterButtonWrapper"} key={index}>
                        <Button
                          key={index}
                          selected={
                            el.heading === "Launch Year"
                              ? launchYear === element.text
                              : el.heading === "Successful Launch"
                              ? successfulLaunch === element.text
                              : successfulLanding === element.text
                          }
                          text={element.text}
                          onClickHandler={(e) => onClickHandler(e, el.heading)}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Sidebar;
