import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/modules/ui/button'
import { Sidebar } from '@/modules/sidebar'
import { CalendarDays, Plus } from 'lucide-react'
import { WeekSlider } from '@/modules/calendar/WeekSlider'
import { useCalendarStore } from '@/stores/useCalendarStore'
import { format } from '@formkit/tempo'
import { MonthModal } from '@/modules/calendar/MonthModal'

export const Route = createFileRoute('/todo/')({
  component: TodoView
})

function TodoView() {
  const currentDay = useCalendarStore((state) => state.currentDay)
  const updateSelectedDay = useCalendarStore((state) => state.updateSelectedDay)

  return (
    <div className="mx-auto flex">
      <Sidebar />

      <div className="flex w-full flex-col gap-2">
        <div className="flex justify-between gap-2 border-b-1 p-5">
          <div className="flex gap-3">
            <div className="size-10 rounded-full bg-red-300">
              <div className="flex h-full items-center justify-center">
                <p className="font-bold">M</p>
              </div>
            </div>

            <div>
              <p className="font-bold">Hola, Miguel</p>
              <p
                onClick={() => {
                  updateSelectedDay(currentDay)
                }}
                className="hover:text-primary active:text-primary/80 cursor-default select-none"
              >
                {format(currentDay, 'full', 'es')}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <MonthModal />

            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Buscar tarea..."
                className="border-response-pane-border bg-response-pane-background placeholder:text-foreground-subtlest block min-w-0 grow rounded-md border px-5 py-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="border-b-1 p-5">
          {/* <WeekSlider /> */}
          <WeekSlider />
        </div>

        <div className="flex justify-between p-5">
          <p className="text-2xl font-bold">Tareas de hoy</p>
          <Button>
            <Plus />
            Nueva tarea
          </Button>
        </div>
      </div>
    </div>
  )
}
