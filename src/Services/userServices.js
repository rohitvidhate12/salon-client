import API from "../API/API";
import endpoints from "../API/endpoints";

class UserService {
  // create User
  static createUser(user) {
    return API.post(endpoints?.api.users?.create, user);
  }
  // update User
  static updateUser(id, user) {
    return API.put(endpoints?.api.users?.update + id, user);
  }
  // delete User
  static deleteUser(id) {
    return API.delete(endpoints?.api.users?.delete + id);
  }
  // fetch one User
  static fetchOneUser(id) {
    return API.get(endpoints?.api.users?.getOne + id);
  }
  // fetch all User
  static fetchAllUser(query = "") {
    return API.get(endpoints?.api.users?.getAll + query);
  }
}
export default UserService;
