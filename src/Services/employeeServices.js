import API from "../API/API";
import endpoints from "../API/endpoints";

class EmployeeService {
  // create Employee
  static createEmployee(user) {
    return API.post(endpoints?.api.employees?.create, user);
  }
  // update Employee
  static updateEmployee(id, user) {
    return API.put(endpoints?.api.employees?.update + id, user);
  }
  // delete Employee
  static deleteEmployee(id) {
    return API.delete(endpoints?.api.employees?.delete + id);
  }
  // fetch one Employee
  static fetchOneEmployee(id) {
    return API.get(endpoints?.api.employees?.getOne + id);
  }
  // fetch all Employee
  static fetchAllEmployee(query = "") {
    return API.get(endpoints?.api.employees?.getAll + query);
  }
}
export default EmployeeService;
