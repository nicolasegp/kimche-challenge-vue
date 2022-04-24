<script setup>
	import Card from './Card.vue'
	import { useAppStore } from '../stores/appStore'
	import Empty from './Empty.vue';
	const appStore = useAppStore()
</script>

<template>
	<section>
		<Empty v-if="appStore.search.length === 0 || appStore.countries.length === 0" />
		<div v-else v-for="(groups, index) in appStore.countries" :key="index">
			<div class="h3">{{ groups[0] }}</div>
			<div className="columns p-1">
				<Card v-for="(obj, idx) in groups[1]" :key="idx" :country="obj" />
			</div>
			<div className="divider"></div>
		</div>
	</section>
</template>
