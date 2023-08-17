const dateFormatter = (date) =>
  new Intl.DateTimeFormat(undefined, {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));

export default dateFormatter;
