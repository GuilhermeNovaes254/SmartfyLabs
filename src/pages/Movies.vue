<template>
    <div class='container'>
        <Back></Back>
        <Internalheader :id='data.id' :original_title=data.original_title :original_language=data.original_language :overview=data.overview :vote_average=data.vote_average :poster_path=data.poster_path ></Internalheader>
    </div>
</template>

<script>
	import Back from '../components/Back.vue'
	import Internalheader from '../components/InternalHeader.vue'

	export default {
		name: 'App',
		components: {
			Internalheader,
			Back
		},
		data(){
			return{
				data: []
			}
		},
		async mounted(){
			const config = require("../../config/config.json");
			const urlParams = new URLSearchParams(window.location.search);
			const id = urlParams.get('id');

            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}&language=en-US`)
			.then(response => response.text())
			.then(result =>{
				let json = JSON.parse(result);
				json.poster_path = 'https://image.tmdb.org/t/p/w500'+ json.poster_path
				this.data = json
			})
		}  
	}

</script>

<style>
</style>
