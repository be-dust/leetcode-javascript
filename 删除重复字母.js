// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

// 示例 1：
// 输入：s = "bcabc"
// 输出："abc"

// 示例 2：
// 输入：s = "cbacdcbc"
// 输出："acdb"

// 提示：
// 1 <= s.length <= 104
// s 由小写英文字母组成

/**
 *  思路：后来的先匹配考虑用栈
 * 1. 找到重复的字符
 * 2. 原字符串依次入栈，入栈时判断当前字符和栈顶字符的字典排序大小，如果小于并且栈顶元素是重复元素则栈顶元素出栈, 需要注意因为重复而出栈的次数是有限的，否则一些大的重复的字母就可能一直不能入栈。
 * @param {*} s
 */
var removeDuplicateLetters = function (s) {
  if (!s.length) {
    return false;
  }

  // 找到重复的字符
  const repeatCharacters = s
    .split('')
    .filter((item, index, arr) => index !== arr.indexOf(item));

  const arr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      let top = arr[arr.length - 1];
      // 循环判断栈顶元素和当前元素的关系
      // repeatCharacters.includes(top)为true表明这次可以删除，因为后面还会遇到
      while (
        top &&
        s[i].charCodeAt(0) < top.charCodeAt(0) &&
        repeatCharacters.includes(top)
      ) {
        arr.pop();
        // 移除该重复元素, 防止多删
        repeatCharacters.splice(repeatCharacters.indexOf(top), 1);
        top = arr[arr.length - 1];
      }
      arr.push(s[i]);
    } else {
      // 已经在单调栈中存在的元素不入栈并且需要把该重复元素移除，防止后面多删
      repeatCharacters.splice(repeatCharacters.indexOf(s[i]), 1);
    }
  }
  return arr.join('');
};
console.log(removeDuplicateLetters('bbcaac')); // b -> c -> a -> pop c -> b不能删 ->
console.log(removeDuplicateLetters('cbacdcbc'));
