import tui from './tui.js'

export default class Router {
  constructor (options = {}) {
    this.routes = options?.routes || []
    this.path = options?.route || '/'
    this.route = null
  }

  loadRoute (path = '/') {
    // Find the route object
    const route = this.routes.find(r => r.path === path)
    
    // If the route object exists, load the component
    if (route) {
      route.component?.then(module => {
        // Set the route
        this.path = route
        // Render the component
        this.route = new tui(module.default)
      })
    } else {
      console.error(`Route not found: ${route}`, this.routes)
    }
  }
}