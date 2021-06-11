import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/query/tests/utils/test-loader'
import { Processing } from '@core/query/builders'

describe('Query > Builders > Processing', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.Processing)
        .forHydrationLevel(1)
        .buildTests(Processing)
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.grade).toBe(expected.grade)
        })
        it('process', () => {
            expect(received.process).toBe(expected.process)
        })
        it('mastery', () => {
            expect(received.mastery).toEqual(expected.mastery)
        })
        it('exp', () => {
            expect(received.exp).toBe(expected.exp)
        })
        it('materials', () => {
            expect(received.materials).toEqual(expected.materials)
        })
        it('products', () => {
            expect(received.products).toEqual(expected.products)
        })
    })
})