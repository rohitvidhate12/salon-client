import AppointmentData from "./AdminPanel/AppointmentData";
import EmployersData from "./AdminPanel/EmployersData";
import EnquiryDetails from "./AdminPanel/EnquiryDetails";
import RegisteredUsers from "./AdminPanel/RegisteredUsers";
import "./App.css";
import EnquiryForm from "./Components/BookAppointment/AppointmentForm";
import Dashboard from "./Components/Dashboard/dashboard";

const App = () => {
  // addUser({ name: "Rohit" });
  return (
    <div className="App">
      <Dashboard />
      {/* <EnquiryForm /> */}
      {/* <RegisteredUsers /> */}
      {/* <AppointmentData /> */}
      {/* <EmployersData /> */}
      {/* <EnquiryDetails /> */}
    </div>
  );
};

export default App;
