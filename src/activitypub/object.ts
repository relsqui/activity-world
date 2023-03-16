import { randInt } from '../util'
import { type Actor } from './actor'
import { BaseObject } from './base'

export class APObject extends BaseObject {
  type = ''
  constructor () {
    super()
    const id = `${this.baseUrl}/object/${randInt(1000000)}`
    this.data = {
      type: this.type,
      id
    }
  }
}

interface NoteData {
  attributedTo: Actor
  // TODO: date or whatever
  published: string
  inReplyTo?: string
  content: string
  // TODO: this need an ActivityStream type
  to: string
}

export class Note extends APObject {
  constructor (data: NoteData) {
    super()
    this.data = {
      ...this.data,
      ...data
    }
  }
}
