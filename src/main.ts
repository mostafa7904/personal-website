import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './routes'

// css
import './assets/css/normalize.css'
import './assets/scss/overwrites.scss'

export const createApp = ViteSSG(App, {
  routes
})
