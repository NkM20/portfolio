import Head from 'next/head'
import type {GetStaticProps} from 'next'
import fetchPinnedOrRecent from '../lib/github'
import ProjectCard from '../components/ProjectCard'
import {IconGitHub, IconLinkedIn, IconJS, IconTS, IconReact, IconNext, IconNode, IconPython, IconTailwind, IconDocker, IconGit, IconFirebase, IconMongo, IconSQL} from '../components/Icons'
import Timeline, {TimelineItem} from '../components/Timeline'
import Logo from '../components/Logo'
import Particles from '../components/Particles'

type Repo = {name:string,description:string|null,html_url:string,language:string|null,stargazers_count:number}

import {useEffect,useState} from 'react'

export default function Home({repos}:{repos:Repo[]}){
  const [text,setText] = useState('')
  const [showProjects,setShowProjects] = useState(false)
  const full = `> $ NkM@portfolio:~ echo "NkM — Full-Stack Developer"`
  useEffect(()=>{
    let i=0;const t=setInterval(()=>{setText(full.slice(0,++i));if(i>=full.length)clearInterval(t)},24);return ()=>clearInterval(t)
  },[])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Head><title>Fernando Marques — Full-Stack Developer</title></Head>
      <header className="card mb-6 hero-vignette" style={{position:'relative',overflow:'hidden'}}>
        <Particles />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <div>
              <div className="cli-prompt">&gt; $ NkM@portfolio:~</div>
              <h1 className="typing mt-2">{text}</h1>
              <p className="hero-sub mt-2">Early-career developer building AI-enabled web & mobile experiences · Cloud & Systems</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a className="card skill-badge" href="https://github.com/NkM20" aria-label="GitHub" target="_blank" rel="noreferrer"><IconGitHub/></a>
            <a className="card skill-badge" href="https://www.linkedin.com/in/fjfmarques" aria-label="LinkedIn" target="_blank" rel="noreferrer"><IconLinkedIn/></a>
          </div>
        </div>
      </header>

      <section className="card mb-6 animate-fade-up">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-gray-300 mt-2">I’m Fernando Marques, a passionate Junior Software Developer blending full-stack engineering, AI integration, and cloud development. My hands-on experience spans building mobile and web applications, designing robust backends, integrating cloud services (Firebase, Google Cloud), and delivering production-ready AI solutions like TaxBot — an EU tax advisory assistant.</p>
        <p className="text-gray-300 mt-2">Beyond software delivery, I thrive on solving complex technical challenges, optimizing systems, and enhancing cybersecurity awareness, honed through Capture The Flag (CTF) competitions. I also enjoy sharing knowledge, having supported peers as a React Native tutor and collaborator.</p>
        <p className="text-gray-300 mt-2">I’m eager to connect with teams and opportunities that value innovation, practical AI applications, and end-to-end product development.</p>
      </section>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold">Education & Experience</h2>
        <div className="mt-3">
          <Timeline items={[
            {period: '2024 — Present', title: "MSc in Informatics", org: 'Instituto Politécnico de Bragança', details: 'Focus on Cloud, AI and Systems'},
            {period: 'Mar 2025 — May 2025', title: 'AI Research Intern', org: 'INFONET', details: 'Model development, experiments and deployment.'}
          ] as TimelineItem[]} />
        </div>
      </section>

      <section className="card mb-6 animate-fade-up">
        <h2 className="text-xl font-semibold">Skills & Stack</h2>
        <div className="mt-3">
          <h4 className="text-sm muted">Languages</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {[{name:'JavaScript',icon:<IconJS/>},{name:'TypeScript',icon:<IconTS/>},{name:'Python',icon:<IconPython/>},{name:'C#',icon:null},{name:'C++',icon:null},{name:'PHP',icon:null}].map(s=> (<span key={s.name} className="skill-badge">{s.icon} <span className="ml-2">{s.name}</span></span>))}
          </div>

          <h4 className="text-sm muted mt-4">Frameworks & Mobile</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {[{name:'React',icon:<IconReact/>},{name:'React Native',icon:<IconReact/>},{name:'Next.js',icon:<IconNext/>},{name:'WordPress',icon:null}].map(s=> (<span key={s.name} className="skill-badge">{s.icon} <span className="ml-2">{s.name}</span></span>))}
          </div>

          <h4 className="text-sm muted mt-4">Cloud & Backend</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {[{name:'Firebase',icon:<IconFirebase/>},{name:'Google Cloud',icon:null},{name:'Node.js',icon:<IconNode/>},{name:'REST APIs',icon:null},{name:'Cloud Functions',icon:null}].map(s=> (<span key={s.name} className="skill-badge">{s.icon} <span className="ml-2">{s.name}</span></span>))}
          </div>

          <h4 className="text-sm muted mt-4">Data & Databases</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {[{name:'MySQL',icon:<IconSQL/>},{name:'PL/SQL',icon:<IconSQL/>},{name:'MongoDB',icon:<IconMongo/>}].map(s=> (<span key={s.name} className="skill-badge">{s.icon} <span className="ml-2">{s.name}</span></span>))}
          </div>

          <h4 className="text-sm muted mt-4">Tools & DevOps</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {[{name:'Docker',icon:<IconDocker/>},{name:'Git',icon:<IconGit/>},{name:'Figma',icon:null},{name:'VS Code',icon:null}].map(s=> (<span key={s.name} className="skill-badge">{s.icon} <span className="ml-2">{s.name}</span></span>))}
          </div>
        </div>
      </section>

      <section className="card mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div>
            <button onClick={()=>setShowProjects(v=>!v)} className="skill-badge">{showProjects? 'Hide projects' : `Show projects (${repos.length})`}</button>
          </div>
        </div>
        {showProjects ? (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map(r=> <ProjectCard key={r.html_url} repo={r} />)}
          </div>
        ) : (
          <div className="muted mt-3">Projects are hidden by default — click “Show projects” to reveal a compact list.</div>
        )}
      </section>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-3">
          <div className="timeline-item">
            <div className="meta"><strong>AI Research Intern</strong> — INFONET (Mar 2025 - May 2025)</div>
            <div className="text-gray-400">Worked on hands-on AI projects, model development and cloud deployment.</div>
          </div>
        </div>
      </section>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold">Education & Certifications</h2>
        <div className="mt-3 timeline-item">
          <div className="meta"><strong>Instituto Politécnico de Bragança</strong> — Master's degree, Informatics (Sep 2024 - Present)</div>
          <div className="text-gray-400">Software Development focus. Courses: Cloud, AI, Systems.</div>
        </div>
        <div className="mt-3 timeline-item">
          <div className="meta"><strong>Licenses & certificates</strong></div>
          <ul className="text-gray-400 list-disc ml-5 mt-2">
            <li>Advanced React — Meta</li>
            <li>React Native — Meta</li>
            <li>AI Solution Builder — INFONET</li>
          </ul>
        </div>
      </section>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold">Skills & Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            'JavaScript','TypeScript','React.js','React Native','Next.js','Node.js','Python','Firebase','Docker','SQL','MySQL','Postgres','MongoDB','NoSQL','Git','GitHub','GitLab','Tailwind CSS','CSS','Figma','Arduino IDE','Kali Linux','Debian','Linux','PL/SQL','PHP','PhpMyAdmin','SAP','Packet Tracer','Cisco Networking','npm'
          ].map(s=> (<span key={s} className="skill-badge">{s}</span>))}
        </div>
      </section>

      <footer className="card mt-6">
        <pre className="console">Contact: you@example.com | GitHub: https://github.com/NkM20</pre>
      </footer>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  const username = process.env.GITHUB_USERNAME || 'NkM20'
  const token = process.env.GITHUB_TOKEN
  const url = `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`
  const headers: Record<string,string> = {'User-Agent':'next-portfolio'}
  if(token) headers.Authorization = `token ${token}`
  const res = await fetch(url,{headers})
  const data = await res.json()
  const repos = (Array.isArray(data)?data:[]).map((r:any)=>({name:r.name,description:r.description,html_url:r.html_url,language:r.language,stargazers_count:r.stargazers_count}))
  return {props:{repos}}
}
