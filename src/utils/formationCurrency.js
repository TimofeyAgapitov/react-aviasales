export const formatCurrency = (price) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0, // Минимальное количество десятичных знаков
    maximumFractionDigits: 2, // Максимальное количество десятичных знаков
  }).format(price);

  return formattedPrice.replace('₽', 'Р');
};
