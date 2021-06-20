import { QueryModes } from '@core/query'
import { TestLoader } from '../../tests/utils/test-loader'

describe('Scraper > Getters > getQuery()', () => {
    const tests = new TestLoader()
        .filter(({ query }) => !!Object.entries(query || {}).length)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        const modes = Object
            .entries(expected.query)
            .reduce((arr, [mode, isSupported]) => {
                if (isSupported)
                    return [...arr, mode] as QueryModes[]
                return arr
            }, [] as QueryModes[])
        it.each(modes)('%s', (mode) => {
            expect(typeof received.query[mode]).toBe('function')
        })
    }) 
})