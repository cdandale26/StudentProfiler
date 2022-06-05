import React from "react";
import "./Student.css";

const Student = (props) => {
  const findAverage = (marks) => {
    let totalMarks = marks.reduce((acc, mark) => {
      acc += parseInt(mark);
      return acc;
    }, 0);
    return (totalMarks / marks.length).toFixed(2);
  };

  return (
    <>
      {props.studentData.map((student) => (
        <div key={student.email}>
          <div>
            <img src={student.pic} alt="" />
          </div>
          <div className="StudentInfo">
            <div>
              <h3>
                {student.firstName} {student.lastName}{" "}
              </h3>
            </div>
            <div>Email:{student.email}</div>
            <div>Company:{student.company}</div>
            <div>Skill:{student.skill}</div>
            <div>Average:{findAverage(student.grades)} %</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Student;
