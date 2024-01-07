import React from "react";
import { Card } from "react-bootstrap";
import StudentCard from "./StudentCard";

const StudentList = ({ eleve }) => {
  console.log(eleve);
  return (
    <div>
      {/* THIS IS THE COMPONENT THAT WILL BE R*/}
      {eleve.map((el) => (
        <StudentCard StudObj={el} />
      ))}
    </div>
  );
};

export default StudentList;
