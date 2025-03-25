import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type TaskGroupColors = 'red' | 'blue' | 'green' | 'sky' | 'yellow'

type TaskGroupProps = ComponentProps<'div'> & {
  ShortName: string
  title: string
  numTodos: number
  color: TaskGroupColors
}

const colorMap = {
  red: 'bg-red-400/70 text-red-50',
  blue: 'bg-blue-400/70 text-blue-50',
  green: 'bg-green-400/70 text-green-50',
  sky: 'bg-sky-400/70 text-sky-50',
  yellow: 'bg-yellow-400/70 text-yellow-50'
} as const

export const TaskGroup = ({ ShortName, title, numTodos, color }: TaskGroupProps) => {
  return (
    <div className="hover:bg-background-highlight flex gap-4 rounded-lg p-2">
      <div className={cn(`text-background rounded-md p-3 font-bold`, colorMap[color])}>
        {ShortName}
      </div>
      <div className="">
        <p className="font-bold">{title}</p>
        <p className="text-foreground-subtle">
          {numTodos} {numTodos > 1 ? 'Tareas' : 'Tarea'}
        </p>
      </div>
    </div>
  )
}
