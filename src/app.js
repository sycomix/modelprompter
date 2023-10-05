import Router from './router'
import blessed from 'blessed'

export default class App {
  constructor (opts) {
    Object.assign(this, opts)
    
    this.init()
    this.router = new Router(this, opts)
    this.router.loadRoute()
  }

  init () {
    this.root = blessed.screen({
      title: 'ModelPrompter',
      smartCSR: true,
      tabSize: 2,
      autoPadding: true,
      dockBorders: true,
      shrink: true,
    })

    // Quit on CTRL-C.
    this.root.key(['C-c'], function(ch, key) {
      return process.exit(0);
    })
  }
}