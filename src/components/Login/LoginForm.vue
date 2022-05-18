<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username"></label>
			<input type="text" v-model="username" />
		</div>
		<div>
			<label for="password"></label>
			<input type="password" v-model="password" />
		</div>
		<button type="submit" :disabled="!isUsernameValid || password.length < 2">로그인</button> <br />
		<small>{{ logMessage }}</small>
	</form>
</template>

<script>
import { loginUser } from "@/apis/index";
import { validateEmail } from "@/utils/validation";

export default {
	data() {
		return {
			username: "",
			password: "",
			logMessage: "",
			isError: false,
		};
	},

	methods: {
		async submitForm() {
			const userdata = {
				username: this.username,
				password: this.password,
			};
			try {
				const { data } = await loginUser(userdata);
				this.$store.commit("setToken", data.token);
				this.$store.commit("setUsername", data.user.username);
				this.$router.push("/main");
			} catch (error) {
				error.response.data ? (this.logMessage = "아이디 또는 비밀번호가 일치하지 않습니다.") : "";
				this.isError = true;
			} finally {
				this.resetForm();
			}
		},

		resetForm() {
			this.username = "";
			this.password = "";
		},
	},

	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
};
</script>
