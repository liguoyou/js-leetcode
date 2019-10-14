// 小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？

// 输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。

// 示例 1：

// 输入：guess = [1,2,3], answer = [1,2,3]
// 输出：3
// 解释：小A 每次都猜对了。

// 示例 2：

// 输入：guess = [2,2,3], answer = [3,2,1]
// 输出：1
// 解释：小A 只猜对了第二次。

// 限制：

// guess的长度 = 3
// answer的长度 = 3
// guess的元素取值为 {1, 2, 3} 之一。
// answer的元素取值为 {1, 2, 3} 之一。

/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
  // 判断输入的数据是否合格
  if (!paramsIllegal(guess)) return 0
  if (!paramsIllegal(answer)) return 0

  // 循环判断结果
  let result = 0
  guess.forEach((item, index) => {
    if (item === answer[index]) {
      result++
    }
  })
  return result
}

// 判断参数是否非法
const paramsIllegal = param => {
  if (!param) return false

  // 长度必须为 3
  if (param.length !== 3) return false

  // 数值必须是 1 || 2 || 3
  let idx = param.findIndex(item => {
    return item !== 1 && item !== 2 && item !== 3
  })
  if (idx > -1) return false

  return true
}

// 调用执行
console.log(game([1, 2, 3], [1, 2, 3])) // 3
console.log(game([2, 2, 3], [3, 2, 1])) // 1
