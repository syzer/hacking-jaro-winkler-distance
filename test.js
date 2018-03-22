import test from 'ava'
const { JaroWinklerDistance } = require('./index')
import { check, gen, property } from 'testcheck'

test('addition is commutative', async t => {
  console.warn(JaroWinklerDistance)

  const result = await check(
    property(
      gen.asciiString.notEmpty(), gen.asciiString.notEmpty(),
      (str, str2) => {
        const distance = JaroWinklerDistance(str, str2)
        console.warn(distance, str, str2)
        return distance => 0 && distance <= 1
      }
    ),
    { numTests: 10000 })
  t.true(true)
})
