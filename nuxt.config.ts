import legacy from '@vitejs/plugin-legacy'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        plugins: [
            legacy({
                targets: ['defaults', 'chrome > 55', 'Android >= 4.4'],
              })
        ]
    }
})
