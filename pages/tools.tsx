import Head from 'next/head'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import {IconJS, IconTS, IconReact, IconNode, IconDocker, IconPython, IconGit, IconTailwind, IconNext, IconFirebase, IconMongo, IconSQL} from '../components/Icons'

export default function Tools(){
  const groups = [
    { title: 'Languages', span: 'lg:col-span-2 lg:row-span-2', items: [
      {name:'JavaScript',icon:<IconJS className="icon"/>},
      {name:'TypeScript',icon:<IconTS className="icon"/>},
      {name:'Python',icon:<IconPython className="icon"/>},
      {name:'C#',icon:null},
      {name:'C++',icon:null},
    ]},
    { title: 'Frontend', span: 'lg:col-span-2 lg:row-span-2', items: [
      {name:'React',icon:<IconReact className="icon"/>},
      {name:'Next.js',icon:<IconNext className="icon"/>},
      {name:'Tailwind',icon:<IconTailwind className="icon"/>},
    ]},
    { title: 'Mobile', span: 'lg:col-span-1 lg:row-span-1', items: [
      {name:'React Native',icon:<IconReact className="icon"/>},
    ]},
    { title: 'Backend & APIs', span: 'lg:col-span-2 lg:row-span-2', items: [
      {name:'Node.js',icon:<IconNode className="icon"/>},
      {name:'REST',icon:null},
      {name:'Express',icon:null},
    ]},
    { title: 'Cloud', span: 'lg:col-span-2 lg:row-span-2', items: [
      {name:'Firebase',icon:<IconFirebase className="icon"/>},
      {name:'Google Cloud',icon:null},
      {name:'Cloud Functions',icon:null},
    ]},
    { title: 'Databases', span: 'lg:col-span-2 lg:row-span-1', items: [
      {name:'MySQL',icon:<IconSQL className="icon"/>},
      {name:'PL/SQL',icon:<IconSQL className="icon"/>},
      {name:'MongoDB',icon:<IconMongo className="icon"/>},
    ]},
    { title: 'DevOps', span: 'lg:col-span-1 lg:row-span-1', items: [
      {name:'Docker',icon:<IconDocker className="icon"/>},
      {name:'Git',icon:<IconGit className="icon"/>},
    ]},
    { title: 'Design & Tools', span: 'lg:col-span-2 lg:row-span-1', items: [
      {name:'Figma',icon:null},
      {name:'VS Code',icon:null},
    ]},
  ]

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

      <section className="mb-2">
        <div className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[120px] gap-3">
          {groups.map((g)=> (
            <div key={g.title} className={`tool-card card ${g.span}`}>
              <div className="title">{g.title}</div>
              <div className="tool-tags">
                {g.items.map(it => (
                  <span key={it.name} className="tag">
                    {it.icon}
                    <span>{it.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
