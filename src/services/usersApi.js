import axios from "axios";
const API_ENDPOINT = "/users";
const BASE_URL = "https://6431d76ad0127730d2c8fae7.mockapi.io";

export async function getUsers(page = 1) {
  const response = await axios.get(
    `${BASE_URL + API_ENDPOINT}?page=${page}&limit=3`
  );
  return response.data;
}

export async function postUsers(id, followers, isfollow) {
  const num = isfollow ? followers - 1 : followers + 1;
  const response = await axios({
    method: "put",
    url: `${BASE_URL + API_ENDPOINT}/${id}`,
    data: {
      followers: num,
    },
  });
  return response.data;
}

export async function getAllUsers() {
  const response = await axios.get(
    `${BASE_URL + API_ENDPOINT}`
  );
  return response.data;
}
