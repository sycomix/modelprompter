import App from './app'

new App({
  route: '/',
  routes: [
    {
      path: '/',
      component: import('./pages/home.js')
    }
  ]
})