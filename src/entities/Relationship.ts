import { Entity } from '../Entity'
import { param } from '../decorators'
export class Relationship extends Entity {
  @param id: string
  @param following: boolean
  @param followedBy: boolean
  @param blocking: boolean
  @param muting: boolean
  @param requested: boolean
  @param domainBlocking: boolean
}
