import "./App.css";
import StudentList from "./components/StudentList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((response) => {
        let newData = [];
        let students = response.data.students;
        students.map((student) => {
          student.addedTags = [];
          newData.push(student);
        });
        setStudentData(newData);
      })
      .catch((error) => console.log(`You encountered an error ${error}`));
  }, []);

  return (
    <div className="App">
      <StudentList studentData={studentData} />
    </div>
  );
}

export default App;
