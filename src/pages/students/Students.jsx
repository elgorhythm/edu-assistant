
import React, { useState } from "react";
import Loading from "../../components/loading/Loading";
import { studentsList } from "../../temp";
import StudentCard from "./components/StudentCard";
import StudentsSearchContainer from "./components/StudentsSearchContainer";

const Students = () => {
  const [searchBy, setSearchBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  // const studentsList = null;

  const getSearchTerm = (search) => {
    setSearchTerm(search);
  };

  console.log('search term in students', searchTerm)

  return studentsList ? (
    <div className="students">
      <h3>All Students</h3>
      <StudentsSearchContainer getSearchTerm={getSearchTerm} />
      <div className="students-container">
        <StudentCard
          studentsList={studentsList}
          searchTerm={searchTerm}
          searchBy={searchBy}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Students;
