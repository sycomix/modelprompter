import { version } from '../../package.json'

export default {
  title: 'Home',

  init () {
    this.screen.append(this.tui.box({
      width: '100%',
      height: '100%',
      content: `{center}+-+-+-+-+-+-+-+-+-+-+-+-+-+
{center}|M|o|d|e|l|P|r|o|m|p|t|e|r|
{center}+-+-+-+-+-+-+-+-+-+-+-+-+-+
{center}{bold}v${version}{/}`,
      tags: true,
      border: {
        type: 'line'
      },
      style: {
        fg: 'white',
        bg: 'blue',
        border: {
          fg: '#f0f0f0'
        }
      }
    }))
  }
}
