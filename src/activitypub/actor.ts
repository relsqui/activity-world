import { BaseObject } from './base'

export class Actor extends BaseObject {
  type = 'Actor'
}

export class Person extends Actor {
  type = 'Person'
  constructor (name: string) {
    super()
    this.data = {
      ...this.getBaseData(),
      type: this.type,
      preferredUsername: name,
      inbox: `${this.baseUrl}/inbox/${name}`,
      publicKey: {
        id: `${this.id}#main-key`,
        owner: this.id,
        publicKeyPem: "--- Look at me I'm a public key. ---"
      }
    }
  }
}
