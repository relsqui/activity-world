import { Actor } from './ap-objects/actor'

const methods: any = {
  actor: ({ name }: { name: string }) => { return new Actor(name).getJson() }
}

export function apiRequest (method: string, args: any): any {
  return methods[method](args)
}
