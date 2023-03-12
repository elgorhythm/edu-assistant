import '../students.scss'
import React from "react";

const StudentCard = (props) => {
  const {studentsList, searchTerm, searchBy} = props

  return (
    <div className="student-card">
      <table>
        <thead>
          <tr>
            <th id="sr">Sr.</th>
            <th id="name">Name</th>
            <th id="father">Father</th>
            <th id="class">Class</th>
            <th id="reg-no">Reg No.</th>
            <th id="contact">Contact</th>
            <th id="tuition">Tuition</th>
          </tr>
        </thead>
        <tbody>
          {studentsList
            .filter((student) =>
              student[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td id="sr" className="sm">
                  {index + 1}
                </td>
                <td id="name">{item.name}</td>
                <td id="father">{item.father}</td>
                <td id="class">{item.class}</td>
                <td id="reg-no">{item.regNo}</td>
                <td id="contact">{item.contactNo}</td>
                <td id="tuition">{item.tuition}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCard;
