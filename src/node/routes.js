import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from '../vue/components/movieitem.vue'
import movielist from '../vue/components/movielist.vue'
import editmovie from '../vue/components/movieEdit.vue'
import movieDetails from '../vue/components/movieDetails.vue'


let routes = [
    {
        path: '/',
        name:'list',    
        component: movielist
    },
    {
        path: '/movie/:id/edit',
        name: 'edit',
        component: editmovie
    },
    {
		path: '/movie/:id',
		name : 'details',
		component : movieDetails
	}
]

export default new VueRouter({routes});
