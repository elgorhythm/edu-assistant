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

const AddStudent = (props) => {
  const type = "edit";
  const totalCount = 101;
  const user = { email: "adnan@email.com" };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let studentData = {
      name: data.get("name").toUpperCase(),
      father: data.get("father").toUpperCase(),
      regNo: data.get("regNo"),
      dateOfBirth: data.get("dob"),
      gender: data.get("gender"),
      class: data.get("class"),
      section: data.get("section"),
      address: data.get("address"),
      prospectus: {
        amount: +data.get("prospectus"),
        balance: +data.get("prospectus"),
      },
      registration: {
        amount: +data.get("registration"),
        balance: +data.get("registration"),
      },
      tuition: {
        amount: +data.get("tuition"),
        payments: [],
      },
      arrears: +data.get("arrears"),
      contactNo: data.get("contact"),
      admissionDate: data.get("adDate"),
      createdBy: user.email,
      createdAt: new Date(),
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
            label="Registration No"
            name="regNo"
            className="text-field"
            defaultValue={
              type === "edit"
                ? student.regNo
                : `${new Date().getFullYear()}-${totalCount + 1}`
            }
            InputLabelProps={{ shrink: true }}
            disabled={true}
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Date of Birth"
            name="dob"
            className="text-field"
            type="date"
            defaultValue=""
            InputLabelProps={{ shrink: true }}
          />
          <FormControl className="text-field" variant="standard">
            <InputLabel>Gender *</InputLabel>
            <Select
              size="small"
              required
              label="Gender"
              name="gender"
              defaultValue=""
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
              defaultValue=""
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
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Address"
            name="address"
            className="text-field"
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Contact No"
            name="contact"
            className="text-field"
          />
          <TextField
            variant="standard"
            size="small"
            required
            type="number"
            label="Prospectus Fee"
            name="prospectus"
            className="text-field"
          />
          <TextField
            variant="standard"
            size="small"
            required
            type="number"
            label="Registration Fee"
            name="registration"
            className="text-field"
          />
          <TextField
            variant="standard"
            size="small"
            required
            type="number"
            label="Tuition Fee"
            name="tuition"
            className="text-field"
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

export default AddStudent;
