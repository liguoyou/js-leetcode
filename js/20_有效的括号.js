// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

/**
 * 判断字符串是否有效
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 空字符串
  if (!s) return true

  // 去空格
  s = s.replace(/\s*/, '')

  // 奇数
  if (!s || s.length % 2 !== 0) return false

  // 解析字符串进行判断
  let strs = { '(': -1, '{': -2, '[': -3, ')': 1, '}': 2, ']': 3 }

  let result = []
  for (let i = 0; i < s.length; i++) {
    let curVal = strs[s[i]]

    // 如果数组为空, 当前为正数(右), 则无效
    if (!result.length && curVal > 0) return false

    if (curVal < 0) {
      // 如果为负数(左), 则先添加到数组中
      result.push(curVal)
    } else {
      // 如果是正数(右), 并且和数组中最后一个不一致, 则无效
      if (Math.abs(result[result.length - 1]) !== curVal) {
        return false
      } else {
        result.splice(result.length - 1, 1)
      }
    }
  }

  return result.length === 0
}

console.log(isValid('')) // true
console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([)]')) // false
console.log(isValid('{[]}{[]}')) // true
