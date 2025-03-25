import { create } from 'zustand'

type State = {
  currentDay: Date
  selectedDay: Date
}

type Action = {
  updateSelectedDay: (selectDay: State['selectedDay']) => void
}

export const useCalendarStore = create<State & Action>((set) => ({
  currentDay: new Date(),
  selectedDay: new Date(),
  updateSelectedDay: (selectedDay) => set(() => ({ selectedDay }))
}))
