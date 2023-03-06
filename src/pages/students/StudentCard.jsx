import React from "react";

const StudentCard = (props) => {
  const studentsList = props.studentsList;
  return (
    <div className="student-card">
      <table>
        <thead>
          <tr>
            <th id='sm'>Sr.</th>
            <th id='xlg'>Name</th>
            <th id='xlg'>Father</th>
            <th id='md'>Class</th>
            <th id='md'>Reg No.</th>
            <th id='lg'>Contact</th>
            <th id='md'>Tuition</th>
          </tr>
        </thead>
        <tbody>
          {studentsList.map((item, index) => (
            <tr key={index}>
              <td id='sm'>{index + 1}</td>
              <td id='xlg'>{item.name}</td>
              <td id='xlg'>{item.father}</td>
              <td id='md'>{item.class}</td>
              <td id='md'>{item.regNo}</td>
              <td id='lg'>{item.contactNo}</td>
              <td id='md'>{item.tuition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCard;
