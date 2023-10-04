import Router from './router'

export default class App {
  constructor (opts) {
    this.router = new Router(opts)
    this.init()
  }

  init () {
    this.router.loadRoute()
  }
}