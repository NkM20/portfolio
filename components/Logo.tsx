import React, {useState} from 'react'

// Logo will prefer a static image placed at /public/ghoul-eye.png
// If the image is missing, it falls back to a simplified SVG eye.
export default function Logo({ className = 'w-14 h-14' }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)
  const [src, setSrc] = useState('/ghoul-eye.png')
  return (
    <div className={`logo ghoul ${className}`} aria-hidden>
      <img src={src} alt="NkM emblem" className="logo-img" style={{display: loaded? 'block':'none' }} onLoad={()=>setLoaded(true)} onError={()=>{ if(src !== '/components/ghoul-eye.png'){ setSrc('/components/ghoul-eye.png') } }} />

      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={`logo-svg fallback ${loaded? 'hidden':''}`} aria-hidden>
        <defs>
          <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1b0606"/>
            <stop offset="40%" stopColor="#5a0f0f"/>
            <stop offset="70%" stopColor="#b21b1b"/>
            <stop offset="100%" stopColor="#ff3b3b"/>
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="rgba(0,0,0,0.85)" />
        <g className="iris-wrap" transform="translate(60,60)">
          <circle className="iris" r="34" fill="url(#irisGrad)" />
          <circle className="pupil" r="8" fill="#070707" />
        </g>
      </svg>
    </div>
  )
}
