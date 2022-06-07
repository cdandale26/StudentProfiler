import React from "react";
import "./StudentList.css";
import Student from "./Student";
import { useState } from "react";

const StudentList = (props) => {
  const [searchName, setSearchName] = useState("");

  return (
    <>
      <div className="searchName">
        <input
          type="text"
          placeholder="Search by Name"
          onChange={(event) => {
            setSearchName(event.target.value);
          }}
        ></input>
      </div>

      {props.studentData
        .filter((student) => {
          if (searchName === "") {
            return student;
          } else if (
            student.firstName
              .toLowerCase()
              .includes(searchName.toLowerCase()) ||
            student.lastName.toLowerCase().includes(searchName.toLowerCase())
          ) {
            return student;
          } else {
            return "";
          }
        })
        .map((student, index) => (
          <Student key={index} student={student} />
        ))}
    </>
  );
};

export default StudentList;
