import { Entity } from '../Entity'
import { param, are } from '../decorators'
export class Instance extends Entity {
  @param url: string
  @param title: string
  @param description: string
  @param email: string
  @param version: string
  @are(String) urls: string[]
}
