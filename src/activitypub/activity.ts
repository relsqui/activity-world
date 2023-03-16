import { type Actor } from './actor'
import { BaseObject } from './base'

export class Activity extends BaseObject {
  type = 'Activity'
}

export class Create extends Activity {
  type = 'Create'
  constructor (actor: Actor, object: BaseObject) {
    super()
    this.data = {
      ...this.getBaseData(),
      actor,
      object
    }
  }
}
