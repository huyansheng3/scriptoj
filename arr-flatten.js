function flatten(arr) {
  return [].concat(...arr.map(x => (Array.isArray(x) ? flatten(x) : x)))
}
