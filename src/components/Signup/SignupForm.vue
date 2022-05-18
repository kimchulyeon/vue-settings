<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">ID:</label>
			<input type="text" v-model="username" />
		</div>
		<div>
			<label for="password">PW:</label>
			<input type="password" v-model="password" />
		</div>
		<div>
			<label for="nickname">Nickname:</label>
			<input type="text" v-model="nickname" />
		</div>
		<button type="submit">회원가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from "@/apis/index";

export default {
	data() {
		return {
			username: "",
			password: "",
			nickname: "",
			logMessage: "",
		};
	},
	methods: {
		async submitForm() {
			const userdata = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userdata);
			this.logMessage = `${data.username}님이 가입하셨습니다. `;
			this.resetForm();
		},
		resetForm() {
			this.username = "";
			this.password = "";
			this.nickname = "";
		},
	},
};
</script>
