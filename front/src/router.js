import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import SearchComponent from './components/SearchMovies/SearchComponent'

Vue.use(VueRouter)

const routes = [
  { path: '', component: Home },
  { path: '/search/movies', component: SearchComponent, name: 'searchMovies' }
]

const router = new VueRouter({
  routes
})

export default router
