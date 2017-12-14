import { Entity } from '../Entity'
import { Status } from './Status'
import { param } from '../decorators'
export class Context extends Entity {
  @param ancestors: Status
  @param descendants: Status
}
