import axios from "axios";
const API_ENDPOINT = "/users";
const BASE_URL = "https://6431d76ad0127730d2c8fae7.mockapi.io";

// const KEY_API = "e0c08addb9dce27b15dd25ed60160779";

export async function getUsers() {
  const response = await axios.get(`${BASE_URL + API_ENDPOINT}`);
  return response.data;
}

export async function postUsers(id, counter) {
  const response = await axios({
    method: "put",
    url: `${BASE_URL + API_ENDPOINT}/${id}`,
    data: {
      followers: counter+1,
    },
  });
  // return response.data;
}
