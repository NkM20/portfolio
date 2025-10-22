import Head from 'next/head'
import type { GetStaticProps } from 'next'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'
import fetchPinnedOrRecent from '../lib/github'

type Repo = {name:string,description:string|null,html_url?:string,language?:string|null,stargazers_count?:number}
type ProjectsProps = { pinned: Repo[]; recent: Repo[]; all: Repo[] }

import { useMemo, useState } from 'react'

export default function Projects({pinned, recent, all}:ProjectsProps){
  const hasPinned = pinned && pinned.length > 0
  const [tab, setTab] = useState<'pinned'|'recent'|'all'>(hasPinned ? 'pinned' : 'recent')
  const [lang, setLang] = useState<string>('all')
  const base = tab === 'pinned' ? pinned : tab === 'recent' ? recent : all
  const languages = useMemo(()=>{
    const set = new Set<string>()
    ;[...pinned, ...recent, ...all].forEach(r=>{ if(r.language) set.add(r.language as string) })
    return ['all', ...Array.from(set.values()).sort()]
  },[pinned,recent,all])
  const list = useMemo(()=>{
    const arr = [...base]
    arr.sort((a,b)=> (b.stargazers_count||0) - (a.stargazers_count||0))
    if(lang==='all') return arr
    return arr.filter(r=> (r.language||'').toLowerCase() === lang.toLowerCase())
  },[base,lang])

  return (
    <div className="max-w-6xl mx-auto p-6">
  <Head><title>Projects — Fernando Marques</title></Head>
  <Nav />

      <header className="card page-header mb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="title">Projects</h1>
            <p className="subtitle">Browse pinned, recent, or all public repositories.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>setTab('pinned')} className={`skill-badge ${tab==='pinned'?'active':''}`} disabled={!hasPinned}>Pinned</button>
            <button onClick={()=>setTab('recent')} className={`skill-badge ${tab==='recent'?'active':''}`}>Recent</button>
            <button onClick={()=>setTab('all')} className={`skill-badge ${tab==='all'?'active':''}`}>All</button>
          </div>
        </div>
        <div className="divider"/>
        <div className="flex items-center gap-2">
          <label htmlFor="lang" className="muted text-sm">Language</label>
          <select id="lang" value={lang} onChange={e=>setLang(e.target.value)} className="skill-badge bg-transparent">
            {languages.map(l=> (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map(r => (
          <ProjectCard key={r.html_url || r.name} repo={r} />
        ))}
      </section>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  const username = process.env.GITHUB_USERNAME || 'NkM20'
  const token = process.env.GITHUB_TOKEN

  // Pinned via GraphQL (if token). Gracefully fallback to empty list.
  let pinned: Repo[] = []
  try { pinned = await fetchPinnedOrRecent(username, token, 8) } catch {}

  // Recent (REST)
  const headers: Record<string,string> = {'User-Agent':'next-portfolio'}
  if(token) headers.Authorization = `token ${token}`
  const recentRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=12&sort=updated`,{headers})
  const recentJson = await recentRes.json()
  const recent: Repo[] = Array.isArray(recentJson) ? recentJson.map((r:any)=>({
    name:r.name, description:r.description, html_url:r.html_url, language:r.language, stargazers_count:r.stargazers_count
  })) : []

  // All (REST) — take more entries, sort by pushed
  const allRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=30&sort=pushed`,{headers})
  const allJson = await allRes.json()
  let all: Repo[] = Array.isArray(allJson) ? allJson.map((r:any)=>({
    name:r.name, description:r.description, html_url:r.html_url, language:r.language, stargazers_count:r.stargazers_count
  })) : []

  // Deduplicate pinned; keep others as-is; UI handles duplicates between recent/all
  const seen = new Set<string>()
  pinned = pinned.filter(r=>{ if(!r.html_url) return false; if(seen.has(r.html_url)) return false; seen.add(r.html_url); return true })

  return { props: { pinned, recent, all }, revalidate: 1800 }
}
