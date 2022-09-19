import { describe, expect, it } from 'vitest'

import { assert, callString, noop } from '../src/base'

describe('Test assert', () => {
  it('assert value test', () => {
    expect(() => assert(true, 'test')).not.toThrowError('test')
    expect(() => assert(false, 'test')).toThrowError('test')
  })
})

describe('Test callString', () => {
  it('callString value test', () => {
    const value = 1
    expect(callString(value)).toBe('[object Number]')
    expect(callString(value, -1)).toBe('number')
    expect(callString(value, 0)).toBe('Number')
    expect(callString(value, 1)).toBe('NUMBER')
  })
})

describe('Test noop', () => {
  it('noop value test', () => {
    expect(() => noop()).not.toBeNull()
  })
})
