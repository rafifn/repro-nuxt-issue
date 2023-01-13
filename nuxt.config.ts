import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    builder: 'webpack',
    hooks: {
        'webpack:config': (configs) => {
          // configs[0] is the config for the client side
          console.log(configs)
          configs[0].target = "es5"
        }
    }
})
