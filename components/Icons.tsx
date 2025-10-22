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
  SiPostgresql,
  SiOracle,
  SiSalesforce,
  SiSap
} from 'react-icons/si'

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
export const IconSalesforce = ({className='w-5 h-5'}:{className?:string}) => <SiSalesforce className={className} aria-hidden />
export const IconSAP = ({className='w-5 h-5'}:{className?:string}) => <SiSap className={className} aria-hidden />

// Keep custom/simple icons where brand assets are unclear or not available
export const IconDuckDB = ({className='w-5 h-5'}:{className?:string}) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="10" fill="#fff3"/>
    <path d="M8 14c0-2.2 2-4 4.5-4H15c.6 0 1-.4 1-1 0-1.7-1.3-3-3-3-2.8 0-5 2.2-5 5 0 2.8 2.2 5 5 5 1.8 0 3.4-.9 4.3-2.3-.7.2-1.4.3-2.3.3-3.1 0-5.7-1.2-7-3z" fill="#FFF176"/>
    <circle cx="14" cy="9.5" r="1" fill="#000"/>
  </svg>
)

export const IconAssembly = ({className='w-5 h-5'}:{className?:string}) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#333"/>
    <path d="M7 16l3-8h2l3 8h-2l-.6-2H9.5L9 16H7zm3-4h2l-1-3-1 3z" fill="#fff"/>
  </svg>
)

export default null
