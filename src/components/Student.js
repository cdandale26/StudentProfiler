import React from "react";
import { useState } from "react";
import "./StudentList.css";

const Student = (props) => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  /** Function to add tags for individual Students */
  const addTag = () => {
    props.student.addTagsField.push(text);
    setText("");
  };

  /**Fucnction to show the grades section of the student */
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  /** Function to find the average grades of the student */
  const findAverage = (marks) => {
    let totalMarks = marks.reduce((acc, mark) => {
      acc += parseInt(mark);
      return acc;
    }, 0);
    return totalMarks / marks.length;
  };

  /**Function to capitalize the names of individual students */
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
          <div className="listedTags">
            <ul>
              {props.student.addTagsField.map((tag, index) => (
                <li className="tagValue" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="searchTag">
            <input
              className="tagInput"
              type="text"
              placeholder="Add a tag"
              onChange={(e) => setText(e.target.value)}
              value={text}
              onKeyPress={(e) => (e.key === "Enter" ? addTag() : "")}
            />
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
