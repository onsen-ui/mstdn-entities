import { IConvertCallback } from './Reflect'

export interface Newable {
  new (...args: any[]): any
}

export function isConstructor (C: any): C is Newable {
  try {
    new C()
    return true
  } catch (err) {
    return false
  }
}

export function generateCallback (Type?: Function): IConvertCallback {
  const identity: IConvertCallback = (value: any) => value
  if (typeof Type === 'undefined') return identity
  if (/^(Number|String|Boolean|Symbol)$/.test(Type.name)) return (value: any) => Type(value)
  if (isConstructor(Type)) return (value: any) => new Type(value)
  return identity
}
