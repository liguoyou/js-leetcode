// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
// 说明:

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

/**
 * 实现 strStr() 函数
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 看到有人使用 indexOf slice 等内置函数实现, 我觉得不符合题目要求
var strStr = function(haystack, needle) {
  // 如果 参数 needle 为空
  if (needle === '') return 0

  // 如果参数 needle 存在, haystack 为空
  if (haystack === '') return -1

  // 存个长度先
  let iLens = needle.length
  let jLens = haystack.length

  // 遍历 haystack
  for (let j = 0; j < jLens; j++) {
    // 如果 后面剩余的字符位数 <  needle 的字符串长度, 就没必要继续遍历了
    if (j + iLens > jLens) break

    // 找到了一个与 needle[0] 相同的字符
    if (needle[0] === haystack[j]) {
      // 从该位置开始在 haystack 中截取与 needle字符长度相同的字符串, 做比较
      let curTarget = haystack[j]
      for (let i = j + 1; i < j + iLens; i++) {
        curTarget += haystack[i]
      }

      if (curTarget === needle) return j
    }
  }

  return -1
}

console.log(strStr('erererer', 'ererer')) // 0
console.log(strStr('erer3erer', 'ererer')) // -1
console.log(strStr('ererer', 'ererer')) // 0
console.log(strStr('12324ererer', 'ererer')) // 5
