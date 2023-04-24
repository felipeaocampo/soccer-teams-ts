export const dateStringToDate = (dateString: string): Date => {
  //day, month, year
  const [day, month, year] = dateString.split(`/`).map((str: string) => +str);

  return new Date(year, month - 1, day);
};
