import { type Actor } from './actor'
import { BaseObject } from './base'
import { randInt } from '../util'

export class Activity extends BaseObject {
  type = ''
  constructor (actor: Actor, object: BaseObject) {
    super()
    const id = `${this.baseUrl}/activity/${randInt(1000000)}`
    this.data = {
      type: this.type,
      id,
      actor,
      object
    }
  }
}

export class Create extends Activity {
  type = 'Create'
}
