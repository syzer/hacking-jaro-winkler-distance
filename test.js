import test from 'ava'
import { check, gen }  from 'ava-check'

test('addition is commutative', check(gen.int, gen.int, (t, numA, numB) => {
  t.true(numA + numB === numB + numA)
}))
