import API from "../API/API";
import endpoints from "../API/endpoints";

class AppointmentService {
  // create User
  static createAppointment(user) {
    return API.post(endpoints?.api?.appointments?.create, user);
  }
  // update User
  static updateAppointment(id, user) {
    return API.put(endpoints?.api.appointments?.update + id, user);
  }
  // delete User
  static deleteAppointment(id) {
    return API.delete(endpoints?.api.appointments?.delete + id);
  }
  // fetch one User
  static fetchOneAppointment(id) {
    return API.get(endpoints?.api.appointments?.getOne + id);
  }
  // fetch all User
  static fetchAllAppointment(query = "") {
    return API.get(endpoints?.api.appointments?.getAll + query);
  }
}
export default AppointmentService;
