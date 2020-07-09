function rbgToRex(rgbStr) {
  const reg = /\d{1,3}/g;
  const a = rgbStr.match(reg) || [];
  const ffStr = a.map(toHex).join("");
  return `#${ffStr}`;
}
function toHex(str) {
  let hexStr = (+str).toString(16);
  hexStr = hexStr.length === 1 ? `0${hexStr}` : hexStr;
  return hexStr;
}
