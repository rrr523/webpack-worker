import 'worker-nest-worker'

console.log('111')
console.log(import.meta)
console.log(import.meta.url)
console.log(__webpack_public_path__)
// console.log(new URL('../node_modules/worker-nest-worker/dist/bundle.js', import.meta.url))
// new Worker(new URL('../node_modules/worker-nest-worker/dist/bundle.js', import.meta.url))

// ;(async () => {
//   await import('./worker-nest-worker')
// })()