import { type Actor } from './actor'
import { type ActivityStream, BaseObject } from './base'

interface NoteData {
  attributedTo: Actor
  // TODO: date or whatever
  published: string
  inReplyTo?: string
  content: string
  to: ActivityStream
}

export class Note extends BaseObject {
  types = 'Note'
  attributedTo: Actor
  constructor (data: NoteData) {
    super()
    this.attributedTo = data.attributedTo
    this.data = {
      ...this.getBaseData(),
      ...data,
      attributedTo: this.attributedTo.id
    }
  }
}
