export function toUSDCurrency(value = 0) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
