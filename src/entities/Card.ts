import { Entity } from '../Entity'
import { param } from '../decorators'
export class Card extends Entity {
  @param url: string
  @param title: string
  @param description: string
  @param image?: string
  @param type: string
  @param authorName?: string
  @param authorUrl?: string
  @param providerName?: string
  @param providerUrl?: string
  @param html?: string
  @param width?: string
  @param height?: string
}
