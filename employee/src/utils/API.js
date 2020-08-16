import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

export default function getInfo(query) {
  return axios.get(BASEURL);
};
