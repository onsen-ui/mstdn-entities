import { Entity } from '../Entity'
import { param } from '../decorators'
export class Tag extends Entity {
  @param name: string
  @param url: string
}
