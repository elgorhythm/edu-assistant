import { EditOutlined, SmartphoneOutlined } from "@mui/icons-material";

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
            <div className="contact">
              <SmartphoneOutlined className="icon" />
              <span>03006536596</span>
            </div>
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
              <b>Prospectus Fee: </b> 500 &emsp; &emsp;
              <i>
                <b>Balance: </b>
                300
              </i>
            </span>
            <span>
              <b>Registration Fee: </b> 3000 &emsp; &emsp;
              <i>
                <b>Balance: </b>
                3000
              </i>
            </span>

            <span>
              <b>Tuition Fee: </b> 4500
            </span>
            <span>
              <b>Arrears: </b> 2345
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
