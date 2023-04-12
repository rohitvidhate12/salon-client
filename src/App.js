import AppointmentData from "./AdminPanel/AppointmentData";
import EmployersData from "./AdminPanel/EmployersData";
import RegisteredUsers from "./AdminPanel/RegisteredUsers";
import "./App.css";
import EnquiryForm from "./Components/BookAppointment/EnquiryForm";
import Dashboard from "./Components/Dashboard/dashboard";

const App = () => {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      {/* <RegisteredUsers /> */}
      {/* <EnquiryForm /> */}
      <AppointmentData />
      {/* <EmployersData /> */}
    </div>
  );
};

export default App;
