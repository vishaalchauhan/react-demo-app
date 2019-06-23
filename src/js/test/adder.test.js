import adder from '../adder'

describe('Adder', () => {
    test('adds tow numbers', () => {
        expect(adder(5, 3)).toEqual(8)
    })
})
