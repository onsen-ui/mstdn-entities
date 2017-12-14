import { camelCase, snakeCase } from 'lodash'
import { getCallback } from './Reflect'
export interface IEntity {
  [index: string]: any
}
export class Entity {
  [index: string]: any

  constructor (obj: IEntity) {
    if (this.constructor.name === 'Entity') throw new TypeError('Entity should be extended')
    const propertyNames = Object.getOwnPropertyNames(obj)
    for (const propertyName of propertyNames) {
      const camel = camelCase(propertyName)
      const callback = getCallback(this, camel)
      if (callback) {
        const value = callback(obj[propertyName])
        if (value != null) {
          this[camel] = value
        }
      }
    }
  }

  toJSON () {
    const propertyNames = Object.getOwnPropertyNames(this)
    const obj: IEntity = {}
    for (const propertyName of propertyNames) {
      const snake = snakeCase(propertyName)
      const plainObject = (value => {
        try {
          return value.toJSON()
        } catch (err) {
          return value
        }
      })(this[propertyName])
      if (plainObject != null) {
        obj[snake] = plainObject
      }
    }
    return obj
  }
}
