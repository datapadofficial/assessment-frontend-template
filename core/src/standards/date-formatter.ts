const dateFormatter = function dateFormatter(date: string | Date) {
  if (date === undefined || date === null) {
    return "";
  }

  let date_ = (date.constructor === Date) ? date : new Date(date);

  const options = {
    // weekday: "long",
    year: "numeric" as const,
    month: "long" as const,
    day: "2-digit" as const,
  };

  return date_.toLocaleDateString("tr-TR", options);
};

export { dateFormatter, dateFormatter as default };
