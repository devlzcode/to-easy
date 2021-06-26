import { asyncTo, syncTo } from '../dist'

const isEven = async (n: number) => {
    if (n % 2 === 0) return true
    else throw new Error('Number is not even')
}

const isOdd = (n: number) => {
    if (n % 2 !== 0)  return true
    else throw new Error('Number is not odd')
}

describe('`asyncTo` works as intended', () => {
    it('Should resolve and return the result', async () => {
        const [e, result] = await asyncTo(isEven(2))
        expect(e).toBeUndefined()
        expect(result).toBeTruthy()
    })
    it('Should reject and return an error', async () => {
        const [e, result] = await asyncTo(isEven(1))
        expect(e).toBeInstanceOf(Error)
        expect(result).toBeUndefined()
    })
})

describe('`syncTo` works as intended', () => {
    it('Should return the result', async () => {
        const [e, result] = syncTo(isOdd, 1)
        expect(e).toBeUndefined()
        expect(result).toBeTruthy()
    })
    it('Should throw an error', async () => {
        const [e, result] = syncTo(isOdd, 2)
        expect(e).toBeInstanceOf(Error)
        expect(result).toBeUndefined()
    })
})