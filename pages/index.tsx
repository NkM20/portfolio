import Head from 'next/head'
import type {GetStaticProps} from 'next'
import fetchPinnedOrRecent from '../lib/github'
import ProjectCard from '../components/ProjectCard'

type Repo = {name:string,description:string|null,html_url:string,language:string|null,stargazers_count:number}

import {useEffect,useState} from 'react'

export default function Home({repos}:{repos:Repo[]}){
  const [text,setText] = useState('')
  const full = `> $ fjfmarques@portfolio:~ echo "Fernando Marques — Full-Stack Developer"`
  useEffect(()=>{
    let i=0;const t=setInterval(()=>{setText(full.slice(0,++i));if(i>=full.length)clearInterval(t)},24);return ()=>clearInterval(t)
  },[])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Head><title>NkM20 — Developer Portfolio</title></Head>
      <header className="card mb-6">
        <div className="cli-prompt">&gt; $ fjfmarques@portfolio:~</div>
        <h1 className="typing mt-2">{text}</h1>
        <p className="text-gray-400 mt-2">Early-career developer building skills across AI, Mobile, Cloud & Systems</p>
        <div className="mt-3 space-x-3">
          <a className="text-blue-400" href="https://github.com/NkM20">GitHub</a>
          <a className="text-blue-400" href="https://www.linkedin.com/in/fjfmarques">LinkedIn</a>
        </div>
      </header>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map(r=> <ProjectCard key={r.html_url} repo={r} />)}
        </div>
      </section>

      <section className="card mb-6">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-gray-400 mt-2">I'm Fernando Marques, a passionate Junior Software Developer blending full-stack engineering, AI integration, and cloud development. My hands-on experience spans building mobile and web applications, designing robust backends, integrating cloud services (Firebase, Google Cloud), and delivering production-ready AI solutions.</p>
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
