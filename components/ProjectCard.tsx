import React from 'react'

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
  return (
    <div className="project-card card">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-blue-300 font-mono">{repo.name}</h3>
          <div className="text-gray-400 text-sm">{repo.description}</div>
        </div>
        <div className="meta text-sm text-right">
          <div>{repo.language}</div>
          <div>⭐ {repo.stargazers_count||0}</div>
        </div>
      </div>

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
            {lines.map((l,i)=> <div key={i} className="code-line">{l}</div>)}
          </pre>
        </div>
      </div>

      <div className="mt-3"><a className="text-accent" href={repo.html_url} target="_blank" rel="noreferrer">Repository</a></div>
    </div>
  )
}
