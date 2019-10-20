// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

/**
 * 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 如果数组为空, 则直接插入第一个位置
  if (nums.length === 0) return 0

  // 查看数组中是否已存在
  if (nums.includes(target)) {
    // 存在直接返回下标
    return nums.indexOf(target)
  } else {
    // 不存在, 先找到第一个比它大的下标, 找到 -> 返回, 没找到, 返回数组长度即插在末尾
    let rightIndex = nums.findIndex(item => item > target)
    return rightIndex > -1 ? rightIndex : nums.length
  }

  // 三目运算符写法
  // return !nums.includes(target)
  //   ? nums.findIndex(item => item > target) === -1
  //     ? nums.length
  //     : nums.findIndex(item => item > target)
  //   : nums.indexOf(target)
}

console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 3))
console.log(searchInsert([1, 3, 5, 6], 7))
