import React, {useState} from 'react'

// Logo will prefer a static image placed at /public/ghoul-eye.png
// If the image is missing, it falls back to a simplified SVG eye.
export default function Logo({ className = 'w-14 h-14' }: { className?: string }) {
  const [played, setPlayed] = useState(false)
  const onLoad = ()=>{
    // ensure brush animation plays once
    if(!played){
      setPlayed(true)
      setTimeout(()=>{
        document.documentElement.classList.add('logo-loaded')
      },20)
    }
  }

  const onError = (e: React.SyntheticEvent<HTMLImageElement>)=>{
    // fallback to an embedded SVG data URI if the static PNG can't be loaded
    const svg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
      <defs><radialGradient id='g' cx='50%' cy='50%' r='50%'><stop offset='0%' stop-color='#1b0606'/><stop offset='70%' stop-color='#b21b1b'/><stop offset='100%' stop-color='#ff3b3b'/></radialGradient></defs>
      <rect width='120' height='120' rx='10' fill='#0b0b0f'/>
      <circle cx='60' cy='60' r='36' fill='url(%23g)' />
      <circle cx='60' cy='60' r='10' fill='#070707' />
    </svg>`)
    e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${svg}`
    onLoad()
  }

  return (
    <div className={`logo ghoul ${className} ${played? 'played':''}`} aria-hidden>
  <img src="/84252180ba216a9f2e7a9f02c5b951c5.jpg" alt="NkM red eye" className="logo-img" onLoad={onLoad} onError={onError} />

      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={`logo-svg fallback ${played? 'hidden':''}`} aria-hidden>
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
