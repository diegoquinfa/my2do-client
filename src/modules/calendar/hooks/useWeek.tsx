import { useCalendarStore } from '@/stores/useCalendarStore'
import { getWeek } from '@/utils/getWeek'
import { useEffect, useState } from 'react'

export const useWeek = () => {
  const selectedDay = useCalendarStore((state) => state.selectedDay)
  const setSelectedDay = useCalendarStore((state) => state.updateSelectedDay)

  const [weekDays, setWeekDays] = useState(getWeek(selectedDay))
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0)

  const handleDayClick = (date: Date) => setSelectedDay(date)

  const goToPreviousWeek = () => {
    const newDate = new Date(selectedDay)
    newDate.setDate(newDate.getDate() - 7)
    setSelectedDay(newDate)
    setCurrentWeekOffset((prev) => prev - 1)
  }

  const goToNextWeek = () => {
    const newDate = new Date(selectedDay)
    newDate.setDate(newDate.getDate() + 7)
    setSelectedDay(newDate)
    setCurrentWeekOffset((prev) => prev + 1)
  }

  useEffect(() => {
    setWeekDays(getWeek(selectedDay, 'es'))
  }, [selectedDay])

  return {
    selectedDay,
    setSelectedDay,
    weekDays,
    handleDayClick,
    goToNextWeek,
    goToPreviousWeek,
    currentWeekOffset
  }
}
