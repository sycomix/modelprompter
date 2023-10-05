import tui from './tui.js'

export default class Router {
  constructor (app, options = {}) {
    Object.assign(this, options)
    this.app = app
    this.path = options?.route || '/'
  }

  loadRoute (path = '/') {
    // Find the route object
    const route = this.app.routes.find(r => r.path === path)
    
    // If the route object exists, load the component
    if (route?.component) {
      route.component?.then(module => {
        // Set the route
        this.path = route
        // Update the this.app.routes
        this.app.routes = this.app.routes.map(r => {
          if (r.path === path) {
            r.component = new tui(this, module.default)
          }
          return r
        })
      })
    } else {
      this.path = ''
      console.error(`Route not found: ${route}`, this.routes)
    }
  }
}