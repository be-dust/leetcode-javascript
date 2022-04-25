// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 示例 1：
// 输入：ransomNote = "a", magazine = "b"
// 输出：false

// 示例 2：
// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false

// 示例 3：
// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true

// 提示：
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote 和 magazine 由小写英文字母组成
/**
 * https://leetcode-cn.com/problems/ransom-note/
 * @param {*} ransomNote
 * @param {*} magazine
 */
var canConstruct = function (ransomNote, magazine) {
  let materiel = magazine.split('');
  let count = 0;
  for (let i = 0; i < ransomNote.length; i++) {
    const index = materiel.indexOf(ransomNote[i]);
    if (index !== -1) {
      count++;
      materiel.splice(index, 1); // 物料用过之后删除
    }
  }
  // 如果都能再物料中找到说明可以由magazine组成
  if (count === ransomNote.length) {
    return true;
  }
  return false;
};
console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
