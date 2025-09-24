/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param strs string字符串一维数组
 * @return string字符串
 */
export function longestCommonPrefix(strs: string[]): string {
  // write code here
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}
