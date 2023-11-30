// process

new Worker(
  /* webpackChunkName: "workers/v2-worker" */ new URL('./v2.js', import.meta.url)
)