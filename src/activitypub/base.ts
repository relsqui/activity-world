import { randInt } from '../util'

export class BaseObject {
  data: any
  type = 'Object'
  baseUrl = 'https://example.com'
  num_id = -1
  id = ''

  constructor () {
    this.num_id = randInt(1000000)
  }

  getBaseData (): { id: string, type: string } {
    this.id = `${this.baseUrl}/${this.type.toLowerCase()}/${randInt(this.num_id)}`
    return {
      id: this.id,
      type: this.type
    }
  }

  toJSON (): string {
    return this.data
  }
}

export class ActivityStream {
  stream = '#Public'
}
