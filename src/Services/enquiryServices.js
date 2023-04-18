import API from "../API/API";
import endpoints from "../API/endpoints";

class EnquiryService {
  // create Enquiry
  static createEnquiry(user) {
    return API.post(endpoints?.api.enquiries?.create, user);
  }
  // update Enquiry
  static updateEnquiry(id, user) {
    return API.put(endpoints?.api.enquiries?.update + id, user);
  }
  // delete Enquiry
  static deleteEnquiry(id) {
    return API.delete(endpoints?.api.enquiries?.delete + id);
  }
  // fetch one Enquiry
  static fetchOneEnquiry(id) {
    return API.get(endpoints?.api.enquiries?.getOne + id);
  }
  // fetch all Enquiry
  static fetchAllEnquiry(query = "") {
    return API.get(endpoints?.api.enquiries?.getAll + query);
  }
}
export default EnquiryService;
