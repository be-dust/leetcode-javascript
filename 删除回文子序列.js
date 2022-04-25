// 给你一个字符串 s，它仅由字母 'a' 和 'b' 组成。每一次删除操作都可以从 s 中删除一个回文 子序列。

// 返回删除给定字符串中所有字符（字符串为空）的最小删除次数。

// 「子序列」定义：如果一个字符串可以通过删除原字符串某些字符而不改变原字符顺序得到，那么这个字符串就是原字符串的一个子序列。

// 「回文」定义：如果一个字符串向后和向前读是一致的，那么这个字符串就是一个回文。

// 示例 1：
// 输入：s = "ababa"
// 输出：1
// 解释：字符串本身就是回文序列，只需要删除一次。

// 示例 2：
// 输入：s = "abb"
// 输出：2
// 解释："abb" -> "bb" -> "".
// 先删除回文子序列 "a"，然后再删除 "bb"。

// 示例 3：
// 输入：s = "baabb"
// 输出：2
// 解释："baabb" -> "b" -> "".
// 先删除回文子序列 "baab"，然后再删除 "b"。

// 提示：
// 1 <= s.length <= 1000
// s 仅包含字母 'a'  和 'b'

// 如果是每次需要删除连续回文子串而不是回文序列, 也不限定是a和b
// 要求最小删除次数，那么就需要从最长的回文字符串开始 n -> n-1 -> n-2 -> ...
const isPalind = (s) => {
  return s === s.split('').reverse().join('');
};

var removePalindromeSub = function (s) {
  const n = s.length;

  if (!n) return 0;

  // 长度为n
  if (isPalind(s) || n === 1) return 1;

  // 初始从长度为 n - 1开始;
  let dis = n - 1,
    start = 0,
    end = dis + start - 1, // end - start + 1 = dis -> end = dis + start - 1
    count = 0;

  // 从长度n-1开始循环
  while (start <= end && dis > 0) {
    let target = s.slice(start, end + 1); // 要包含end
    console.log(dis, target, isPalind(target));
    // 如果是回文字符串就处理剩下的字符串
    if (isPalind(target)) {
      const left = s.slice(0, start);
      const right = s.slice(end + 1);
      count = 1 + removePalindromeSub(left) + removePalindromeSub(right);
      break;
    }
    start++;
    // 长度为dis情况下已经遍历结束了, 该遍历长度为dis-1
    if (end > n - 1) {
      dis--;
      start = 0;
    }
    end = dis + start - 1;
  }
  return count;
};

console.log(removePalindromeSub('abbbbaaacccda'));
