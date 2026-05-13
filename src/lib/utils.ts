export function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`;
}

export function getLowStock(products: any[]) {
  return products.filter((p) => p.stock < 20);
}