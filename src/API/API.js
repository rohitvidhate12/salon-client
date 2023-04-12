import axios from "axios";
import AuthService from "../Services/authServices";
import endpoints from "./endpoints";

const API = axios.create({ baseURL: `${endpoints.serverBaseURL}/api/v1` });

// attach the accessToken with each request by using http interceptor
API.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("accessToken");
  if (token) req.headers["Authorization"] = token;
  return req;
});

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log("REsponse : ", err);

    if (
      err?.response?.status == 403 &&
      sessionStorage.getItem("refreshToken")
    ) {
      //access token is expired

      const response = await AuthService.refreshToken();

      if (response.data?.data) {
        const { atoken, rtoken } = response.data.data;
        sessionStorage.setItem("accessToken", atoken);
        sessionStorage.setItem("refreshToken", rtoken);
        return Promise.resolve();
      } else {
        Promise.reject(err);
      }
    } else if (err?.response?.status == 406) {
      //refresh token expired
      sessionStorage.clear();
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);
export default API;
