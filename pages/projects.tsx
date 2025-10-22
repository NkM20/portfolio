import Head from 'next/head'
import type { GetStaticProps } from 'next'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'
import fetchPinnedOrRecent from '../lib/github'

type Repo = {name:string,description:string|null,html_url:string,language:string|null,stargazers_count:number}

import { useMemo, useState } from 'react'

export default function Projects({repos}:{repos:Repo[]}){
  const [lang, setLang] = useState<string>('all')
  const languages = useMemo(()=>{
    const set = new Set<string>()
    repos.forEach(r=>{ if(r.language) set.add(r.language) })
    return ['all', ...Array.from(set.values()).sort()]
  },[repos])
  const list = useMemo(()=>{
    const arr = [...repos]
    arr.sort((a,b)=> (b.stargazers_count||0) - (a.stargazers_count||0))
    if(lang==='all') return arr
    return arr.filter(r=> (r.language||'').toLowerCase() === lang.toLowerCase())
  },[repos,lang])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Head><title>Projects — Fernando Marques</title></Head>
      <Nav />

      <header className="card mb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-semibold">Projects</h1>
            <p className="muted mt-1">A selection of pinned and recent repositories from GitHub.</p>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="lang" className="muted text-sm">Filter</label>
            <select id="lang" value={lang} onChange={e=>setLang(e.target.value)} className="skill-badge bg-transparent">
              {languages.map(l=> (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map(r => (
          <ProjectCard key={r.html_url} repo={r} />
        ))}
      </section>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  const username = process.env.GITHUB_USERNAME || 'NkM20'
  const token = process.env.GITHUB_TOKEN
  const repos = await fetchPinnedOrRecent(username, token, 12)
  return { props: { repos }, revalidate: 3600 }
}
