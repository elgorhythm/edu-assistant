import "./accounts.scss";
import {useState} from 'react';
import AcctsSearchContainer from "./components/AcctsSearchContainer";
import ExpenseCard from "./components/ExpenseCard";
import { expensesList } from "../../temp";


const Expenses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("date");
  const [dateRange, setDateRange] = useState("week");

  // const collectionsList = null;

  const getSearchTerm = (search) => {
    setSearchTerm(search);
  };
  const getDateRange = (range) => {
    setDateRange(range);
  };

  const getSearchBy = (menuItem) => {
    setSearchBy(menuItem);
  };

  return (
    <div className="expenses">
      <div className="wrapper">
        <AcctsSearchContainer
          getSearchTerm={getSearchTerm}
          getDateRange={getDateRange}
          getSearchBy={getSearchBy}
          title="All Expenses"
        />
        <ExpenseCard
          expensesList={expensesList}
          searchTerm={searchTerm}
          searchBy={searchBy}
        />
      </div>
    </div>
  );
};

export default Expenses;
