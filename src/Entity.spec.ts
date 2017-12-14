import { Entity } from './Entity'
import { convert, are } from './decorators'

describe('when Entity is not extended', () => {
  test('Entity should throw an error ', () => {
    expect(() => {
      new Entity({})
    }).toThrow()
  })
})

describe('when Entity is extended', () => {
  class Person extends Entity {
    @convert(name => `Mr. ${name}`) displayName: string
  }
  const john = new Person({display_name: 'John'})
  test('Entity should not throw any error when it is extended', () => {
    expect(() => {
      new Person({})
    }).not.toThrow()
  })
  test("plain object's snake_case property should be converted to camelCase property", () => {
    expect(john.displayName).toBe('Mr. John')
  })
})

describe('if properties are not decorated', () => {
  class Person extends Entity {
    @convert(name => `Mr. ${name}`) displayName: string
    id: number
  }
  const john = new Person({
    display_name: 'John',
    id: 1
  })
  test('non-decorated properties should be ignored', () => {
    expect(john).not.toHaveProperty('id')
  })
})

describe('array property', () => {
  class Person extends Entity {
    @are(Date) dates: Date[]
  }
  const dates = ['1995-12-17T03:24:00', '1995-12-17T12:54:00', '1995-12-19T15:11:00']
  const john = new Person({
    dates
  })
  test('each element of an array should be converted properly', () => {
    expect(john.dates).toEqual(dates.map(str => new Date(str)))
  })
})

