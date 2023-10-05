var blessed = require('blessed')

export default class {
  constructor (context, opts) {
    this.app = context.app
    Object.assign(this, opts)

    // Setup the blessed instance
    this.root = blessed.box({
      parent: this.screen || this.app.root,
    })

    // Defaults and render
    this.init()
    this.root.render()
  }

  render () {
    this.root.render()
  }
}
