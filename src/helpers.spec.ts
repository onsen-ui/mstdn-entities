import { isConstructor, generateCallback } from './helpers'

describe('isConstructor', () => {
  test('undefined is not a Constructor', () => {
    expect(isConstructor(undefined)).toBe(false)
  })
  test('null is not a Constructor', () => {
    expect(isConstructor(null)).toBe(false)
  })
  test('String is a Constructor', () => {
    expect(isConstructor(String)).toBe(true)
  })
  test('"string" is not a Constructor', () => {
    expect(isConstructor('string')).toBe(false)
  })
  test('wrapped string object is not a Constructor', () => {
    expect(isConstructor(new String('string'))).toBe(false)
  })
  test('Symbol is not a Constructor', () => {
    expect(isConstructor(Symbol)).toBe(false)
  })
  test('Math is not a Constructor', () => {
    expect(isConstructor(Math)).toBe(false)
  })
  test('Array is a Constructor', () => {
    expect(isConstructor(Array)).toBe(true)
  })
  test('[] is not a Constructor', () => {
    expect(isConstructor([])).toBe(false)
  })
  test('Object is a Constructor', () => {
    expect(isConstructor(Object)).toBe(true)
  })
  test('{} is not a Constructor', () => {
    expect(isConstructor({})).toBe(false)
  })
  test('Function is a Constructor', () => {
    expect(isConstructor(Function)).toBe(true)
  })
  test('function is a Constructor', () => {
    expect(isConstructor(() => {})).toBe(true)
  })
  test('custom static class is not a Constructor', () => {
    const UserStaticClass = {
      constructor () {
        throw new TypeError('UserStaticClass is not a constructor.')
      }
    }
    expect(isConstructor(UserStaticClass)).toBe(false)
  })
})

describe('generateCallback', () => {
  test('if no argument, return the same value', () => {
    expect(generateCallback()(4)).toBe(4)
  })
  test('string to number(integer)', () => {
    expect(generateCallback(Number)('123')).toBe(123)
  })
  test('string to number(float)', () => {
    expect(generateCallback(Number)('456.789')).toBe(456.789)
  })
  test('number to string', () => {
    expect(generateCallback(String)(123)).toBe('123')
  })
  test('boolean to string', () => {
    expect(generateCallback(String)(true)).toBe('true')
  })
  test('number to boolean(true)', () => {
    expect(generateCallback(Boolean)(1)).toBe(true)
  })
  test('number to boolean(false)', () => {
    expect(generateCallback(Boolean)(0)).toBe(false)
  })
  test('string to boolean(true)', () => {
    expect(generateCallback(Boolean)('string')).toBe(true)
  })
  test('string to boolean(false)', () => {
    expect(generateCallback(Boolean)('')).toBe(false)
  })
  test('Array type assertion should be done properly', () => {
    expect(generateCallback(Array)(5)).toEqual(new Array(5))
  })
  test('Date type assertion should be done properly', () => {
    expect(generateCallback(Date)('2011-10-05T14:48:00.000Z')).toEqual(new Date('2011-10-05T14:48:00.000Z'))
  })
  test('if argument is not a constructor, return the same value', () => {
    const EvilClass = {
      constructor () {
        throw new TypeError('Actually, EvilClass is not a constructor.')
      }
    } as any as Function
    expect(generateCallback(EvilClass)(123)).toBe(123)
  })  
})
