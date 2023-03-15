import { BaseObject } from './base'

const baseUrl = 'https://example.com'

export class Actor extends BaseObject {
  constructor (name: string) {
    super()
    const id = `${baseUrl}/people/${name}`
    this.data = {
      id,
      type: 'Person',
      preferredUsername: name,
      inbox: `${baseUrl}/inbox/${name}`,
      publicKey: {
        id: `${id}#main-key`,
        owner: id,
        publicKeyPem: "--- Look at me I'm a public key. ---"
      }
    }
  }
}
