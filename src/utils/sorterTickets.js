export const sorterTickets = (tickets, sort, filter) => {
  if (!tickets) return tickets;

  const sortedTickets = [...tickets];

  const sortFunctions = {
    cheapest: (a, b) => a.price - b.price,
    fastest: (a, b) => getTotalDuration(a) - getTotalDuration(b),
    optimal: (a, b) => {
      const priceComparison = a.price - b.price;
      const totalDurationComparison = getTotalDuration(a) - getTotalDuration(b);

      return priceComparison !== 0 ? priceComparison : totalDurationComparison;
    },
  };

  sortedTickets.sort(sortFunctions[sort]);

  return sortedTickets.filter((el) => filter.includes(stops(el)));
};

function getTotalDuration(ticket) {
  return ticket.segments.reduce(
    (total, segment) => total + segment.duration,
    0
  );
}

function stops(ticket) {
  return ticket.segments.reduce(
    (totalStops, segment) => totalStops + segment.stops.length,
    1
  );
}
