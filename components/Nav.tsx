import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'

type Item = { href: string; label: string }
const items: Item[] = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/tools', label: 'Tools' },
  { href: '/projects', label: 'Projects' }
]

export default function Nav(){
  const router = useRouter()
  const path = router.pathname === '/' ? '/home' : router.pathname

  return (
    <nav className="top-nav flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <Logo className="w-12 h-12" />
        <div className="font-semibold">Fernando Marques</div>
      </div>
      <div className="flex gap-2">
        {items.map(it => (
          <Link key={it.href} href={it.href} className={`skill-badge ${path === it.href ? 'active' : ''}`}>
            {it.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
