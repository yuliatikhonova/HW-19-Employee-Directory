import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

export default function getInfo(query) {
  return axios.get(BASEURL);
};

// import axios from "axios";

// export default function getEmployeeName(query) {
//     const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
//     return axios.get(BASEURL);
// };