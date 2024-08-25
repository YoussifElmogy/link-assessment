export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const weekday = date.toLocaleDateString("en-GB", { weekday: "short" });
  const day = date.toLocaleDateString("en-GB", { day: "numeric" });
  const month = date.toLocaleDateString("en-GB", { month: "short" });
  const year = date.toLocaleDateString("en-GB", { year: "numeric" });

  return `${weekday} ${day} ${month} ${year}`;
};
