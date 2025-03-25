import { Button } from '@/modules/ui/button'
import { useTheme } from '@/modules/ui/hooks/useTheme'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const { setTheme } = useTheme()

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <br />
      <Button onClick={() => setTheme('light')}>light</Button>
      <br />
      <Button onClick={() => setTheme('dark')}>dark</Button>
    </div>
  )
}
