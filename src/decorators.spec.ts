import { param, is, are, convert } from './decorators'
import { getCallback, IConvertCallback } from './Reflect'

const mock = jest.fn()
class Person {
  @param name: string
  @is(Date) registered: string
  @convert(mock) converted: any
  @are(Number) numbers: number[]
}
const john = new Person()

describe('param decorator', () => {
  test('@param gives metadata', () => {
    const callback = getCallback(john, 'name')
    expect(callback).toBeDefined()
  })
  test('@param converts the value to proper type', () => {
    const callback = getCallback(john, 'name') as IConvertCallback
    expect(callback(5)).toBe('5')
  })
})

describe('is decorator', () => {
  test('@is gives metadata', () => {
    const callback = getCallback(john, 'registered')
    expect(callback).toBeDefined()
  })
  test('@is converts the value to proper type', () => {
    const callback = getCallback(john, 'registered') as IConvertCallback
    expect(callback('2011-10-05T14:48:00.000Z')).toEqual(new Date('2011-10-05T14:48:00.000Z'))
  })
})

describe('convert decorator', () => {
  test('@convert gives metadata', () => {
    const callback = getCallback(john, 'converted')
    expect(callback).toBe(mock)
  })
})

describe('are decorator', () => {
  test('@are gives metadata', () => {
    const callback = getCallback(john, 'numbers')
    expect(callback).toBeDefined()
  })
  test('@are converts each element of an array to proper type', () => {
    const callback = getCallback(john, 'numbers') as IConvertCallback
    expect(callback(['1', '5', '23'])).toEqual([1, 5, 23])
  })  
})
