export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateGST = (price: number): number => {
  return price * 0.28;
};

export const calculateTotal = (price: number): number => {
  return price + calculateGST(price);
};