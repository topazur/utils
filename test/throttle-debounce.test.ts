import { describe, expect, it, vi } from 'vitest'

import { debounce, throttle } from '../src/vendor'

describe('Test assert', () => {
  // NOTICE: 节流是距离上一次执行时间的间隔达到后才会执行
  it('throttle value test: 调用多次,只第一次调用有效(输入框节流)', () => {
    const todoFn = vi.fn((val: any) => {
      // console.log(val, Date.now())
      return val
    })
    const fn = throttle(10, todoFn, {
      // 为true则时间间隔必须大于(并且最后一次不符合间隔不会执行)，false等于即可出发
      noTrailing: false,
      // 为true则不执行第一次
      noLeading: false,
      // true仅执行第一次；false仅执行最后一次；undefined正常节流
      // debounceMode: undefined,
    })

    // 启用模拟计时器
    vi.useFakeTimers()
    // vi.useRealTimers()

    // 调用
    fn('now')
    setTimeout(() => fn('5ms'), 10 * 1 - 5) // 间隔5ms
    setTimeout(() => fn('10ms'), 10 * 1) // 间隔10ms
    setTimeout(() => fn('15ms'), 10 * 1 + 5) // 间隔15ms
    setTimeout(() => fn('20ms'), 10 * 2) // 间隔20ms
    setTimeout(() => fn('25ms'), 10 * 2 + 5) // 间隔25ms
    setTimeout(() => fn('30ms'), 10 * 3) // 间隔30ms
    setTimeout(() => fn('35ms'), 10 * 3 + 5) // 间隔35ms

    vi.advanceTimersByTime(10 * 10)

    // console.log('calls: ', (todoFn as any).calls)

    // 是否调用及调用次数
    expect(todoFn).toBeCalled()
    expect(todoFn).toBeCalledTimes(5)
    // 某次调用时是否使用了某些参数
    expect(todoFn).toHaveBeenNthCalledWith(1, 'now')
    expect(todoFn).toHaveBeenNthCalledWith(5, '35ms')
  })

  // NOTICE: 防抖是在时间间隔内没有继续调用此函数才会执行一次
  it('debounce value test: 调用多次,以最后一次为准(窗口resize防抖)', () => {
    const todoFn = vi.fn((val: any) => {
      // console.log(val, Date.now())
      return val
    })
    const fn = debounce(10, todoFn, {
      // 第一次算不算在其内
      atBegin: true,
    })

    // 启用模拟计时器
    vi.useFakeTimers()

    // 调用
    fn('now')
    setTimeout(() => fn('now'), 0) // 间隔0ms
    setTimeout(() => fn('11ms'), 11) // 间隔11ms
    setTimeout(() => fn('20ms'), 20) // 间隔20ms
    setTimeout(() => fn('31ms'), 31) // 间隔31ms

    vi.advanceTimersByTime(10 * 10)

    // console.log('calls: ', (todoFn as any).calls)

    // 是否调用及调用次数
    expect(todoFn).toBeCalled()
    expect(todoFn).toBeCalledTimes(3)
    // 某次调用时是否使用了某些参数
    expect(todoFn).toHaveBeenNthCalledWith(1, 'now')
    expect(todoFn).toHaveBeenNthCalledWith(2, '11ms')
    expect(todoFn).toHaveBeenNthCalledWith(3, '31ms')
  })
})
