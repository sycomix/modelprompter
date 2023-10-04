import Router from './router'

class App {
  constructor (opts) {
    this.router = new Router(opts)
    this.init()
  }

  init () {
    this.router.loadRoute()
  }
}

export default App