export const THOUSAND_SEPARATOR = ".";

export const DECIMAL_SEPARATOR = ",";

export function formatNumber(x) {
  const isNumber = typeof x === "number";
  if (isNumber) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, THOUSAND_SEPARATOR);
    return parts.join(DECIMAL_SEPARATOR);
  }
  if (x) {
    return x.toString();
  }
  return null;
}
