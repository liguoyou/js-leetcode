// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * 查找字符串数组中的最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 空数组
  if (!strs || !strs.length) {
    // (我发现, 加上个 大括号 {} 速度好像比省略要快一点?)
    return ''
  }

  // 取出字符串数组中最短的项
  let shortStr = strs.sort((a, b) => a.length > b.length)[0]

  for (let i = shortStr.length; i >= 0; i--) {
    // 截取的字符串, 循环判断
    let bool = strs.every(val => {
      return val.indexOf(shortStr.slice(0, i + 1)) === 0
    })

    if (bool) {
      return shortStr.slice(0, i + 1)
    }
  }

  return ''
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // fl
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
console.log(longestCommonPrefix(['ra', 'a'])) // ''
