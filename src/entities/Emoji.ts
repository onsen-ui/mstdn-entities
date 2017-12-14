import { Entity } from '../Entity'
import { param } from '../decorators'
export class Emoji extends Entity {
  @param shortcode: string
  @param staticUrl: string
  @param url: string
}
