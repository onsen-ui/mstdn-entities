import { Entity } from '../Entity'
import { param } from '../decorators'
export class Application extends Entity {
  @param name: string
  @param website?: string
}
