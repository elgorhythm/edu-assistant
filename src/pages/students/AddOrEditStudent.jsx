import "./students.scss";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { classes } from "../../CONSTS";
import { ClearOutlined, DoneOutlined } from "@mui/icons-material";
import { student } from "../../temp";

const AddOrEditStudent = (props) => {
  const type = "edit";
  const totalCount = 101;
  const user = { email: "adnan@email.com" };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let studentData = {
      name: data.get("name").toUpperCase(),
      father: data.get("father").toUpperCase(),
      admissionDate: data.get("adDate"),
      regNo: data.get("regNo"),
      dateOfBirth: data.get("dob"),
      gender: data.get("gender"),
      class: data.get("class"),
      section: data.get("section"),
      address: data.get("address"),
      contactNo: data.get("contact"),
      prospectus: {
        amount: +data.get("prospectus"),
        balance:
          type === "edit"
            ? student.prospectus.balance +
              +data.get("prospectus") -
              student.prospectus.amount
            : +data.get("prospectus"),
      },
      registration: {
        amount: +data.get("registration"),
        balance:
          type === "edit"
            ? student.registration.balance +
              +data.get("registration") -
              student.registration.amount
            : +data.get("registration"),
      },
      tuition: {
        amount: +data.get("tuition"),
        payments: type === "edit" ? student.tuition.payments : [],
      },
      arrears: +data.get("arrears"),
      createdBy: type === "edit" ? student.createdBy : user.email,
      createdAt: type === "edit" ? student.createdAt : new Date(),
    };
    console.log(studentData);
  };
  return (
    <div className="add-student">
      <h3>{type === "edit" ? "Edit Student" : "New Admission"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="text-fields-wrapper">
          <TextField
            variant="standard"
            size="small"
            required
            label="Full Name"
            name="name"
            defaultValue={type === "edit" ? student.name : ""}
            className="text-field"
            autoFocus
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Father Name"
            name="father"
            defaultValue={type === "edit" ? student.father : ""}
            className="text-field"
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Admission Date"
            name="adDate"
            className="text-field"
            type="date"
            defaultValue={type === "edit" ? student.admissionDate : ""}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Registration No (auto generates)"
            name="regNo"
            className="text-field"
            defaultValue={
              type === "edit"
                ? student.regNo
                : `${new Date().getFullYear()}-${totalCount + 1}`
            }
            InputLabelProps={{ shrink: true }}
            // disabled={true}
            InputProps={{ readOnly: true }}
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Date of Birth"
            name="dob"
            className="text-field"
            type="date"
            defaultValue={type === "edit" ? student.dateOfBirth : ""}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl className="text-field" variant="standard">
            <InputLabel>Gender *</InputLabel>
            <Select
              size="small"
              required
              label="Gender"
              name="gender"
              defaultValue={type === "edit" ? student.gender : ""}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="text-field" variant="standard">
            <InputLabel>Class *</InputLabel>
            <Select
              size="small"
              required
              label="Class"
              name="class"
              defaultValue={type === "edit" ? student.class : ""}
            >
              {classes &&
                classes.map((clas) => (
                  <MenuItem value={clas} key={clas}>
                    {clas}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            variant="standard"
            size="small"
            label="Section (optional)"
            name="section"
            className="text-field"
            defaultValue={type === "edit" ? student.section : ""}
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Address"
            name="address"
            className="text-field"
            defaultValue={type === "edit" ? student.address : ""}
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Contact No"
            name="contact"
            className="text-field"
            defaultValue={type === "edit" ? student.contactNo : ""}
          />
          <TextField
            variant="standard"
            size="small"
            required
            type="number"
            label="Prospectus Fee"
            name="prospectus"
            className="text-field"
            defaultValue={type === "edit" ? student.prospectus.amount : ""}
          />
          <TextField
            variant="standard"
            size="small"
            required
            type="number"
            label="Registration Fee"
            name="registration"
            className="text-field"
            defaultValue={type === "edit" ? student.registration.amount : ""}
          />
          <TextField
            variant="standard"
            size="small"
            required
            type="number"
            label="Tuition Fee"
            name="tuition"
            className="text-field"
            defaultValue={type === "edit" ? student.tuition.amount : ""}
          />
          <TextField
            variant="standard"
            size="small"
            required
            type="number"
            label="Arrears"
            name="arrears"
            className="text-field"
            defaultValue={0}
          />
        </div>

        <div className="buttons-wrapper">
          <button
            className="button cancel"
            onClick={() => console.log("cancel kar dia")}
            type="button"
          >
            <ClearOutlined />
          </button>
          <button className="button">
            <DoneOutlined />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrEditStudent;
