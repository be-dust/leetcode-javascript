// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:
// 输入：s = "abaccdeff"
// 输出：'b'

// 示例 2:
// 输入：s = ""
// 输出：' '

// 限制：
// 0 <= s 的长度 <= 50000

// 不想使用两次for循环
var firstUniqChar = function (s) {
  if (!s) return ' ';
  const onlyOnes = [];
  const notOnes = [];
  for (let i = 0; i < s.length; i++) {
    const index = onlyOnes.indexOf(s[i]);
    // 如果已经有了，那么不入栈并且把原来的也删掉, 还要记录下来下次遇见也跳过, 避免出现的次数为奇数导致 入栈->出栈->入栈 的情况
    if (index !== -1) {
      notOnes.push(s[i]);
      onlyOnes.splice(index, 1);
    } else {
      if (notOnes.indexOf(s[i]) === -1) {
        onlyOnes.push(s[i]);
      }
    }
  }
  return onlyOnes[0] || ' '; // 当出现的次数恰好都是偶数时onlyOnes为[]
};
console.log(firstUniqChar('aaaabbb'));
