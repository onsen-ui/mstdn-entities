import 'reflect-metadata'

export const METADATA_KEY = 'entity:data'

export interface IConvertCallback {
  (convertedValue: any): any
}

export function defineCallback (value: IConvertCallback, target: Object, propertyKey: string | symbol) {
  Reflect.defineMetadata(METADATA_KEY, value, target, propertyKey)
}

export function getCallback (target: Object, propertyKey: string | symbol): IConvertCallback | undefined {
  return Reflect.getMetadata(METADATA_KEY, target, propertyKey)
}

export function getType (target: Object, propertyKey: string | symbol): Function | undefined {
  return Reflect.getMetadata('design:type', target, propertyKey)
}
