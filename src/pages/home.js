import { version } from '../../package.json'
var blessed = require('blessed')

export default {
  title: 'Home',

  init () {
    this.setup()
  },

  setup () {
    this.root.append(blessed.box({
      parent: this.root,
      width: '100%',
      height: '100%',
      content: `{center}+-+-+-+-+-+-+-+-+-+-+-+-+-+
{center}|{bold}{yellow-fg}M{/yellow-fg}{/bold}|{bold}{yellow-fg}O{/yellow-fg}{/bold}|{bold}{yellow-fg}D{/yellow-fg}{/bold}|{bold}{yellow-fg}E{/yellow-fg}{/bold}|{bold}{yellow-fg}L{/yellow-fg}{/bold}|{bold}{yellow-fg}P{/yellow-fg}{/bold}|{bold}{yellow-fg}R{/yellow-fg}{/bold}|{bold}{yellow-fg}O{/yellow-fg}{/bold}|{bold}{yellow-fg}M{/yellow-fg}{/bold}|{bold}{yellow-fg}P{/yellow-fg}{/bold}|{bold}{yellow-fg}T{/yellow-fg}{/bold}|{bold}{yellow-fg}E{/yellow-fg}{/bold}|{bold}{yellow-fg}R{/yellow-fg}{/bold}|
{center}+-+-+-+-+-+-+-+-+-+-+-+-+-+
{center}{bold}v${version}{/}`,
      tags: true,
      style: {
        fg: 'white',
        bg: 'blue',
        border: {
          fg: '#f0f0f0'
        }
      }
    }))

    this.app.root.render()
  }
}