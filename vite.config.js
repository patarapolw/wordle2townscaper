import { defineConfig } from 'vite'
import showdown from 'showdown'
import fs from 'fs'

export default defineConfig({
  plugins: [
    (() => {
      const moduleId = '@readme'
      const resolveModuleId = '\0' + moduleId

      const converter = new showdown.Converter({
        emoji: true
      })
      converter.setFlavor('github')

      return {
        name: 'readme-reader',
        resolveId(id) {
          if (id === moduleId) {
            return resolveModuleId
          }
        },
        load(id) {
          if (id === resolveModuleId) {
            return `export default ${JSON.stringify(
              converter.makeHtml(fs.readFileSync('./README.md', 'utf-8'))
            )}`
          }
        }
      }
    })()
  ]
})
