import store from "@/store";
import axios from "axios";
import { setInterceptors } from "@/apis/common/interceptors";

const createInstance = () => {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		headers: {
			Authorization: store.state.token,
		},
	});

	return setInterceptors(instance);
};

const instance = createInstance();

export function registerUser(userdata) {
	return instance.post("signup", userdata);
}

export function loginUser(userdata) {
	return instance.post("login", userdata);
}
