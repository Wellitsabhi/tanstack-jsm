import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$users/skills/$username')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$users/skills/$username"!</div>
}
