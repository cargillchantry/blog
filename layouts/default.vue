<template>
  <div class="page-wrapper h-screen w-screen">
    <div class="container mx-auto">
      <div class="bg-white bg-opacity-20 p-3 sm:rounded-b-lg flex justify-between">
        <div>
          <NuxtLink class="text-white ml-3" to="/blog/pages">
            Blog
          </NuxtLink>
        </div>
        <div class="text-white uppercase font-sans font-semibold tracking-wide relative mr-3">
          Chantry's Playground
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page-wrapper {
  background: rgb(68,93,222);
  background: linear-gradient(268deg, rgba(68,93,222,1) 0%, rgba(183,71,223,1) 54%, rgba(217,60,92,1) 100%);
}

</style>
