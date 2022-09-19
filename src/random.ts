/**
 * @title 随机生成数字函数
 * @param [start, end] 大小范围
 * @returns {Date} 随机数字结果
 */
export function randomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @title 随机生成RGB颜色
 * @return { string } 随机RGB颜色
 * @example console.log(randomRgb())// 'rgb(255,0,0)'
 */
export function randomRgbColor(raw = false) {
  const [r, g, b]: number[] = Array(3)
    .fill(0)
    .map(() => Math.random())
    .map((item: number) => raw ? item * 255 : parseInt(`${item * 255}`, 10))
  return `rgb(${r}, ${g}, ${b})`
}

/**
 * @title 随机生成十六进制颜色
 * @return { string } 随机十六进制颜色
 * @example console.log(randomHexColor()) // '#ff0000'
 */
export function randomHexColor(): string {
  return `#${(Math.random() * 0xFFFFF * 1000000).toString(16).slice(0, 6)}`
}

/**
 * @title 随机生成时间
 * @param [start, end] 时间范围 (支持/或-分隔, end默认是当前日期)
 * @returns {Date} 随机时间结果
 */
export function randomDate(start = '1999/01/1', end?: string) {
  const date = new Date()
  const splitTag = start.includes('/') ? '/' : '-'
  const [endY, endM, endD] = (end || '').split(splitTag)
  const y = +endY || date.getFullYear()
  const m = +endM || date.getMonth() + 1
  const d = +endD || date.getDate()
  const [startY, startM, startD] = start.split('/')
  const startDate = new Date(+startY, +startM, +startD).getTime()
  const endDate = new Date(y, m, d).getTime()
  return new Date(startDate + Math.round(Math.random() * (endDate - startDate)))
}

/**
 * @title 随机生成uuid
 *  @returns {string} 32位uuid
 */
export function randomUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
