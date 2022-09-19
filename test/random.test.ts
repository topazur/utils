import { describe, expect, it } from 'vitest'

import { randomDate, randomHexColor, randomRange, randomRgbColor, randomUUID } from '../src/random'
import { regUUID } from '../src/regexp'

describe('Test randomRange', () => {
  it('randomRange `[ min, max ]` test', () => {
    const min = 1; const max = 10
    const result = randomRange(min, max)
    expect(result >= 1 && result <= 10).toBeTruthy()
  })
})

describe('Test randomRgbColor', () => {
  it('randomRgbColor value test', () => {
    const result = randomRgbColor()
    const matchColors = /^(rgb|RGB)\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/
    const match = matchColors.exec(result)
    expect(match).toBeDefined()
    expect(match?.[1] === 'rgb' || match?.[1] === 'RGB').toBeTruthy()
    expect(Number(match?.[2]) >= 0 && Number(match?.[2]) <= 255).toBeTruthy()
    expect(Number(match?.[3]) >= 0 && Number(match?.[3]) <= 255).toBeTruthy()
    expect(Number(match?.[4]) >= 0 && Number(match?.[4]) <= 255).toBeTruthy()
  })
})

describe('Test randomHexColor', () => {
  it('randomHexColor value test', () => {
    const result = randomHexColor()
    expect(/^#[0-9a-f]{6}$/i.test(result)).toBeTruthy()
  })
})

describe('Test randomDate', () => {
  it('randomDate value test', () => {
    const result = randomDate()
    expect(result).toBeInstanceOf(Date)
  })
})

describe('Test randomUUID', () => {
  it('randomUUID value test', () => {
    const result = randomUUID()
    expect(result).toMatch(regUUID)
  })
})
