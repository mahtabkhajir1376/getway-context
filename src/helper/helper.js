export const empty = (value) => {
  return value == 0 || value === undefined || value === "" || value === null || value === "null"|| value === "NULL"|| value === "NaN"|| value === "-";
};
