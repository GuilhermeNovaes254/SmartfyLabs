import Vue from 'vue'
import './assets/styles.css';

const routes = {
  '/': 'Main',
  '/movies': 'Movies'
}

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return require('./pages/' + matchingView + '.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})


