// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  devtools: { enabled: true },
  app: {
    buildAssetsDir: '/_nuxt/'
  }
})
