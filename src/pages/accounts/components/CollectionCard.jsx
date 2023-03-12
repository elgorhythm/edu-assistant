import '../accounts.scss'
import React from "react";

const CollectionCard = (props) => {
  const { collectionsList, searchTerm, searchBy } = props;
  return (
    <div className="collection-card">
      <table>
        <thead>
          <tr>
            <th id="sr">Sr.</th>
            <th id="date">Date</th>
            <th id="name">Student</th>
            <th id="reg-no">Reg. No.</th>
            <th id="category">Category</th>
            <th id="month">Month</th>
            <th id="amount">Amount</th>
            <th id="amount">Balance</th>
          </tr>
        </thead>
        <tbody>
          {collectionsList
            .filter((income) =>
              income[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((income, index) => (
              <tr key={index}>
                <td id="sr" className="sm">
                  {index + 1}
                </td>
                <td id="date">{income.date}</td>
                <td id="name">
                  {income.category !== "Miscellaneous"
                    ? income.studentName
                    : "-"}
                </td>
                <td id="reg-no">
                  {income.category !== "Miscellaneous"
                    ? income.studentRegNo
                    : "-"}
                </td>
                <td id="category">{income.category}</td>
                <td id="month">
                  {income.category === "Tuition"
                    ? `${income.month}-${income.year}`
                    : "-"}
                </td>
                <td id="amount">{income.amount}</td>
                <td id="amount">
                  {income.category !== "Miscellaneous" ? income.balance : "-"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionCard;
