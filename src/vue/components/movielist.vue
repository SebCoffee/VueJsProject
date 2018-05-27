<template>
  <div >
    <div >
      <input type="text" v-model="search" placeholder="Search title.."/>
    </div>
    <h1>Movies</h1>
    <div>movies number : {{nbMovies}}</div>
    <div class="row">
      <movie-item v-for="(movie, index) in filteredList"
                  v-bind:movie="movie"
                  v-bind:key="index" class="col-3"></movie-item>
    </div>
  

    <div>
      <h2>Add a movie : </h2>
      <label>Title : </label><input type="text" placeholder="..." v-model="newMovie.title"/> <br/>
      <label>Year: </label><input type="text" placeholder="..." v-model="newMovie.year"/> <br/>
      <label>Director : </label><input type="text" placeholder="..." v-model="newMovie.real"/> <br/>
      <label>Synopsis(fr) : </label><input type="text" placeholder="..."  v-model="newMovie.synopsis"/> <br/>
      <button type="submit" name="action" v-on:click="addMovie">
        <i class="material-icons right">send</i>
        Submit
      </button>
      <br/>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        movieTitleModif: '',
        movieModif: null,
        idMovie: -1,
        newMovie: {
          title: '',
          year: '',
          real: '',
          synopsis: '',
          showDetails: false
        },
        search: ''
      }
    },
    methods: {
      addMovie: function () {
        this.newMovie.showDetails = false;
        this.$store.dispatch('addMovie', this.newMovie);
        this.newMovie = {
          title: '',
          year: '',
          real: '',
          synopsis: '',
          showDetails: false
        };
      },
    },
    computed: {
      movies() {
        return this.$store.state.movies;
      },
      nbMovies: function () {
        return this.movies.length;
      },
      filteredList() {
        return this.movies.filter(movie => {
          var byTitle = movie.title.toLowerCase().includes(this.search.toLowerCase());
          var byDate = movie.year.toLowerCase().includes(this.search.toLowerCase());
          var byReal = movie.real.toLowerCase().includes(this.search.toLowerCase());
          return byTitle + byDate + byReal;
        })
      }
    }
  }
</script>