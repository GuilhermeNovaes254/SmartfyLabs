<template>
    
    <div class='card'>
        <a v-bind:href="'/movies?id=' + id">
            <div class="picture" v-bind:style="{ backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500'+ poster_path + ')' }"></div>

            <div class='details'>
                <div class="title">
                    {{original_title}}
                </div>
                <div class="overview">
                    {{overview}}
                </div>
            </div>
        </a>
    </div>

</template>

<script>
    export default {
        name: 'card',
        props: {
            id: Number,
            poster_path: String,
            original_title: String,
            picture: String,
            overview: String
        }


    }
</script>

<style scoped>

</style>