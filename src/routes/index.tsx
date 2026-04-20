import SkillCard from '#/components/SkillCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h2> hi.  world</h2>
     
     <ul className='mt-7 list-none p-0 space-y-5'>
      <li><SkillCard name="React" /></li>
      <li><SkillCard name="TansStack" /></li>
      <li><SkillCard name="Nodejs" /></li>
     </ul>
    </main>
  )
}
