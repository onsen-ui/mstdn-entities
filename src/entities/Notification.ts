import { Entity } from '../Entity'
import { Account } from './Account'
import { Status } from './Status'
import { param, is } from '../decorators'
export class Notification extends Entity {
  @param id: string
  @param type: string
  @is(Date) createdAt: Date
  @param account: Account
  @param status?: Status
}
