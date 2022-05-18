<template>
	<header>
		<div>
			<template v-if="isUserLogin">
				<span>{{ $store.state.username }}</span>
				<a href="javascript:void(0)" @click="logoutUser">로그아웃</a>
			</template>
			<template v-else>
				<router-link to="/login">Login</router-link> |
				<router-link to="/signup">Singup</router-link>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit("clearUsername");
			this.$router.push("/login");
		},
	},
};
</script>

<style lang="scss" scoped></style>
