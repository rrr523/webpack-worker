// process

new Worker(
  new URL('./webworker.js', import.meta.url)
)