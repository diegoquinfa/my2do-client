import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription
} from '../ui/dialog'
import { Button } from '../ui/button'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from '@formkit/tempo'
import { useMonth } from './hooks/useMonth'
import { cn } from '@/lib/utils'

export const MonthModal = () => {
  const { selectedDay, monthDays, handleDayClick, goToPreviousMonth, goToNextMonth } = useMonth()

  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-primary-text hover:bg-background-highlight rounded-lg p-2">
          <CalendarDays />
        </DialogTrigger>
        <DialogContent className="min-w-max pt-16">
          <DialogHeader className="flex flex-row justify-center gap-8">
            <Button onClick={goToPreviousMonth} variant="ghost">
              <ChevronLeft className="size-5" />
            </Button>
            <DialogTitle className="text-lg font-bold">
              {format(selectedDay, 'MMMM YYYY', 'es')}
            </DialogTitle>
            <Button onClick={goToNextMonth} variant="ghost">
              <ChevronRight className="size-5" />
            </Button>
          </DialogHeader>

          <div className="mx-auto grid w-fit grid-cols-7 grid-rows-5 gap-2">
            {monthDays.map((data) => (
              <div
                key={data.date.toString()}
                onClick={() => handleDayClick(data.date)}
                className={cn(
                  'bg-background-highlight size-20 rounded-lg p-2',
                  data.isCurrentDay && !data.isSelectedDay
                    ? 'border-danger text-danger border-2'
                    : data.isSelectedDay
                      ? 'border-info text-info border-2'
                      : ''
                )}
              >
                {data.day}
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogDescription className="sr-only">Calendary</DialogDescription>
      </Dialog>
    </div>
  )
}
