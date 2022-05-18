<template>
	<div>
		hello
		<Container />
	</div>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
	created() {
		console.log("hi");
	},
	components: { Container },
};
</script>
