export const formatMinutesToHoursAndMinutes = (minutes) => {
  // NOTE: Вычисляем количество часов
  const hours = Math.floor(minutes / 60);

  // NOTE: Остаток от деления на 60 - дает оставшиеся минуты
  const remainingMinutes = minutes % 60;

  // NOTE: Формируем строку
  const formattedString = `${hours}ч ${remainingMinutes}м`;

  return formattedString;
};
