const onealidator = require('./one-validator')

const DI1 = { 'Stonegrey':      { domain: 'Stonegrey', range: "Dark Greay", isValid: false, msg: '' }, }
const DI2 = { 'Midnight Black': { domain: 'Midnight Black', range: "Black", isValid: false, msg: '' }, }
const DI3 = { 'Mystic Silver':  { domain: 'Mystic Silver', range: "Silver", isValid: false, msg: '' }, }
const DI4 = { 'Stonegrey':      { domain: 'Stonegrey', range: "Anthracite", isValid: false, msg: '' }, }
const DI5 = { 'Caribbean Sea':  { domain: 'Caribbean Sea', range: "Turqoise", isValid: false, msg: '' }, }
const DI6 = { 'Midnight Blue':  { domain: 'Midnight Blue', range: "Dark Blue", isValid: false, msg: '' }, }
const DI7 = { 'Dark Grey':      { domain: 'Dark Grey', range: "Stonegrey", isValid: false, msg: '' }, }
const DI8 = { 'Dark Grey':      { domain: 'Dark Grey', range: "Anthracite", isValid: false, msg: '' }, }

const validDict =  Object.assign({...DI1, ...DI2, ...DI3})
const duplicated = Object.assign({...DI1, ...DI2, ...DI1})
// invalid - duplicated domains with diff. ranges
const forks = Object.assign({...DI1, ...DI2, ...DI4})
// invalid -> two or more rows in a dict. result in cycles.
const cycles = {...DI1, ...DI7, ...DI6}
// invalid -> value in range column appears in domains col. under another entry
const chains = Object.assign({...DI1, ...DI8, ...DI5})


it("detects cycles", function() {
  onealidator.validate(cycles)
  console.log(onealidator)
  expect(onealidator.messages).toContain('Stonegrey', 'Dark Greay')
});
