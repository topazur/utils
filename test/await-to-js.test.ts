import { describe, expect, it, vi } from 'vitest'

import { randomRange } from '../src/random'
import { to } from '../src/vendor'

describe('Test to', () => {
  it('to value test', async () => {
    // 模拟promise
    const p = function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const num = randomRange(0, 10)
          if (num > 5) {
            return resolve(num)
          }
          reject(num)
        }, 1000)
      })
    }

    const [err, res] = await to(p(), { message: '随机数小于5' })

    if (!err) {
      expect(err).toBeNull()
      expect(res).toBeGreaterThan(5)
    }
    else {
      expect(err.message).not.toBeNull()
      expect(res).toBeUndefined()
    }
  })
})
