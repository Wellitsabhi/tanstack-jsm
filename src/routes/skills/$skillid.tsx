import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/$skillid')({
  component: RouteComponent,
})

function RouteComponent() {
    const {skillid} = Route.useParams();
  return <div>Hello {skillid}</div>
}
