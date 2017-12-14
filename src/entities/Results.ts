import { Entity } from '../Entity'
import { Account } from './Account'
import { Status } from './Status'
import { are } from '../decorators'
export class Results extends Entity {
  @are(Account) accounts: Account[]
  @are(Status) statuses: Status[]
  @are(String) hashtags: string[]
}
