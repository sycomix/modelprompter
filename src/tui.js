var blessed = require('blessed')

export default class {
  constructor (opts) {
    this.title = opts.title || 'Untitled'
    this.render()
  }

  render () {
    console.log(this.title)
  }
}