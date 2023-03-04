import "./students.scss";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { classes } from "../../CONSTS";

const AddStudent = () => {
  const totalCount = 101;

  const handleSubmit = () => {};
  return (
    <div className="students">
      <form onSubmit={handleSubmit}>
        <h3>New Admission</h3>
        <span> Details</span>
        <div className="input-wrappers">
          <TextField
            variant="standard"
            size="small"
            required
            label="Full Name"
            name="name"
            defaultValue=""
            className="text-field"
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Father Name"
            name="father"
            defaultValue=""
            className="text-field"
          />
        </div>
        <div className="input-wrappers">
          <TextField
            variant="standard"
            size="small"
            required
            label="Admission Date"
            name="adDate"
            className="text-field"
            type="date"
            defaultValue=""
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Registration No"
            name="regNo"
            className="text-field"
            defaultValue={`${new Date().getFullYear()}-${totalCount + 1}`}
            InputLabelProps={{ shrink: true }}
            disabled={true}
          />
        </div>
        <div className="input-wrappers">
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
          <FormControl className="text-field">
            <InputLabel>Gender *</InputLabel>
            <Select
              variant="standard"
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
        </div>
        <div className="input-wrappers">
          <FormControl className="text-field">
            <InputLabel>Class *</InputLabel>
            <Select
              variant="standard"
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
        </div>
        <div className="input-wrappers">
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
        </div>
        <div className="input-wrappers">
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
        </div>
        <div className="input-wrappers">
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
        </div>
        <div className="input-wrappers">
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
      </form>
    </div>
  );
};

export default AddStudent;
