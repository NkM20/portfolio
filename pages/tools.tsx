import Head from 'next/head'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import {IconJS, IconTS, IconReact, IconNode, IconDocker, IconPython, IconGit, IconTailwind} from '../components/Icons'

export default function Tools(){
  const tools = [
    {name:'JavaScript',icon:<IconJS/>},
    {name:'TypeScript',icon:<IconTS/>},
    {name:'React',icon:<IconReact/>},
    {name:'Node.js',icon:<IconNode/>},
    {name:'Python',icon:<IconPython/>},
    {name:'Docker',icon:<IconDocker/>},
    {name:'Git',icon:<IconGit/>},
    {name:'Tailwind CSS',icon:<IconTailwind/>}
  ]

  const wall = Array.from({length: 24}, (_,i)=> tools[i % tools.length])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Head><title>Tools — Fernando Marques</title></Head>
      <Nav />

      <header className="card mb-6">
          <div className="flex items-center gap-4 page-header">
          <Logo />
          <div>
              <h1 className="title">Tools & Stack</h1>
              <p className="subtitle">Languages, frameworks, and platforms I use most.</p>
          </div>
        </div>
          <div className="divider"/>
      </header>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold">Tool Wall</h2>
          <div className="tool-wall-wrap">
            <div className="tool-wall mt-3">
          {wall.map((t,idx)=> (
            <div key={`${t.name}-${idx}`} className="skill-badge tool-chip flex items-center gap-2 justify-center">
              {t.icon}
              <span className="text-sm">{t.name}</span>
            </div>
          ))}
            </div>
          </div>
      </section>

      { /* Removed duplicate categorized grid to avoid two sets of tools */ }
    </div>
  )
}
