import React, {useState} from 'react'
import {IconGitHub, IconJS, IconTS, IconReact, IconNode, IconTailwind, IconNext, IconPython} from './Icons'

type Repo = {name:string,description?:string|null,html_url?:string,language?:string|null,stargazers_count?:number}

function sampleCode(repoName:string){
  return `// ${repoName} - quick preview
function main(){
  console.log('Hello from ${repoName}')
}

main()`
}

export default function ProjectCard({repo}:{repo:Repo}){
  const code = sampleCode(repo.name)
  const lines = code.split('\n')
  const [open,setOpen] = useState(false)

  const TechIcon = () => {
    if(!repo.language) return null
    const lang = (repo.language||'').toLowerCase()
    if(lang.includes('javascript')) return <IconJS className="w-4 h-4 inline-block mr-1" />
    if(lang.includes('typescript')) return <IconTS className="w-4 h-4 inline-block mr-1" />
    if(lang.includes('react')) return <IconReact className="w-4 h-4 inline-block mr-1" />
    if(lang.includes('next')) return <IconNext className="w-4 h-4 inline-block mr-1" />
    if(lang.includes('node')) return <IconNode className="w-4 h-4 inline-block mr-1" />
    if(lang.includes('python')) return <IconPython className="w-4 h-4 inline-block mr-1" />
    if(lang.includes('tailwind')) return <IconTailwind className="w-4 h-4 inline-block mr-1" />
    return <IconGitHub className="w-4 h-4 inline-block mr-1" />
  }

  const langClass = (()=>{
    const l = (repo.language||'').toLowerCase()
    if(l.includes('typescript')) return 'lang-ts'
    if(l.includes('javascript')) return 'lang-js'
    if(l.includes('python')) return 'lang-py'
    if(l.includes('node')) return 'lang-node'
    return 'lang-default'
  })()

  return (
    <div className="project-card">
      <div className="titlebar">
        <div className="traffic"><span className="dot red"/><span className="dot yellow"/><span className="dot green"/></div>
      </div>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TechIcon /> {repo.name}
          </h3>
          {repo.language ? (
            <div className="muted text-sm mt-1 flex items-center">
              <span className={`lang-dot ${langClass}`}/>
              <span>{repo.language}</span>
            </div>
          ) : null}
          <div className="muted text-sm">{repo.description}</div>
        </div>
        <div className="meta text-sm text-right ml-4">
          <div className="mb-2">⭐ {repo.stargazers_count||0}</div>
          <div className="flex gap-2 justify-end">
            <button aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="skill-badge">{open? 'Hide' : 'Preview'}</button>
            <a className="skill-badge" href={repo.html_url} target="_blank" rel="noreferrer">Open</a>
          </div>
        </div>
      </div>

      {open ? (
        <div className="file-explorer">
          <div className="tabs">
            <div className="tab active">src/index.js</div>
            <div className="tab">README.md</div>
          </div>
          <div className="code-window">
            <div className="gutter">
              {lines.map((_,i)=>(<div key={i} className="line-num">{i+1}</div>))}
            </div>
            <pre className="code" aria-hidden="false">
              {lines.map((l,i)=> {
                const trimmed = l.trim()
                if(trimmed.startsWith('//')){
                  return <div key={i} className="code-line token-comment">{l}</div>
                }
                if(trimmed.includes('function')){
                  return <div key={i} className="code-line token-keyword">{l}</div>
                }
                if(trimmed.includes("console.log")){
                  return <div key={i} className="code-line token-fn">{l}</div>
                }
                if(trimmed.includes("'")){
                  return <div key={i} className="code-line token-string">{l}</div>
                }
                return <div key={i} className="code-line">{l}</div>
              })}
            </pre>
          </div>
        </div>
      ) : null}
    </div>
  )
}
