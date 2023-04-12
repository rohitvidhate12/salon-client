import API from "../API/API";
import endpoints from "../API/endpoints";

class AuthService {
  static adminLogin(user) {
    return API.post(endpoints.api.auth.adminLogin, user);
  }
  static studentLogin(student) {
    return API.post(endpoints.api.auth.studentLogin, student);
  }
  static validateToken() {
    const token = sessionStorage.getItem("accessToken");

    if (!token) return Promise.reject("Invalid Token");
    return API.post(endpoints.api.auth.validateToken, { token });
  }
  static refreshToken() {
    const accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (!refreshToken) return Promise.reject("Token not available");
    return API.post(endpoints.api.auth.refreshToken, {
      accessToken,
      refreshToken,
    });
  }
}
export default AuthService;
