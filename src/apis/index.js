import axios from "axios";

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

export function registerUser(userdata) {
	return instance.post("signup", userdata);
}

export function loginUser(userdata) {
	return instance.post("login", userdata);
}
