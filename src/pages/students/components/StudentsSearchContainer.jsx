import "../students.scss";
import React from "react";
import {
  PersonAddOutlined,
  PrintOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const StudentsSearchContainer = (props) => {
  const { getSearchTerm } = props;

  return (
    <div className="students-search-container">
      <div className="search-wrapper">
        <SearchOutlined className="icon" />
        <input onChange={(e) => getSearchTerm(e.target.value)} />
        <FormControl className="form-control" variant="standard">
          <InputLabel className="input-label">Search by</InputLabel>
          <Select
            size="small"
            defaultValue="name"
            onChange={(e) => setSearchBy(e.target.value)}
            sx={{ fontSize: "12px", borderBottom: "none" }}
          >
            <MenuItem value="name" sx={{ fontSize: "12px" }}>
              Name
            </MenuItem>
            <MenuItem value="father" sx={{ fontSize: "12px" }}>
              Father
            </MenuItem>
            <MenuItem value="regNo" sx={{ fontSize: "12px" }}>
              Reg No.
            </MenuItem>
            <MenuItem value="class" sx={{ fontSize: "12px" }}>
              Class
            </MenuItem>
            <MenuItem value="contactNo" sx={{ fontSize: "12px" }}>
              Contact No
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="title-wrapper">
        <h3>All Students</h3>
      
      </div>

      <div className="buttons-wrapper">
        <button className="print">
          <PrintOutlined />
        </button>
        <button className="add">
          <PersonAddOutlined />
        </button>
      </div>
    </div>
  );
};

export default StudentsSearchContainer;
