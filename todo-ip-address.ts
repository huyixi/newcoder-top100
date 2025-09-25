/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 验证IP地址
 * @param IP string字符串 一个IP地址字符串
 * @return string字符串
 */
export function solve(IP: string): string {
  if (IP.indexOf(".") !== -1) {
    let ipParts = IP.split(".");
    if (ipParts.length !== 4) return "Neither";

    for (const part of ipParts) {
      if (part.length === 0) return "Neither"; // 空段
      if (part.length > 1 && part[0] === "0") return "Neither"; // 前导零
      if (!/^\d+$/.test(part)) return "Neither"; // 必须是纯数字

      const num = Number(part);
      if (num < 0 || num > 255) return "Neither";
    }
    return "IPv4";
  }
  if (IP.indexOf(":") !== -1) {
    for (let i = 0; i < IP.length; i++) {
      let firstP = IP.indexOf(":", i);
      if (IP[firstP + 1] === ":") return "Neither";
    }
    IP.split(":").forEach((part) => {
      for (let i = 0; i < part.length - 1; i++) {
        if (part[i] <= "0" || part[i] >= "f") {
          return "Neither";
        }
      }
      return "IPv6";
    });
  }
  return "Neither";
}
