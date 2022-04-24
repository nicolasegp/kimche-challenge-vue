<script setup>
	import { useAppStore } from '../stores/appStore'
	const appStore = useAppStore()
</script>

<template>
	<section class="card">
		<div class="card-body">
			<div class="has-icon-left">
				<input v-model="appStore.search" type="text" class="form-input" placeholder="Enter a country name" />
				<i class="form-icon icon icon-search" />
			</div>
		</div>
		<div class="card-body">
			<div class="columns p-1">
				<div class="column col-6 hide-sm h5">Group by</div>
				<div class="column col-3 col-sm-6">
					<button @click="appStore.setFilter(1)" :class="appStore.btnFilter(1)" class="btn btn-block mx-1">
						<i class="icon icon-location" /> Continent
					</button>
				</div>
				<div class="column col-3 col-sm-6">
					<button @click="appStore.setFilter(2)" :class="appStore.btnFilter(2)" class="btn btn-block mx-1">
						<i class="icon icon-person" /> Languages
					</button>
				</div>
			</div>
		</div>
		<div class="card-footer text-right">
			<small>
				<a href="https://github.com/nicolasegp/kimche-challenge-vue">View in Github</a>
			</small>
		</div>
	</section>
</template>
