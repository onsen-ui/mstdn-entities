import { defineCallback, getType, IConvertCallback } from './Reflect'
import { isConstructor, generateCallback } from './helpers'

export function convert (callback: IConvertCallback): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    defineCallback(callback, target, propertyKey)
  }
}

export function is (Type: Function): PropertyDecorator {
  const callback = generateCallback(Type)
  return convert(callback)
}

export function are (Type: Function): PropertyDecorator {
  const eachCallback = generateCallback(Type)
  const callback = (arr: any[]) => arr.map(eachCallback)
  return convert(callback)
}

export function param (target: Object, propertyKey: string | symbol) {
  const Type = getType(target, propertyKey)
  const callback = generateCallback(Type)
  defineCallback(callback, target, propertyKey)
}
