import { Entity } from '../Entity'
import { param, is } from '../decorators'
export class Account extends Entity {
  @param id: string
  @param username: string
  @param acct: string
  @param displayName: string
  @param locked: boolean
  @is(Date) createdAt: Date
  @param followersCount: number
  @param followingCount: number
  @param statusesCount: number
  @param note: string
  @param url: string
  @param avatar: string
  @param avatarStatic: string
  @param header: string
  @param headerStatic: string
  @param movedToAccount?: Account
  @param source?: Object
}
