var blessed = require('blessed')

export default class {
  constructor (opts) {
    Object.assign(this, opts)

    // Setup the blessed instance
    this.tui = blessed
    this.screen = blessed.screen({
      title: opts.title || 'Untitled',
      smartCSR: this.smartCSR || true,
      tabSize: this.tabSize || 2,
      autoPadding: this.autoPadding || true,
      dockBorders: this.dockBorders || true,
    })
    
    // Defaults and render
    this.init()
    this.render()

    // Exit with ESC or CTRL+C
    this.screen.key(['escape', 'C-c'], function(ch, key) {
      return process.exit(0)
    })
  }

  render () {
    this.screen.render()
  }
}