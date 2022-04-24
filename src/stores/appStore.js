import { defineStore } from 'pinia'

const useAppStore = defineStore('useApp', {
	state: () => ({
		loading: false,
		search: '',
		filter: 1,
		countriesData: [],
	}),
	getters: {
		countries(state) {
			return state.filter === 1
				? this.groupByContinent
				: this.groupByLanguage
		},
		countriesFiltered(state) {
			return state.countriesData.filter(el => el.name.toLowerCase().includes( state.search.trim().toLowerCase() ))
		},
		groupByContinent() {
			const groups = this.countriesFiltered.reduce((groups, item) => {
				const group = groups[item.continent.name] || []
				group.push(item)
				groups[item.continent.name] = group
				return groups
			}, {})
			return Object.entries(groups)
		},
		groupByLanguage() {
			const groups = this.countriesFiltered.reduce((groups, item) => {
				item.languages.map(len => {
					const group = groups[len.name] || []
					group.push(item)
					groups[len.name] = group
				})
				return groups
			}, {})
			return Object.entries(groups)
		},
		title(state) {
			document.title = this.countriesFiltered.length > 0 && state.search.length !== 0
				? 'Countries: ' + this.countriesFiltered.length
				: 'Kimche Challenge';
		}
	},
	actions: {
		setFilter(op) {
			this.filter = op
		},
		btnFilter(op) {
			return op == this.filter
				? 'btn-primary'
				: ''
		},
		async fetchApi() {
			this.loading = true
			const res = await fetch('https://countries.trevorblades.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: `
						query getCountries {
							countries {
								name
								code
								emoji
								capital
								currency
								continent {
									name
								}
								languages {
									name
								}
							}
						}
					`,
				}),
			})
			if( ! res.ok) {
				const msg = `Error: ${res.status}`
				throw new Error(msg)
			}
			const json = await res.json()
			this.countriesData = json.data.countries
			this.loading = false
		},
	},
})

export { useAppStore }
