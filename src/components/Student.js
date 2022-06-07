import React from "react";
import { useState } from "react";

const Student = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  const [tags, setTags] = useState([]);

  const findAverage = (marks) => {
    let totalMarks = marks.reduce((acc, mark) => {
      acc += parseInt(mark);
      return acc;
    }, 0);
    return totalMarks / marks.length;
  };

  const capitalizeText = (textStr) => {
    return textStr.toUpperCase();
  };

  return (
    <div key={props.key} className="allInfo">
      <div className="profileImage">
        <img src={props.student.pic} alt="" />
      </div>
      <div className="studentInfo">
        <div>
          <span>
            {capitalizeText(props.student.firstName)}{" "}
            {capitalizeText(props.student.lastName)}{" "}
          </span>
        </div>
        <div className="sideInfo">
          <div>Email: {props.student.email}</div>
          <div>Company: {props.student.company}</div>
          <div>Skill: {props.student.skill}</div>
          <div>Average: {findAverage(props.student.grades)} %</div>
          {toggle && (
            <div>
              {props.student.grades.map((grade, idx1) => (
                <div key={idx1}>
                  Test{idx1 + 1} : {"  "}
                  {grade}%
                </div>
              ))}
            </div>
          )}
          <div className="searchTag">
            <input
              type="text"
              placeholder="Add your tag"
              onChange={(event) => {
                let newTag = event.target.value;
                setTags(...tags, newTag);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="viewGrades">
        <button className="getGrades" onClick={toggler}>
          <div className="line-wrapper">
            <div className="horizontal"></div>
            <div className="vertical"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Student;
