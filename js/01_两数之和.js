// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums) return false

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    let otherVal = target - nums[i]

    // 从 i+1 位开始循环
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === otherVal) {
        return [i, j]
      }
    }

    // 这里的实现, 没有上面执行快
    // let otherIndex = nums.findIndex((item, index) => {
    //   return index > i && item === otherVal
    // })

    // if (otherIndex !== -1) return [i, otherIndex]
  }
}

console.log(twoSum([5, 77, 23, 3, 3, 2, 4], 6)) // [ 3, 4 ]
console.log(twoSum([3, 2, 4], 6)) // [ 1, 2 ]
