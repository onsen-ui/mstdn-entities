import { Entity } from '../Entity'
import { param } from '../decorators'
export class MastodonError extends Entity {
  @param error: Object
}
