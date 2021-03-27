<template>
	<div id='internalheader' class="container-row">  
		
		<img id='imageHeader' v-bind:src=poster_path />

		<div class="container-header">
			<div id="original_title">Título Original: {{original_title}}</div>
			<div id="original_language">Idioma Original: {{original_language}}</div>
			<div id="overview">Resumo: {{overview}}</div>
			<div id="popularity">Nota: {{vote_average}}</div>
		</div>
	</div>
</template>

<script>
export default {
		name: 'internalheader',
			props:{
			id: Number,
			poster_path: String,
			original_title: String,
			original_language: String,
			overview: String,
			vote_average: Number
	}


}
</script>
