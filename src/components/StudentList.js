import React from "react";
import "./StudentList.css";
import Student from "./Student";
import { useState } from "react";

const StudentList = (props) => {
  const [searchName, setSearchName] = useState("");
  const [searchTag, setSearchTag] = useState("");

  return (
    <>
      <div className="searchFields">
        <input
          type="text"
          placeholder=" Search by name"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Search by tag"
          onChange={(e) => setSearchTag(e.target.value)}
        />
      </div>

      {props.studentData
        .filter((student) => {
          if (searchName === "" && searchTag === "") {
            return student;
          } else if (
            student.firstName
              .toLowerCase()
              .includes(searchName.toLowerCase()) ||
            student.lastName.toLowerCase().includes(searchName.toLowerCase())
          ) {
            if (searchTag === "") {
              return student;
            } else if (
              student.addTagsField.filter((tag) =>
                tag.toLowerCase().includes(searchTag)
              ).length >= 1
            ) {
              return student;
            }
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
