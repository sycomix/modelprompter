import App from './app'
import blessed from 'blessed'
import { stringify } from 'flatted'

const app = new App({
  path: '/',
  routes: [
    {
      path: '/',
      component: import('./pages/home.js')
    }
  ]
})

/**
 * Override console.log to a new screen
 */
console.error = console.warn = console.log = (...args) => {
  const logger = blessed.log({
    parent: app.root,
    width: '90%',
    left: 'center',
    top: 'center',

    content: stringify(args),

    tags: true,
    keys: true,
    vi: true,
    mouse: true,
    scrollback: 100,

    scrollbar: {
      ch: ' ',
      inverse: true
    },
    border: 'line',
    scrollbar: {
      ch: ' ',
      track: {
        bg: 'yellow'
      },
      style: {
        inverse: true
      }
    }
  })

  logger.focus()
  app.root.render()

  // Close modal
  logger.key(['escape'], function(ch, key) {
    logger.destroy()
    // Render the app screen
    app.root.render()
  })
}
