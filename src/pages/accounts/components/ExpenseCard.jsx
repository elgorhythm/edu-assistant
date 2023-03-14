import "../accounts.scss";

import React from "react";

const ExpenseCard = (props) => {
  const { expensesList, searchTerm, searchBy } = props;

  return (
    <div className="expense-card">
      <table>
        <thead>
          <tr>
            <th id="sr">Sr.</th>
            <th id="date">Date</th>
            <th id="exp-category">Category</th>
            <th id="description">Description</th>
            <th id="amount">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expensesList
            .filter((expense) =>
              expense[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((expense, index) => (
              <tr key={index}>
                <td id="sr">{index + 1}</td>
                <td id="date">{expense.date}</td>
                <td id="exp-category">
                  {expense.category.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}{" "}
                  {expense.category === "Utility" && `(${expense.utilityType})`}
                  {expense.category === "Staff" && `(${expense.staffName})`}
                </td>
                <td id="description">{expense.description}</td>
                <td id="amount">{expense.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseCard;
