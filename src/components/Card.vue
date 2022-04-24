<script setup>
	const props = defineProps({
		country: Object
	})
</script>

<template>
	<div class="column col-6 col-sm-12 my-2">
		<div class="card">
			<div class="card-header">
				<div class="card-title h5 text-ellipsis" :title="props.country.name">
					{{ props.country.emoji }} {{ props.country.name }}
				</div>
			</div>
			<div class="card-body">
				<ul>
					<li><strong>Capital:</strong> {{ props.country.capital || '--' }}</li>
					<li><strong>Currency:</strong> {{ props.country.currency || '--' }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
