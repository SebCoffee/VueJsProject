<template>
  <divv-if="movie">
    <label>Titre: : </label><input type="text" v-model="movie.title"> <br/>
    <label>Date de réalisation : </label><input type="text" v-model="movie.year"> <br/>
    <label>Réalisateur : </label><input type="text" v-model="movie.real"> <br/>
    <label>Synopsis : </label><input type="text" v-model="movie.synopsis"> <br/>
    <button v-on:click="validate">Modifier</button>
    <button v-on:click="deleteMovie">Supprimer le film</button>
    <br/>
  </div>
</template>

<script>

  export default {
    props: ['movie'],
    data () {
      return {
        loading: false,
        movie: null
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null;
        this.loading = true;
        var id = this.$route.params.id;
        this.movie = this.$store.getters.getMovie(id);
      },
      validate () {
        this.$store.dispatch('editMovie', this.movie);
        this.$router.push({ path: '/' });
      },
      deleteMovie () {
        this.$store.dispatch('deleteMovie', this.movie.id);
        this.$router.push({ path: '/' });
      }
    }

  }
</script>
