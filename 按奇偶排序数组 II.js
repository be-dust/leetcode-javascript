// 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。

// 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。

// 你可以返回 任何满足上述条件的数组作为答案 。

// 示例 1：
// 输入：nums = [4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

// 示例 2：
// 输入：nums = [2,3]
// 输出：[2,3]

/**
 * 时间复杂度o(N), 空间复杂度o(N)太高; (不考虑输出数组的空间占用)
 * @param {*} nums
 * @returns
 */
var sortArrayByParityII = function (nums) {
  let odds = [];
  let evens = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }

  let res = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res[i] = evens.shift();
    } else {
      res[i] = odds.shift();
    }
  }
  return res;
};
console.log(sortArrayByParityII([4, 2, 5, 7]));

/**
 * 时间复杂度o(N), 空间复杂度o(1); (不考虑输出数组的空间占用)
 * @param {*} nums
 * @returns
 */
var sortArrayByParityII2 = function (nums) {
  let res = new Array(nums.length).fill(0);
  let i = 0;
  let j = 1;
  nums.forEach((item) => {
    if (item % 2 === 0) {
      res[i] = item;
      i += 2;
    } else {
      res[j] = item;
      j += 2;
    }
  });
  return res;
};
console.log(sortArrayByParityII2([4, 2, 5, 7]));
