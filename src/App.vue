<template>
	<div>
		<AppHeader />
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from "@/components/Header/AppHeader.vue";

export default {
	components: {
		AppHeader,
	},
};
</script>

<style lang="scss" scoped></style>
