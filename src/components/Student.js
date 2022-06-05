import React from "react";
import "./Student.css";

const Student = (props) => {
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
    <>
      {props.studentData.map((student) => (
        <div key={student.email} className="allInfo">
          <div className="profileImage">
            <img src={student.pic} alt="" />
          </div>
          <div className="studentInfo">
            <div>
              <span>
                {capitalizeText(student.firstName)}{" "}
                {capitalizeText(student.lastName)}{" "}
              </span>
            </div>
            <div className="sideInfo">
              <div>Email: {student.email}</div>
              <div>Company: {student.company}</div>
              <div>Skill: {student.skill}</div>
              <div>Average: {findAverage(student.grades)} %</div>
              {/**<div>
              {student.grades.map((grade, idx) => (
                <div>
                  Test{idx + 1} : {"  "}
                  {grade}%
                </div>
              ))}
              </div> */}
            </div>
          </div>
          <div className="viewGrades">+</div>
        </div>
      ))}
    </>
  );
};

export default Student;
