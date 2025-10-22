import React from 'react'

export default function Logo({className='w-12 h-12'}:{className?:string}){
  return (
    <div className={`logo ${className}`} aria-hidden>
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#ff8fb1" />
            <stop offset="100%" stopColor="#8fb1ff" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="54" fill="url(#g1)" opacity="0.12" />
        <g transform="translate(12,18)">
          <rect x="0" y="0" width="96" height="84" rx="14" fill="#0b0b0f" stroke="rgba(255,255,255,0.04)" />
          <text x="48" y="52" fontFamily="Fira Code, monospace" fontSize="36" fill="#dbe7ef" textAnchor="middle">NkM</text>
          <g className="logo-star" transform="translate(78,10)">
              <circle cx="0" cy="0" r="3" fill="#ffdf6b" />
          </g>
          <g className="logo-eye" transform="translate(48,48)">
            <circle cx="0" cy="0" r="10" fill="rgba(0,0,0,0.85)" />
            <circle className="logo-iris" cx="0" cy="0" r="4" fill="#c62828" opacity="0" />
          </g>
        </g>
      </svg>
    </div>
  )
}
