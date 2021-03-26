<template>
    <div id="main">

        <Header1 />
        <div class="container-row">
          <Card v-for="value in data" :key='value.id' :id='value.id' :original_title=value.original_title  :overview=value.overview :poster_path=value.poster_path />
        </div>

    </div>    
</template>

<script>

	import Header1 from '../components/Header.vue'
	import Card from '../components/Card.vue'

	export default {
		name: 'App',
		components: {
			Header1,
			Card
		},
		data(){
			return{
				data: []
			}
		},
		async mounted(){
			const config = require("../../config/config.json");

			await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
			.then(response => response.text())
			.then(result =>{
				let json = JSON.parse(result);
				this.data = json.results
			})
		}  
	}

</script>

<style>
</style>
