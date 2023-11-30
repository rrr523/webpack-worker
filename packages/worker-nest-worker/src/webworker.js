// importScripts('https://unpkg.com/hash-wasm@4.11.0/dist/sha256.umd.min.js')

// console.log('hash-wasm loaded', hashwasm)

// v2
console.log('this is v2')

new Worker(
  new URL('./primary.js', import.meta.url)
)