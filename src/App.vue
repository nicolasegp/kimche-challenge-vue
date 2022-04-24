<script setup>
	import { onMounted } from 'vue'
	import { useAppStore } from './stores/appStore'
	import Form from './components/Form.vue'
	import Grid from './components/Grid.vue';

	const appStore = useAppStore()
	onMounted(() => {
		appStore.fetchApi()
	})
</script>

<template>
	<main v-if="appStore.loading" class="container grid-md my-2">
		<div class="loading loading-lg"></div>
	</main>
	<main v-else class="container grid-md my-2">
		<div class="d-none">{{ appStore.title }}</div>
		<h1 class="h1 text-bold">Country Search 🔎 <small class="text-gray">(Vue3)</small></h1>
		<Form />
		<div class="divider"></div>
		<Grid />
	</main>
</template>
