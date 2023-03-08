import { EditOutlined } from "@mui/icons-material";

const StudentDetails = () => {
  return (
    <div className="student-details">
      <div className="wrapper">
        <div className="top">
          <button>
            <EditOutlined className="icon" />
          </button>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <h3>Student Student Student</h3>
            <span>contact no here</span>
          </div>
          <div className="right">
            <h3>Student Details</h3>

            <span>
              <b>Father: </b> father
            </span>
            <span>
              <b>Registration No.: </b> father
            </span>
            <span>
              <b>Class: </b> father
            </span>
            <span>
              <b>Section: </b> father
            </span>
            <span>
              <b>Date of Birth: </b> father
            </span>
            <span>
              <b>Gender: </b> father
            </span>
            <span>
              <b>Address: </b> father
            </span>
            <span>
              <b>Admission Date: </b> father
            </span>
            <span>
              <b>Prospectus Fee: </b> father
            </span>
            <span>
              <b>Registration Fee: </b> father
            </span>
            <span>
              <b>Address: </b> father
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
