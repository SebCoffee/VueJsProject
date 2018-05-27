<template>

  <div>
    <div>
      <img style="height: 200px" :src='movie.img'>
    </div>
    <div >
      <span>
        {{ movie.title }}</span>
      <p>{{movie.year}}</p>
    </div>
    <div>
      <a v-on:click="detail">Details</a>
      <a v-on:click="edit">Edit</a>
    </div>
  </div>
</template>

<script>

export default {
   props: [ "movie" ],
    data: function(){
        return {
            display_details: false
        }
    },
    methods: {
      edit() {
        this.$router.push({path: `/movie/${this.movie.id}/edit`})
      },
      remove() {
        this.$store.dispatch('Delete', this.movie.id);
      },
      detail() {
        this.$router.push({ path: `/movie/${this.movie.id}` });
      }
    }
}
</script>