import { BaseObject } from './base'

export class Actor extends BaseObject {
  type = ''
  constructor (name: string) {
    super()
    this.id = `${this.baseUrl}/actor/${name}`
    this.data = {
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

export class Person extends Actor {
  type = 'Person'
}
