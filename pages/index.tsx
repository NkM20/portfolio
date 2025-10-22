import Head from 'next/head'
import type {GetStaticProps} from 'next'
import fetchPinnedOrRecent from '../lib/github'
import ProjectCard from '../components/ProjectCard'
import {IconGitHub, IconLinkedIn, IconGmail, IconJS, IconTS, IconReact, IconNext, IconNode, IconPython, IconTailwind, IconDocker, IconGit, IconFirebase, IconMongo, IconMySQL, IconOracle, IconFigma, IconVSCode} from '../components/Icons'
import { FiSun, FiMoon } from 'react-icons/fi'
import Timeline, {TimelineItem} from '../components/Timeline'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Particles from '../components/Particles'

type Repo = {name:string,description:string|null,html_url:string,language:string|null,stargazers_count:number}

import {useEffect,useState} from 'react'

export default function Home({repos}:{repos:Repo[]}){
  const [text,setText] = useState('')
  const [showProjects,setShowProjects] = useState(false)
  const [intro,setIntro] = useState(false)
  const [theme,setTheme] = useState<'dark'|'light'>('dark')
  const [reposClient,setReposClient] = useState<Repo[]>(repos || [])
  const full = `> $ NkM@portfolio:~ echo "NkM — Full-Stack Developer"`
  useEffect(()=>{
    let i=0;const t=setInterval(()=>{setText(full.slice(0,++i));if(i>=full.length)clearInterval(t)},24);return ()=>clearInterval(t)
  },[])

  useEffect(()=>{
    const id = setTimeout(()=>setIntro(true),420)
    return ()=>clearTimeout(id)
  },[])

  // theme: hydrate from localStorage and apply to <html>
  useEffect(()=>{
    if(typeof window === 'undefined') return
    const saved = (localStorage.getItem('theme') as 'dark'|'light'|null) || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  },[])

  const toggleTheme = ()=>{
    const next: 'dark'|'light' = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if(typeof window !== 'undefined'){
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('theme', next)
    }
  }

  // Fallback client fetch for repos if build-time result is empty
  useEffect(()=>{
    const run = async()=>{
      if(!showProjects) return
      if(reposClient && reposClient.length > 0) return
      try{
        const res = await fetch('https://api.github.com/users/NkM20/repos?per_page=6&sort=updated', { headers: { 'User-Agent': 'next-portfolio' } })
        const data = await res.json()
        if(Array.isArray(data)){
          const mapped = data.map((r:any)=>({name:r.name,description:r.description,html_url:r.html_url,language:r.language,stargazers_count:r.stargazers_count}))
          setReposClient(mapped)
        }
      }catch(e){/* ignore */}
    }
    run()
  },[showProjects])

  // add a class to reveal main sections after typing is finished
  useEffect(()=>{
    if(!text || text.length < 5) return
    const total = full.length
    if(text.length >= total){
      const id = setTimeout(()=>{
        document.documentElement.classList.add('show-sections')
      }, 300)
      return ()=>clearTimeout(id)
    }
  },[text])

  // masonry grid helper: compute row spans from element heights
  // Use CSS grid layout (Tailwind classes) instead of JS-driven masonry
  // The layout now relies on responsive Tailwind grid + col-span utilities

  return (
  <div className={`max-w-6xl mx-auto p-6 ${intro? 'intro-run':'intro-trigger'}`}>
    <Head><title>Fernando Marques — Full-Stack Developer</title></Head>
    <Nav />

    <div className="masonry-root">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[130px] gap-3">
          <header className="card hero-vignette col-span-2 lg:col-span-2 row-span-2" style={{position:'relative',overflow:'hidden'}}>
          <Particles />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <div className="cli-prompt">&gt; $ NkM@portfolio:~</div>
                <h1 className="typing mt-2">{text}</h1>
                <p className="hero-sub mt-2">Early-career developer building AI-enabled web & mobile experiences · Cloud & Systems</p>
              </div>
            </div>
            <div className="flex gap-2">
              <a className="skill-badge" href="https://github.com/NkM20" aria-label="GitHub" target="_blank" rel="noreferrer"><IconGitHub/></a>
              <a className="skill-badge" href="https://www.linkedin.com/in/fjfmarques" aria-label="LinkedIn" target="_blank" rel="noreferrer"><IconLinkedIn/></a>
            </div>
          </div>
          </header>

          <section id="about" className="card col-span-2 lg:col-span-1 row-span-2">
            <h2 className="text-xl font-semibold">About</h2>
            <div className="scroll text-sm leading-relaxed mt-2 text-gray-300">
              <p>I’m Fernando Marques, a passionate Junior Software Developer blending full-stack engineering, AI integration, and cloud development. My hands-on experience spans building mobile and web applications, designing robust backends, integrating cloud services (Firebase, Google Cloud), and delivering production-ready AI solutions like TaxBot — an EU tax advisory assistant.</p>
              <p className="mt-2">Beyond software delivery, I thrive on solving complex technical challenges, optimizing systems, and enhancing cybersecurity awareness, honed through Capture The Flag (CTF) competitions. I also enjoy sharing knowledge, having supported peers as a React Native tutor and collaborator.</p>
              <p className="mt-2">I’m eager to connect with teams and opportunities that value innovation, practical AI applications, and end-to-end product development.</p>
            </div>
          </section>

          {/* Theme toggle card */}
          <section id="theme" className="card col-span-2 lg:col-span-1 row-span-1 flex">
            <h2 className="text-xl font-semibold">Appearance</h2>
            <div className="flex-1 flex items-center justify-between mt-1">
              <p className="muted">Switch between light and dark modes.</p>
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                <FiMoon className="icon"/>
                <FiSun className="icon"/>
                <span className="sr-only">Toggle theme</span>
                <span className="knob" style={{transform: theme==='dark'? 'translateX(0)' : 'translateX(60px)'}}/>
              </button>
            </div>
          </section>

          <section id="timeline" className="card col-span-2 lg:col-span-1 row-span-2">
            <h2 className="text-xl font-semibold">Timeline</h2>
            <div className="scroll mt-3">
              <Timeline items={[
              {period: '2024 — Present', title: "MSc in Informatics", org: 'Instituto Politécnico de Bragança', details: 'Focus on Cloud, AI and Systems'},
              {period: '2021 — 2025', title: "Bacharelado em Engenharia Informática", org: 'Instituto Politécnico de Bragança', details: 'Software Development, coursework & projects'},
              {period: 'Mar 2025 — May 2025', title: 'AI Research Intern', org: 'INFONET', details: 'Model development, experiments and deployment.'}
            ] as TimelineItem[]} />
            </div>
          </section>

          <section id="skills" className="card col-span-2 lg:col-span-1 row-span-4">
          <h2 className="text-xl font-semibold">Skills & Stack</h2>
          <div className="scroll mt-2">
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
            {[{name:'MySQL',icon:<IconMySQL/>},{name:'PL/SQL',icon:<IconOracle/>},{name:'MongoDB',icon:<IconMongo/>}].map(s=> (<span key={s.name} className="skill-badge">{s.icon} <span className="ml-2">{s.name}</span></span>))}
          </div>

          <h4 className="text-sm muted mt-4">Tools & DevOps</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {[{name:'Docker',icon:<IconDocker/>},{name:'Git',icon:<IconGit/>},{name:'Figma',icon:<IconFigma/>},{name:'VS Code',icon:<IconVSCode/>}].map(s=> (<span key={s.name} className="skill-badge">{s.icon} <span className="ml-2">{s.name}</span></span>))}
          </div>
        </div>
          </section>

          <section id="projects" className="card col-span-2 lg:col-span-2 row-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div>
            <button onClick={()=>setShowProjects(v=>!v)} className="skill-badge">{showProjects? 'Hide projects' : `Show projects (${(reposClient?.length||repos.length)})`}</button>
          </div>
        </div>
        <div className="scroll mt-2">
          {showProjects ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(reposClient?.length? reposClient: repos).map(r=> <ProjectCard key={r.html_url} repo={r} />)}
            </div>
          ) : (
            <div className="muted">Projects are hidden by default — click “Show projects” to reveal a compact list.</div>
          )}
        </div>
          </section>

          <section id="experience" className="card col-span-2 lg:col-span-1 row-span-2">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="scroll mt-3">
              <div className="timeline-item">
                <div className="meta"><strong>AI Solution Builder (Internship)</strong> — INFONET (Mar 2025 - May 2025)</div>
                <div className="text-gray-400">Hands-on AI development and deployment: models, experiments, and cloud delivery.</div>
              </div>
            </div>
          </section>

          <section id="education" className="card col-span-2 lg:col-span-1 row-span-2">
            <h2 className="text-xl font-semibold">Education & Certifications</h2>
            <div className="scroll">
              <div className="mt-3 timeline-item">
                <div className="meta"><strong>Instituto Politécnico de Bragança</strong> — Master's degree, Informatics (Sep 2024 - Present)</div>
                <div className="text-gray-400">Software Development focus. Courses: Cloud, AI, Systems.</div>
              </div>
            </div>
          </section>

          <section id="certifications" className="card col-span-2 lg:col-span-1 row-span-2">
            <h2 className="text-xl font-semibold">Certifications</h2>
            <div className="scroll">
              <ul className="text-gray-300 list-disc ml-5 mt-2">
                <li>Advanced React — Meta</li>
                <li>React Native — Meta</li>
              </ul>
            </div>
          </section>

          <footer className="card col-span-2 lg:col-span-1 row-span-2">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="scroll mt-2 flex gap-2 flex-wrap items-center">
              <a className="skill-badge flex items-center gap-2" href="mailto:nando.marques.dev@gmail.com"><IconGmail className="w-5 h-5"/> Gmail</a>
              <a className="skill-badge flex items-center gap-2" href="https://github.com/NkM20" target="_blank" rel="noreferrer"><IconGitHub className="w-5 h-5"/> GitHub</a>
              <a className="skill-badge flex items-center gap-2" href="https://www.linkedin.com/in/fjfmarques" target="_blank" rel="noreferrer"><IconLinkedIn className="w-5 h-5"/> LinkedIn</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
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
