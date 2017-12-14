import { Entity } from '../Entity'
import { Account } from './Account'
import { Attachment } from './Attachment'
import { Application } from './Application'
import { Emoji } from './Emoji'
import { Mention } from './Mention'
import { Tag } from './Tag'
import { param, is, are } from '../decorators'
export class Status extends Entity {
  @param id: string
  @param uri: string
  @param url: string
  @param account: Account
  @param inReplyToId?: string
  @param inReplyToAccountId?: string
  @param reblog?: Status
  @param content: string
  @is(Date) createdAt: Date
  @are(Emoji) emojis?: Emoji[]
  @param reblogsCount: number
  @param favouritesCount: number
  @param reblogged?: boolean
  @param favourited?: boolean
  @param muted?: boolean
  @param sensitive: string
  @param spoilerText: string
  @param visibility: string
  @are(Attachment) mediaAttachments: Attachment[]
  @are(Mention) mentions: Mention[]
  @are(Tag) tags: Tag[]
  @param application?: Application
  @param language?: string
}
