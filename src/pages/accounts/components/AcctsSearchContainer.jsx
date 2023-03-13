import "../accounts.scss";

import { useState } from "react";
import {
  AddOutlined,
  DoneOutlined,
  PrintOutlined,
  SearchOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AcctsSearchContainer = (props) => {
  const { getSearchTerm, getSearchBy, getDateRange } = props;
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [range, setRange] = useState("week");

  const radioChange = (range) => {
    setRange(range);
    getDateRange(range);
  };

  return (
    <div className="accts-search-container">
      <div className="search-wrapper">
        <SearchOutlined className="icon" />
        <input onChange={(e) => getSearchTerm(e.target.value)} />
        <FormControl className="form-control" variant="standard">
          <InputLabel className="input-label">Search by</InputLabel>
          <Select
            size="small"
            defaultValue="date"
            onChange={(e) => getSearchBy(e.target.value)}
            sx={{ fontSize: "12px", borderBottom: "none" }}
          >
            <MenuItem value="date" sx={{ fontSize: "12px" }}>
              Date
            </MenuItem>
            <MenuItem value="studentName" sx={{ fontSize: "12px" }}>
              Student
            </MenuItem>
            <MenuItem value="studentRegNo" sx={{ fontSize: "12px" }}>
              Reg No.
            </MenuItem>
            <MenuItem value="category" sx={{ fontSize: "12px" }}>
              Category
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="title-wrapper">
        <h3>All Collections</h3>
        <div className="filter">
          <div
            className="icon"
            onClick={() => setFilterDisplay(!filterDisplay)}
          >
            <TuneOutlined sx={{ fontSize: "20px" }} />
          </div>
          <div
            className="filter-selector"
            style={{ display: filterDisplay ? "flex" : "none" }}
          >
            <h4>Select Range</h4>
            <div className="radios-container">
              <div className="radio-wrapper">
                1 Week
                <input
                  type="radio"
                  value="week"
                  checked={range === "week"}
                  onChange={(e) => radioChange(e.target.value)}
                />
              </div>
              <div className="radio-wrapper">
                1 Month
                <input
                  type="radio"
                  value="month"
                  checked={range === "month"}
                  onChange={(e) => radioChange(e.target.value)}
                />
              </div>
              <div className="radio-wrapper">
                3 Months
                <input
                  type="radio"
                  value="threeMonths"
                  checked={range === "threeMonths"}
                  onChange={(e) => radioChange(e.target.value)}
                />
              </div>
              <div className="radio-wrapper">
                {new Date().getFullYear()}
                <input
                  type="radiO"
                  value={`${new Date().getFullYear()}`}
                  checked={range === `${new Date().getFullYear()}`}
                  onChange={(e) => radioChange(e.target.value)}
                />
              </div>
              <div className="radio-wrapper">
                {new Date().getFullYear() - 1}
                <input
                  type="radiO"
                  value={`${new Date().getFullYear() - 1}`}
                  checked={range === `${new Date().getFullYear() - 1}`}
                  onChange={(e) => radioChange(e.target.value)}
                />
              </div>
            </div>

            <button onClick={() => setFilterDisplay(!filterDisplay)}>
              <DoneOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className="buttons-wrapper">
        <button className="print">
          <PrintOutlined />
        </button>
        <button className="add">
          <AddOutlined />
        </button>
      </div>
    </div>
  );
};

export default AcctsSearchContainer;
