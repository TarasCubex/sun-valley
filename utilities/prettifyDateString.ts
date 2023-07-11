
export const prettifyDateString = (day: string, month: string, year: string) => {
  day = day.length === 1 ? '0'+day : day
  month = month.length === 1 ? '0'+month : month
  return `${day}.${month}.${year}`
}