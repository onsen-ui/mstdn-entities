import { getType, defineCallback, getCallback } from './Reflect'
const dummy: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {}

class Car {
  @dummy name: string
}

class Person {
  @dummy name: string
  @dummy age: number
  @dummy premium: boolean
  @dummy friends: string[]
  @dummy registered: Date
  @dummy cars: Car[]
  @dummy favoriteCar: Car
  @dummy favoriteNumber: string | number
  @dummy nullValue: null
  @dummy optional?: number
  nonDecoratedProperty: number
}

const john = new Person()

test('string', () => {
  expect(getType(john, 'name')).toBe(String)
})
test('number', () => {
  expect(getType(john, 'age')).toBe(Number)
})
test('boolean', () => {
  expect(getType(john, 'premium')).toBe(Boolean)
})
test('array should be "Array"', () => {
  expect(getType(john, 'friends')).toBe(Array)
})
test('date object should be "Object"', () => {
  expect(getType(john, 'registered')).toBe(Object)
})
test('cars should be "Array"', () => {
  expect(getType(john, 'cars')).toBe(Array)
})
test('UserClass', () => {
  expect(getType(john, 'favoriteCar')).toBe(Car)
})
test('"string | number" should be handled as "Object"', () => {
  expect(getType(john, 'favoriteNumber')).toBe(Object)
})
test('null should be handled as undefined', () => {
  expect(getType(john, 'nullValue')).toBeUndefined()
})
test('optional property', () => {
  expect(getType(john, 'optional')).toBe(Number)
})
test('nonDecoratedProperty should be handled as undefined', () => {
  expect(getType(john, 'nonDecoratedProperty')).toBeUndefined()
})

const fn = jest.fn()
defineCallback(fn, john, 'name')
test('Custom metadata', () => {
  expect(getCallback(john, 'name')).toBe(fn)
})
