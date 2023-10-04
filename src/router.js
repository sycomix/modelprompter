class Router {
  constructor (options = {}) {
    this.routes = options?.routes || []
    this.route = options?.route || '/'
  }

  loadRoute (route = '/') {
    // Find the route object
    const $route = this.routes.find(r => r.path === route)
    
    // If the route object exists, load the component
    if ($route) {
      $route.component.then(module => {
        // Set the route
        this.route = route
        // Render the component
        module.default()
      })
    } else {
      console.error(`Route not found: ${route}`, this.routes)
    }
  }
}

export default Router