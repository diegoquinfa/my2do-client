import { format, monthStart, monthEnd, addDay, sameDay } from '@formkit/tempo'

export function getMonth(selectedDay: string | Date = new Date(), formatLang = 'es') {
  const start = monthStart(selectedDay)
  const end = monthEnd(selectedDay)

  const daysInMonth: Date[] = []
  let currentDay = start

  while (currentDay <= end) {
    daysInMonth.push(currentDay)
    currentDay = addDay(currentDay, 1)
  }

  return daysInMonth.map((day) => ({
    name: format(day, 'ddd', formatLang),
    day: format(day, 'D'),
    date: day,
    isCurrentDay: sameDay(new Date(), day),
    isSelectedDay: sameDay(selectedDay, day),
    isCurrentMonth: sameDay(new Date(), day)
  }))
}
