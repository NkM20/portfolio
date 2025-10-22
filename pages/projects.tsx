import Head from 'next/head'
import type { GetStaticProps } from 'next'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'
import fetchPinnedOrRecent from '../lib/github'

type Repo = {name:string,description:string|null,html_url:string,language:string|null,stargazers_count:number}

export default function Projects({repos}:{repos:Repo[]}){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Head><title>Projects — Fernando Marques</title></Head>
      <Nav />

      <header className="card mb-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="muted mt-1">A selection of pinned and recent repositories from GitHub.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map(r => (
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
