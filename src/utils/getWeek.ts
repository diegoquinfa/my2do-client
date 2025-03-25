import { format, weekStart, addDay, sameDay } from '@formkit/tempo'

export function getWeek(selectedDay: string | Date = new Date(), formatLang = 'es') {
  const weekDays: Date[] = [weekStart(selectedDay, 1)]

  let currentWeekDay = weekDays[0]

  for (let i = 1; i <= 6; i++) {
    const d = addDay(currentWeekDay, 1)
    weekDays.push(d)
    currentWeekDay = d
  }

  const formatedWeekDays = weekDays.map((day) => ({
    name: format(day, 'ddd', formatLang),
    day: format(day, 'D'),
    date: day,
    isCurrentDay: sameDay(new Date(), day),
    isSelectedDay: sameDay(selectedDay, day)
  }))

  return formatedWeekDays
}
