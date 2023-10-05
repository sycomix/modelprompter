import { version } from '../../package.json'
import blessed from 'blessed'

import fs from 'fs'
import path from 'path'
const envPath = path.join(__dirname, '../../.env')

export default {
  title: 'Home',

  init () {
    // Different 
    this.setupWizard = {
      // The intro text
      intro: null,
      // The main box holding the setup wizard
      window: null,
      // The form
      form: null,
      // The form fields
      fields: {}
    }
    
    this.setup()
  },

  setup () {
    this.root.append(blessed.box({
      parent: this.root,
      content: `{center}+-+-+-+-+-+-+-+-+-+-+-+-+-+
{center}|{bold}{yellow-fg}M{/yellow-fg}{/bold}|{bold}{yellow-fg}O{/yellow-fg}{/bold}|{bold}{yellow-fg}D{/yellow-fg}{/bold}|{bold}{yellow-fg}E{/yellow-fg}{/bold}|{bold}{yellow-fg}L{/yellow-fg}{/bold}|{bold}{yellow-fg}P{/yellow-fg}{/bold}|{bold}{yellow-fg}R{/yellow-fg}{/bold}|{bold}{yellow-fg}O{/yellow-fg}{/bold}|{bold}{yellow-fg}M{/yellow-fg}{/bold}|{bold}{yellow-fg}P{/yellow-fg}{/bold}|{bold}{yellow-fg}T{/yellow-fg}{/bold}|{bold}{yellow-fg}E{/yellow-fg}{/bold}|{bold}{yellow-fg}R{/yellow-fg}{/bold}|
{center}+-+-+-+-+-+-+-+-+-+-+-+-+-+
{center}{bold}v${version}{/}`,
      tags: true,
    }))

    this.checkForEnv()
    this.app.root.render()
  },

  /**
   * Show the setup wizard if no .env file exists
   */
  checkForEnv () {
    if (!fs.existsSync(envPath)) {
      // Window
      this.setupWizard.window = blessed.form({
        parent: this.root,
        padding: 1,
        keys: true,
        width: '80%',
        left: 'center',
        top: 'center',
        border: 'line',
        style: {
          fg: 'white',
          bg: 'blue',
        }
      })

      // Intro
      this.setupWizard.introText = blessed.box({
        parent: this.setupWizard.window,
        content: `{red-fg}{bold}SETUP{/bold}{/red-fg}

Welcome! Before starting, we need to set up your environment.`,
        tags: true,
        style: {
          fg: 'white',
          bg: 'blue',
        }
      })
    } 
  }
}