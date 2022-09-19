/**
 * @title 若condition为true则什么也不做，否则抛出异常
 * @param { boolean } condition 条件
 * @param { string } message 自定义错误信息
 */
export const assert = (condition: boolean, message: string): asserts condition => {
  if (!condition) { throw new Error(message) }
}

/**
 * @title 通过toString判断数据类型
 * @param { unknown } target 需要判断的数据
 * @param mode -1 小写 0 不变 1 大写
 * @returns { string }
 */
export function callString(target: any, mode?: -1 | 0 | 1): string {
  const result = Object.prototype.toString.call(target)
  if (typeof mode === 'undefined') { return result }

  const typeStr = result.slice(8, -1)
  if (mode === 0) { return typeStr }
  if (mode === -1) { return typeStr.toLowerCase() }
  return typeStr.toUpperCase()
}

/**
 * @title 空函数 <空操作; 无操作;>
 */
export const noop = () => { }
