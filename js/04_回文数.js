// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。

// 进阶:

// 你能不将整数转为字符串来解决这个问题吗？

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x == null || x === '') return false

  // 负数, 不是回文数
  if (x < 0) return false

  // 1~10 都是回文数
  if (x < 10) return true

  //

  // 方式1. 循环一半, 和另一半对比
  let xArr = (x + '').split('')
  let lens = Math.floor(xArr.length / 2)
  for (let i = 0; i < lens; i++) {
    if (xArr[i] !== xArr[xArr.length - i - 1]) {
      return false
    }
  }

  // 方式2. 转字符串实现, 反转之后仍然相等, 则是回文数
  // let newX = +(x + '')
  //   .split('')
  //   .reverse()
  //   .join('')
  // if (x !== newX) return false

  //

  // 你能不将整数转为字符串来解决这个问题吗？
  // 暂时不能, 在考虑...

  return true
}

console.log(isPalindrome(-100)) // false
console.log(isPalindrome(0)) // true
console.log(isPalindrome(7)) // true
console.log(isPalindrome(11)) // true
console.log(isPalindrome(23)) // false
console.log(isPalindrome(535)) // true
console.log(isPalindrome(5353)) // false
console.log(isPalindrome(12345654321)) // true
