const natural = require('natural')

// console.log(natural.JaroWinklerDistance("5ssssAAAAssssss", "6sssadasdsdadasASAASDADSs"))
// console.log(natural.JaroWinklerDistance('not', 'same'))

module.exports = {
  JaroWinklerDistance: natural.JaroWinklerDistance
}
