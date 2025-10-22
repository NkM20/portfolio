import React from 'react'
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiKotlin,
  SiFigma,
  SiPostgresql,
  SiOracle,
  SiSalesforce,
  SiSap
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Brand-accurate wrappers (size inherits from className)
export const IconGitHub = ({className='w-5 h-5'}: {className?:string}) => <SiGithub className={className} aria-hidden />
export const IconLinkedIn = ({className='w-5 h-5'}:{className?:string}) => <SiLinkedin className={className} aria-hidden />
export const IconGmail = ({className='w-5 h-5'}:{className?:string}) => <SiGmail className={className} aria-hidden />
export const IconJS = ({className='w-5 h-5'}:{className?:string}) => <SiJavascript className={className} aria-hidden />
export const IconTS = ({className='w-5 h-5'}:{className?:string}) => <SiTypescript className={className} aria-hidden />
export const IconReact = ({className='w-5 h-5'}:{className?:string}) => <SiReact className={className} aria-hidden />
export const IconNext = ({className='w-5 h-5'}:{className?:string}) => <SiNextdotjs className={className} aria-hidden />
export const IconNode = ({className='w-5 h-5'}:{className?:string}) => <SiNodedotjs className={className} aria-hidden />
export const IconPython = ({className='w-5 h-5'}:{className?:string}) => <SiPython className={className} aria-hidden />
export const IconDocker = ({className='w-5 h-5'}:{className?:string}) => <SiDocker className={className} aria-hidden />
export const IconGit = ({className='w-5 h-5'}:{className?:string}) => <SiGit className={className} aria-hidden />
export const IconTailwind = ({className='w-5 h-5'}:{className?:string}) => <SiTailwindcss className={className} aria-hidden />
export const IconFirebase = ({className='w-5 h-5'}:{className?:string}) => <SiFirebase className={className} aria-hidden />
export const IconMongo = ({className='w-5 h-5'}:{className?:string}) => <SiMongodb className={className} aria-hidden />
export const IconMySQL = ({className='w-5 h-5'}:{className?:string}) => <SiMysql className={className} aria-hidden />
export const IconPostgres = ({className='w-5 h-5'}:{className?:string}) => <SiPostgresql className={className} aria-hidden />
export const IconOracle = ({className='w-5 h-5'}:{className?:string}) => <SiOracle className={className} aria-hidden />
export const IconFlutter = ({className='w-5 h-5'}:{className?:string}) => <SiFlutter className={className} aria-hidden />
export const IconKotlin = ({className='w-5 h-5'}:{className?:string}) => <SiKotlin className={className} aria-hidden />
export const IconFigma = ({className='w-5 h-5'}:{className?:string}) => <SiFigma className={className} aria-hidden />
export const IconVSCode = ({className='w-5 h-5'}:{className?:string}) => <VscVscode className={className} aria-hidden />
export const IconSalesforce = ({className='w-5 h-5'}:{className?:string}) => <SiSalesforce className={className} aria-hidden />
export const IconSAP = ({className='w-5 h-5'}:{className?:string}) => <SiSap className={className} aria-hidden />

// Keep custom/simple icons where brand assets are unclear or not available
export const IconDuckDB = ({className='w-5 h-5'}:{className?:string}) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="11" fill="#0ea5a3"/>
    <g transform="translate(6,7)">
      <path d="M3 6c0-2 2-3.5 4.2-3.5 1.1 0 2 .9 2 2 0 .8-.6 1.5-1.4 1.6-.9.1-1.6.7-1.9 1.5-.4 1.1-1.4 2.4-2.9 2.4C1 10 0 8.7 0 7c0-2.5 2.2-4.5 5.2-4.5" fill="#fde047"/>
      <circle cx="7.5" cy="3.7" r=".6" fill="#111827"/>
      <path d="M9.4 6.2c.4-.3 1.1-.4 1.6-.2.6.2 1 .6 1 .9 0 .4-.5.7-1.3.7-.7 0-1.6-.4-2-.8.3-.2.5-.4.7-.6z" fill="#f59e0b"/>
    </g>
  </svg>
)

export const IconAssembly = ({className='w-5 h-5'}:{className?:string}) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#333"/>
    <path d="M7 16l3-8h2l3 8h-2l-.6-2H9.5L9 16H7zm3-4h2l-1-3-1 3z" fill="#fff"/>
  </svg>
)

export default null
