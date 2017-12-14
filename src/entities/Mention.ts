import { Entity } from '../Entity'
import { param } from '../decorators'
export class Mention extends Entity {
  @param url: string
  @param username: string
  @param acct: string
  @param id: string
}
