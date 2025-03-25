import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { useWeek } from './hooks/useWeek'
import { WeekItem } from './components/WeekItem'

export const WeekSlider = () => {
  const { goToPreviousWeek, goToNextWeek, handleDayClick, weekDays } = useWeek()

  console.log(weekDays)
  return (
    <div className="flex items-center justify-between gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPreviousWeek}
        className="text-foreground-subtle hover:bg-background-highlight shrink-0 rounded-full"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <div className="w-[90%] overflow-hidden md:w-[400px] lg:flex-1">
        <ScrollArea className="rounded-md whitespace-nowrap">
          <div className="mx-auto flex justify-center gap-2 py-4 md:gap-4">
            {weekDays.map((data) => (
              <WeekItem
                key={data.date.toString()}
                {...data}
                onClick={() => handleDayClick(data.date)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNextWeek}
        className="text-foreground-subtle hover:bg-background-highlight shrink-0 rounded-full"
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  )
}
