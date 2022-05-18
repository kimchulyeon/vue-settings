import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			redirect: "/login",
		},
		{
			path: "/login",
			component: () => import("@/views/Login/LoginPage"),
		},
		{
			path: "/signup",
			component: () => import("@/views/Signup/SignupPage"),
		},
		{
			path: "/main",
			component: () => import("@/views/Main/MainPage"),
		},
		{
			path: "*",
			component: () => import("@/components/NotFoundPage/NotFoundPage"),
		},
	],
});
