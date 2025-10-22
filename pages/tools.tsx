import Head from 'next/head'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import {IconJS, IconTS, IconReact, IconNode, IconDocker, IconPython, IconGit, IconTailwind, IconNext, IconFirebase, IconMongo, IconMySQL, IconFlutter, IconKotlin, IconDuckDB, IconSalesforce, IconSAP, IconAssembly, IconPostgres} from '../components/Icons'

export default function Tools(){
  const items = [
    { name:'React', icon:<IconReact className="w-10 h-10"/>, desc:'UI library for building interactive interfaces', link:'https://react.dev' },
    { name:'Next.js', icon:<IconNext className="w-10 h-10"/>, desc:'React framework for production-grade apps', link:'https://nextjs.org' },
    { name:'Tailwind CSS', icon:<IconTailwind className="w-10 h-10"/>, desc:'Utility-first CSS framework', link:'https://tailwindcss.com' },
    { name:'TypeScript', icon:<IconTS className="w-10 h-10"/>, desc:'Typed superset of JavaScript', link:'https://www.typescriptlang.org' },
    { name:'JavaScript', icon:<IconJS className="w-10 h-10"/>, desc:'Language of the web', link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name:'Node.js', icon:<IconNode className="w-10 h-10"/>, desc:'Runtime for building servers and tools', link:'https://nodejs.org' },
    { name:'Python', icon:<IconPython className="w-10 h-10"/>, desc:'General-purpose language for scripts and AI', link:'https://www.python.org' },
    { name:'Docker', icon:<IconDocker className="w-10 h-10"/>, desc:'Containerization for apps and services', link:'https://www.docker.com' },
    { name:'Git', icon:<IconGit className="w-10 h-10"/>, desc:'Version control', link:'https://git-scm.com' },
    { name:'Firebase', icon:<IconFirebase className="w-10 h-10"/>, desc:'Backend-as-a-service by Google', link:'https://firebase.google.com' },
  { name:'MongoDB', icon:<IconMongo className="w-10 h-10"/>, desc:'NoSQL database', link:'https://www.mongodb.com' },
  { name:'MySQL', icon:<IconMySQL className="w-10 h-10"/>, desc:'Relational database', link:'https://www.mysql.com' },
    // Added based on user experience
    { name:'Flutter', icon:<IconFlutter className="w-10 h-10"/>, desc:'Cross-platform UI toolkit', link:'https://flutter.dev' },
    { name:'Assembly', icon:<IconAssembly className="w-10 h-10"/>, desc:'Low-level programming language family', link:'https://en.wikipedia.org/wiki/Assembly_language' },
    { name:'Kotlin', icon:<IconKotlin className="w-10 h-10"/>, desc:'Modern language for Android and beyond', link:'https://kotlinlang.org' },
    { name:'DuckDB', icon:<IconDuckDB className="w-10 h-10"/>, desc:'In-process analytical SQL database', link:'https://duckdb.org' },
  { name:'Salesforce Apex', icon:<IconSalesforce className="w-10 h-10"/>, desc:'Salesforce-native programming language', link:'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm' },
  { name:'PostgreSQL', icon:<IconPostgres className="w-10 h-10"/>, desc:'Relational database', link:'https://www.postgresql.org' },
    { name:'SAP', icon:<IconSAP className="w-10 h-10"/>, desc:'ERP software suite and platform', link:'https://www.sap.com' },
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

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card rounded-[30px] p-5 sm:p-8 col-span-2 lg:col-span-2 flex flex-col gap-3 min-h-[260px] tool-hero">
          <Logo />
          <div>
            <h2 className="text-2xl font-semibold">Tech & Tools</h2>
            <p className="muted">A snapshot of the languages, frameworks and platforms I use regularly.</p>
          </div>
        </div>
        {items.map((item)=> (
          <div key={item.name} className="card tool-item rounded-[30px] flex flex-col justify-center min-h-[280px] relative">
            <div className="m-5">
              <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-6">
                {item.icon}
              </div>
              <div className="mt-4 text-left w-full mb-3">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="muted text-sm mt-1">{item.desc}</p>
              </div>
              <a href={`${item.link}`} target="_blank" rel="noreferrer" className="tool-arrow">
                <div className="arrow-circle">
                  <span className="sr-only">Open {item.name}</span>
                  →
                </div>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
