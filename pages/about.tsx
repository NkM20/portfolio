import Head from 'next/head'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Timeline, { TimelineItem } from '../components/Timeline'

export default function About(){
  const education: TimelineItem[] = [
    { period: '2024 — Present', title: 'MSc in Informatics', org: 'Instituto Politécnico de Bragança', details: 'Focus on Cloud, AI and Systems' },
    { period: '2021 — 2025', title: 'Bacharelado em Engenharia Informática', org: 'Instituto Politécnico de Bragança', details: 'Software engineering, projects, and coursework' }
  ]

  const certifications: string[] = [
    'Advanced React — Meta',
    'React Native — Meta',
    'AI Solution Builder — INFONET'
  ]

  const experience: TimelineItem[] = [
    { period: 'Mar 2025 — May 2025', title: 'AI Research Intern', org: 'INFONET', details: 'Model development, experiments and deployment.' },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Head><title>About — Fernando Marques</title></Head>
      <Nav />

      <header className="card page-header mb-6">
        <div>
          <h1 className="title">About</h1>
          <p className="subtitle">Overview, education, and experience.</p>
        </div>
        <div className="divider"/>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="card lg:col-span-2">
          <h1 className="text-2xl font-semibold">About</h1>
          <div className="scroll text-sm leading-relaxed mt-3 text-gray-300">
            <p>I’m Fernando Marques, a passionate Junior Software Developer blending full-stack engineering, AI integration, and cloud development. My hands-on experience spans building mobile and web applications, designing robust backends, integrating cloud services (Firebase, Google Cloud), and delivering production-ready AI solutions like TaxBot — an EU tax advisory assistant.</p>
            <p className="mt-2">Beyond software delivery, I thrive on solving complex technical challenges, optimizing systems, and enhancing cybersecurity awareness, honed through Capture The Flag (CTF) competitions. I also enjoy sharing knowledge, having supported peers as a React Native tutor and collaborator.</p>
            <p className="mt-2">I’m eager to connect with teams and opportunities that value innovation, practical AI applications, and end-to-end product development.</p>
          </div>
        </section>

        <aside className="card lg:col-span-1">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="scroll mt-3">
            <Timeline items={education} />
          </div>
        </aside>

        <section className="card lg:col-span-2">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="scroll mt-3">
            <Timeline items={experience} />
          </div>
        </section>

        <aside className="card lg:col-span-1">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <div className="scroll mt-3 flex flex-wrap gap-2">
            {['Full‑stack','React Native','Next.js','Firebase','GCP','AI/LLMs','CTF'].map(tag => (
              <span key={tag} className="skill-badge text-sm">{tag}</span>
            ))}
          </div>
        </aside>

        <section className="card lg:col-span-3">
          <h2 className="text-xl font-semibold">Licenses & Certifications</h2>
          <div className="scroll mt-3">
            <ul className="list-disc ml-6 text-gray-300">
              {certifications.map((c) => <li key={c} className="mb-1">{c}</li>)}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
