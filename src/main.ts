import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'

// css
import './assets/css/normalize.css'
import './assets/scss/overwrites.scss'

export const createApp = ViteSSG(App, { routes }, ({ app, initialState }) => {
  const pinia = createPinia()
  app.use(pinia)

  if (import.meta.env.SSR) initialState.pinia = pinia.state.value
  else pinia.state.value = initialState.pinia || {}
})
