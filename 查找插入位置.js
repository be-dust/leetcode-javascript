// 给定一个排序的整数数组 nums 和一个整数目标值 target ，请在数组中找到 target ，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 示例 1:
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 示例 2:
// 输入: nums = [1,3,5,6], target = 2
// 输出: 1

// 示例 3:
// 输入: nums = [1,3,5,6], target = 7
// 输出: 4

// 示例 4:
// 输入: nums = [1,3,5,6], target = 0
// 输出: 0

// 示例 5:
// 输入: nums = [1], target = 0
// 输出: 0

// 提示:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104`
// nums 为无重复元素的升序排列数组
// -104 <= target <= 104

/**
 * https://leetcode-cn.com/problems/N6YdxV/
 * 左闭右开
 * @param {*} nums
 * @param {*} target
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    // 右半部分的下标要加上start
    let mid = start + Math.floor((end - start) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    console.log(mid);
    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
