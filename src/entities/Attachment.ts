import { Entity } from '../Entity'
import { param } from '../decorators'
export class Attachment extends Entity {
  @param id: string
  @param type: string
  @param url: string
  @param remoteUrl?: string
  @param previewUrl: string
  @param textUrl?: string
  @param meta?: any
}
