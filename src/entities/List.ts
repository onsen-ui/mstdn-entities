import { Entity } from '../Entity'
import { param } from '../decorators'
export class List extends Entity {
  @param id: string
  @param title: string
}
