
export class BaseObject {
  data: any
  getJson (): string {
    return JSON.stringify(this.data, null, 2)
  }
}
