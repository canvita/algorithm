/**
 * rgb格式转16进制格式
 * @param {string} rgbStr
 */
function rbgToRex(rgbStr) {
  const reg = /\d{1,3}/g;
  const a = rgbStr.match(reg) || [];
  const ffStr = a.map(toHex).join('');
  return `#${ffStr}`;
}
/**
 * rgb格式转16进制格式辅助函数
 * @param {string} str
 */
function toHex(str) {
  let hexStr = (+str).toString(16);
  hexStr = hexStr.length === 1 ? `0${hexStr}` : hexStr;
  return hexStr;
}
/**
 * 16进制转rgb
 * @param {string} hexStr
 */
function HexToRgb(hexStr) {
  const reg = /\w{2}/g;
  const a = hexStr.match(reg) || [];
  const str = a.map(toDig).join();
  return `rgb(${str})`;
}
/**
 *16进制转rgb格式辅助函数
 * @param {string} str
 */
function toDig(str) {
  return parseInt(str, 16);
}
console.log(rbgToRex(HexToRgb('#00F58A')));
