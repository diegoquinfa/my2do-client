import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/modules/ui/tooltip'
import { format } from '@formkit/tempo'
import { ComponentProps } from 'react'

type WeekItemProps = ComponentProps<'button'> & {
  name: string
  day: string
  date: Date
  isCurrentDay: boolean
  isSelectedDay: boolean
}

export const WeekItem = ({
  name,
  day,
  date,
  isSelectedDay,
  isCurrentDay,
  ...props
}: WeekItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          {...props}
          className={cn(
            'text-foreground-subtle bg-background-highlight active:bg-background-highlight/70 flex h-fit shrink-0 flex-col rounded-lg px-6 py-3 transition-all select-none hover:scale-105',

            isCurrentDay && !isSelectedDay
              ? 'text-success'
              : isSelectedDay
                ? 'text-info/60 [&_p_+_p]:text-info'
                : '[&_p_+_p]:text-white'
          )}
        >
          <p className="mx-auto text-xs">{name}</p>
          <p className="text-lg font-bold">{day}</p>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-foreground font-bold">{format(date, 'medium', 'es')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
