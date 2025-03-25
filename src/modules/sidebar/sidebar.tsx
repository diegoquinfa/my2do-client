import { Button } from '@/modules/ui/./button'
import { useTheme } from '@/modules/ui/hooks/useTheme'
import { Moon, Plus, Settings, Sun } from 'lucide-react'
import { TaskGroup } from './components/TaskGroup'

function Sidebar() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'))

  return (
    <aside className="bg-sidebar-background hidden h-dvh max-h-dvh w-max md:inline-block">
      <div className="flex h-full flex-col gap-4 p-5">
        <div className="flex justify-between gap-4">
          <p className="w-max text-xl font-bold">Grupos de tareas</p>
          <Button onClick={handleTheme} variant="ghost" className="flex rounded p-1">
            {theme == 'light' ? <Moon /> : <Sun />}
          </Button>
        </div>
        <div className="flex h-full snap-y flex-col gap-4">
          <TaskGroup ShortName="TRA" title="Trabajo" numTodos={1} color="sky" />
          <TaskGroup ShortName="PER" title="Personal" numTodos={2} color="yellow" />
          <TaskGroup ShortName="EST" title="Estudio" numTodos={1} color="green" />
        </div>
        <div className="grid grid-flow-col grid-cols-[auto,1fr]">
          <Button variant="ghost" className="w-fit">
            <Settings />
          </Button>
          <Button>
            <Plus /> Nuevo grupo
          </Button>
        </div>
      </div>
    </aside>
  )
}

export { Sidebar }
