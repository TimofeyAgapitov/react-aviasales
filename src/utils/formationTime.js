export const calculateArrivalTime = (baseTime, additionalMinutes) => {
  const date = new Date(baseTime);

  // NOTE: Время прибытия
  const arrivalTime = new Date(date.getTime() + additionalMinutes * 60 * 100);

  // NOTE: Формитируем базовое время
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  // NOTE: Формитируем время прибытия
  const formattedarrivalTime = arrivalTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  // NOTE: Формируем строку
  const resultTime = `${formattedTime} - ${formattedarrivalTime}`;

  return resultTime;
};
