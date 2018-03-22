const natural = require('natural')

// console.log(natural.JaroWinklerDistance("5ssssAAAAssssss", "6sssadasdsdadasASAASDADSs"))
console.log(natural.JaroWinklerDistance('6sssadasdsdadasASAASDADSs', '5ssssAAAAssssss'))

module.exports = {
  JaroWinklerDistance: natural.JaroWinklerDistance
}
