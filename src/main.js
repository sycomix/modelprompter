import App from './app'

new App({
  path: '/',
  routes: [
    {
      path: '/',
      component: import('./pages/home.js')
    }
  ]
})