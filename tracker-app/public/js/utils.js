export function getNumberCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

export function titleCase(str) {
  let result = str.toLowerCase().split(' ');
  for (let i = 0; i < result.length; ++i) result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
  return result.join(' ');
}
