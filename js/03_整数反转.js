// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 转成字符串
  let xStr = Math.abs(x) + ''

  // 反转
  let xStrNew = xStr
    .split('')
    .reverse()
    .join('')

  // 判断负数
  let newX = x > 0 ? +xStrNew : -xStrNew

  // 判断区间
  const MIN_VAL = -Math.pow(2, 31)
  const MAX_VAl = Math.pow(2, 31) - 1

  return newX < MAX_VAl && newX > MIN_VAL ? newX : 0
}

console.log(reverse(123)) // 321
console.log(reverse(-243)) // -342
console.log(reverse(-6.3)) // -3.6
