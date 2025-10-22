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

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Head><title>Tools — Fernando Marques</title></Head>
      <Nav />

      <header className="card mb-6">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <h1 className="text-2xl font-semibold">Tools & Stack</h1>
            <p className="muted mt-1">My primary tools and frameworks — curated and anime-inspired.</p>
          </div>
        </div>
      </header>

      <section className="card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map(t=> (
            <div key={t.name} className="skill-badge flex items-center gap-2">
              {t.icon}
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
