const stub = [
  '20%',
  '5%',
  '0%'
]

const isValidInput = value => value == null || isNaN(parseInt(value))

const filterIn = (arr) => (value) => {
  const filtered = arr.filter(rate => rate.includes(`${value}`.toLowerCase()))
  return isValidInput(value) || filtered.length === 0 ? arr : filtered
}

const filterRate = filterIn(stub)

const removeOldestCustomRate = (initial) => (rates) => {
  return [...initial, ...rates.slice(stub.length + 1)]
}

const addUniqueRate = (initial) => (rate) => {
  return [...new Set([...initial, rate])]
}

const addRate = addUniqueRate(stub)
const removeRate = removeOldestCustomRate(stub)

test('filterIn should return function', async () => {
  expect(typeof filterRate).toEqual('function')
})

test('filterRate should handle falsy input', async () => {
  const a = filterRate(null)
  expect(a).toEqual(stub)
  const b = filterRate(undefined)
  expect(b).toEqual(stub)
  const c = filterRate(false)
  expect(c).toEqual(stub)
  const d = filterRate('')
  expect(d).toEqual(stub)
})

test('filterRate should handle number input', async () => {
  const a = filterRate(0)
  expect(a).toEqual(['20%', '0%'])
  const b = filterRate(5)
  expect(b).toEqual(['5%'])
})

test('Should return unfiltered array for unmatched value', async () => {
  const a = filterRate(60)
  expect(a).toEqual(['20%', '5%', '0%'])
})

test('addUniqueRate should return a function', async () => {
  const a = addUniqueRate({ a: 1 })
  expect(typeof a).toEqual('function')
})

test('Should add new rate', async () => {
  const rates = addRate('2%')
  expect(rates).toEqual([
    '20%',
    '5%',
    '0%',
    '2%'
  ])
})

test('Should omit duplicate rate', async () => {
  const rates = addRate('5%')
  expect(rates).toEqual([
    '20%',
    '5%',
    '0%',
  ])
})

test('Should remove oldest custom value from array', async () => {
  const rates = ['20%', '5%', '0%', '6%', '15%', '17%']
  const pruned = removeRate(rates)
  expect(pruned.length).toEqual(5)
  expect(pruned).toEqual(['20%', '5%', '0%', '15%', '17%'])
})