import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	// state
	state: {
		username: "",
		token: "",
	},
	// setState
	mutations: {
		setUsername(state, payload) {
			state.username = payload;
		},
		clearUsername(state) {
			state.username = "";
		},
		setToken(state, payload) {
			state.token = payload;
		},
	},
	// 상태가 변했을 때 감지
	getters: {
		isLogin(state) {
			return state.username !== "";
		},
	},
});
