import { PersonAddOutlined, PrintOutlined } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Students = () => {
    const[searchBy, setSearchBy]=useState('name')
    const [searchTerm, setSearchTerm]=useState("")


  return (
    <div className="students">
      <div className="top-container">
        <div className="search-wrapper">
          <input onChange={e=>setSearchTerm(e.target.value)}/>
          <FormControl className="form-control" variant="standard">
            <InputLabel className="input-label">Search by</InputLabel>
            <Select size="small" 
            defaultValue="name" 
            onChange={(e)=>setSearchBy(e.target.value)}
            sx={{ fontSize: "12px", borderBottom: 'none' }}>
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
              <MenuItem value="contact" sx={{ fontSize: "12px" }}>
                Contact No
              </MenuItem>
            </Select>
          </FormControl>
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
    </div>
  );
};

export default Students;
