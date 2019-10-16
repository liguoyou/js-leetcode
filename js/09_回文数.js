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
 * 判断一个整数是否是回文数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x == null || x === '') return false

  // 负数, 不是回文数
  if (x < 0) return false

  // 1~9 都是回文数
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

  // 方式1 结束

  // 方式2. 转字符串实现, 反转之后两数仍然相等, 则是回文数
  // let newX = +(x + '')
  //   .split('')
  //   .reverse()
  //   .join('');
  // if (x !== newX) return false;

  // 方式2 结束

  // 你能不将整数转为字符串来解决这个问题吗？ 我: ok
  // 方式 3
  // 计算数字 x 的位数
  // let sum = 0;
  // let xx = x;
  // while (xx >= 1) {
  //   xx /= 10;
  //   sum++;
  // }

  // 遍历, 取出 首/尾 数字进行对比
  // for (let i = 0; i < Math.floor(sum / 2); i++) {
  //   // 作用: 假设 i=2 => (sum-i-1) => 123.45654321 => 123.45654321 => 123, 以此类推
  //   let leftFloor = Math.floor(x / Math.pow(10, sum - i - 1));

  //   // 作用: 假设 i=2 => (sum-i) => 12.345654321 => 12.345654321 => 120, 以此类推
  //   let leftFloorInt = Math.floor(x / Math.pow(10, sum - i)) * 10;

  //   // 第 i 位的数字
  //   let leftVal = leftFloor - leftFloorInt;

  //   // 作用: 假设 i=2 => 指数: 3 => 12345654.321 => 123456543.21 => 123456543, 以此类推
  //   let rightFloor = parseInt((x / Math.pow(10, i + 1)) * 10);

  //   // 作用: 假设 i=2 => 指数: 3 => 12345654.321 => 12345654 => 123456540, 以此类推
  //   let rightFloorInt = Math.floor(x / Math.pow(10, i + 1)) * 10;

  //   // 第 sum - i 位的数字
  //   let rightVal = rightFloor - rightFloorInt;

  //   if (leftVal !== rightVal) return false;
  // }

  // 方式 3 结束

  return true
}

console.log(isPalindrome(-100)) // false
console.log(isPalindrome(0)) // true
console.log(isPalindrome(7)) // true
console.log(isPalindrome(10)) // false
console.log(isPalindrome(11)) // true
console.log(isPalindrome(23)) // false
console.log(isPalindrome(535)) // true
console.log(isPalindrome(5353)) // false
console.log(isPalindrome(12345654321)) // true
