export function randRange (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export function randInt (max: number): number {
  return randRange(1, max)
}
