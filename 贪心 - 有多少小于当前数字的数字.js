// https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

// 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

// 以数组形式返回答案。

//

// 示例 1：

// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3]
// 解释：
// 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
// 对于 nums[1]=1 不存在比它小的数字。
// 对于 nums[2]=2 存在一个比它小的数字：（1）。
// 对于 nums[3]=2 存在一个比它小的数字：（1）。
// 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
// 示例 2：

// 输入：nums = [6,5,4,8]
// 输出：[2,1,0,3]
// 示例 3：

// 输入：nums = [7,7,7,7]
// 输出：[0,0,0,0]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[j] < nums[i]) {
        count++;
      }
    }
    res.push(count);
  }
  return res;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// 错误解
// var smallerNumbersThanCurrent2 = function (nums) {
//   // 记录原始位置
//   let record = {};// 使用对象，原数组中重复的元素就没法记录了, 所以需要数组来记录
//   for (let i = 0; i < nums.length; i++) {
//     record[Symbol(nums[i])].idx = i;
//   }
//   let numsCopy = nums.sort(); // 1,2,2,3,8
//   for (let i = 0; i < numsCopy.length; i++) {
//     const arr = nums.slice(0, i);
//     record[numsCopy[i]].count = arr.filter(
//       (item, index) => arr.indexOf(item) < nums[i]
//     ).length;
//   }

//   console.log(record);

//   let res = new Array(nums.length).fill(0);
//   Object.values(record).forEach(({ idx, count }) => {
//     res[idx] = count;
//   });
//   // for...of 不能用来遍历对象； for in 可以，但是for...in遍历的是索引而不是值
//   // for ({ idx, count } of record) {
//   //   res[idx] = count;
//   // }
//   return res;
// };

//对数组进行排序，并记录每一个数在原数组中的位置。对于排序后的数组中每一个数，我们找出其左侧第一个小于它的数，这样就能够知道数组中小于该数字的数量
var smallerNumbersThanCurrent2 = function (nums) {
  const n = nums.length;

  // [[0, 0], [0, 0], ...]
  // 记录原索引和值
  const data = new Array(n).fill(0).map((v) => new Array(2).fill(0));
  for (let i = 0; i < n; ++i) {
    data[i][0] = nums[i];
    data[i][1] = i;
  }

  // 按照从小到大排序
  data.sort((a, b) => a[0] - b[0]);

  const ret = new Array(n);

  let prev = -1;
  for (let i = 0; i < n; ++i) {
    // [1,2,2,3,8]
    // 注意重复元素的判断，只有当值变化的时候才去更新 prev
    if (prev == -1 || data[i][0] !== data[i - 1][0]) {
      prev = i;
    }
    ret[data[i][1]] = prev;
  }
  return ret;
};
console.log(smallerNumbersThanCurrent2([8, 1, 2, 2, 3]));
