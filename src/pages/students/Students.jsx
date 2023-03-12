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
  const getSearchBy = (menuItem) => {
    setSearchBy(menuItem);
  };

  return studentsList ? (
    <div className="students">
      <div className="wrapper">
        <StudentsSearchContainer getSearchTerm={getSearchTerm} getSearchBy={getSearchBy} />
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
