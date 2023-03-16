export class BaseObject {
  data: any
  baseUrl = 'https://example.com'
  getJson (): string {
    return JSON.stringify(this.data, null, 2)
  }
}
