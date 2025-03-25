import { useEffect, useState } from 'react'
import { addMonth } from '@formkit/tempo'
import { useCalendarStore } from '@/stores/useCalendarStore'
import { getMonth } from '@/utils/getMonth'

export const useMonth = () => {
  const selectedDay = useCalendarStore((state) => state.selectedDay)
  const setSelectedDay = useCalendarStore((state) => state.updateSelectedDay)

  const [monthDays, setMonthDays] = useState(getMonth(selectedDay))
  const [currentMonthOffset, setCurrentMonthOffset] = useState(0)

  const handleDayClick = (date: Date) => setSelectedDay(date)

  const goToPreviousMonth = () => {
    const newDate = addMonth(selectedDay, -1)
    setSelectedDay(newDate)
    setCurrentMonthOffset((prev) => prev - 1)
  }

  const goToNextMonth = () => {
    const newDate = addMonth(selectedDay, 1)
    setSelectedDay(newDate)
    setCurrentMonthOffset((prev) => prev + 1)
  }

  useEffect(() => {
    setMonthDays(getMonth(selectedDay, 'es'))
  }, [selectedDay])

  return {
    selectedDay,
    setSelectedDay,
    monthDays,
    handleDayClick,
    goToNextMonth,
    goToPreviousMonth,
    currentMonthOffset
  }
}
