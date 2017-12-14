import { Entity } from '../Entity'
import { param } from '../decorators'
export class Report extends Entity {
  @param id: string
  @param actionTaken: string
}
