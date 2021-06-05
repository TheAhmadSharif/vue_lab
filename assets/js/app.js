const app = Vue.createApp({
	data() {
		return {
			first_name: "James",
			last_name: "Bond",
			gender: "female",
			profile: "https://randomuser.me/api/portraits/men/10.jpg"
		}
	},
	methods: {
		getUserInfo() {
			console.log(this.first_name);
		},
	},
});

app.mount('#app');