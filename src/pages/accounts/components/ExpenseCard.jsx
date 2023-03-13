import "../accounts.scss";

import React from 'react'

const ExpenseCard = (props) => {
  const { expensesList, searchTerm, searchBy } = props;

  return (
    <div className="expense-card">
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
          {expensesList
            .filter((expense) =>
              expense[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((expense, index) => (
              <tr key={index}>
                <td id="sr" className="sm">
                  {index + 1}
                </td>
                <td id="date">{expense.date}</td>
                <td id="name">
                  {expense.category !== "Miscellaneous"
                    ? expense.studentName
                    : "-"}
                </td>
                <td id="reg-no">
                  {expense.category !== "Miscellaneous"
                    ? expense.studentRegNo
                    : "-"}
                </td>
                <td id="category">
                  {expense.category.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}
                </td>
                <td id="month">
                  {expense.category === "Tuition"
                    ? `${expense.month}-${expense.year}`
                    : "-"}
                </td>
                <td id="amount">{expense.amount}</td>
                <td id="amount">
                  {expense.category !== "Miscellaneous" ? expense.balance : "-"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseCard