// 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

// 如果不存在最后一个单词，请返回 0 。

// 说明：一个单词是指由字母组成，但不包含任何空格的字符串。

// 示例:

// 输入: "Hello World"
// 输出: 5

/**
 * 最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // 60ms
  // return s.trim().split(' ').slice(-1)[0].length;

  // 56ms
  return s
    .trim()
    .split(" ")
    .splice(-1)[0].length;

  // 差不多
  // const arr = s.trim().split(" ");
  // let res = "";
  // if (arr.length > 0) {
  //   res = arr[arr.length - 1];
  // }
  // return res.length;
};
