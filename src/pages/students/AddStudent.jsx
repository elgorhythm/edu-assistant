import "./students.scss";
import { TextField } from "@mui/material";

const AddStudent = () => {
  const totalCount = 101;

  const handleSubmit = () => {};
  return (
    <div className="students">
      <form form onSubmit={handleSubmit}>
        <h3>New Admission</h3>
        <span> Details</span>
        <div className="input-wrappers">
          <TextField
            variant="standard"
            size="small"
            required
            label="Full Name"
            name="name"
            className="text-field"
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Father Name"
            name="father"
            className="text-field"
          />
        </div>
        <div className="input-wrappers">
          <TextField
            variant="standard"
            size="small"
            required
            label="Registration No"
            name="date"
            className="text-field"
            value={`${new Date().getFullYear()}-${totalCount + 1}`}
            InputLabelProps={{ shrink: true }}
            disabled={true}
          />
          <TextField
            variant="standard"
            size="small"
            required
            label="Admission Date"
            name="registration"
            className="text-field"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
