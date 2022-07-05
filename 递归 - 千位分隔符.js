// 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。

// 示例 1：
// 输入：n = 987
// 输出："987"

// 示例 2：
// 输入：n = 1234
// 输出："1.234"

// 示例 3：
// 输入：n = 123456789
// 输出："123.456.789"

// 示例 4：
// 输入：n = 0
// 输出："0"

// 提示：
// 0 <= n < 2^31

var thousandSeparator = function (n) {
  if ((n + '').length < 4) {
    return n;
  }
  const arr = (n + '').split('');
  const index = arr.length - 3; // 倒数第三个
  const rest = arr.slice(index); // 取倒数后三位
  const other = arr.slice(0, index).join(''); // 取倒数后三位后剩下的
  rest.unshift('.'); // 给后三位前加一个 .
  return thousandSeparator(Number(other)) + rest.join('');
};
console.log(thousandSeparator(0));

// 我们可以借鉴数位分离的方法从低位向高位遍历，即对于十进制数 n，每次取出 n 的最后一位，然后把 n 整除 10，得到该数除去最后数字以外的部分。每次我们把取出的这个数字加入到一个字符串的末尾，用一个计数器记录当前已经分离出的数位的个数，如果它是 3 的倍数并且当前的 n 大于 0，就在字符串末尾加分隔符。
var thousandSeparator2 = function (n) {
  let count = 0;
  let ans = '';
  do {
    let cur = n % 10; // 取最后一位
    n = Math.floor(n / 10); // 取整数部分
    ans += cur.toString(); // "432", 从最低位到最高位处理所以这里是倒序
    ++count;
    if (count % 3 === 0 && n) {
      ans += '.'; // "432."
    }
  } while (n);
  console.log(ans);
  return ans.split('').reverse().join('');
};
console.log(thousandSeparator2(123456789));
