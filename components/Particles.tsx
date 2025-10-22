import React, {useEffect, useRef} from 'react'

export default function Particles({className=''}: {className?:string}){
  const ref = useRef<HTMLCanvasElement|null>(null)

  useEffect(()=>{
    if(typeof window === 'undefined') return
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let width = canvas.width = canvas.clientWidth
    let height = canvas.height = canvas.clientHeight

    const DPR = window.devicePixelRatio || 1
    canvas.width = width * DPR
    canvas.height = height * DPR
    ctx.scale(DPR, DPR)

    const particles = Array.from({length:20}).map(()=>({
      x: Math.random()*width,
      y: Math.random()*height,
      r: 1 + Math.random()*3,
      vx: (Math.random()-0.5)*0.2,
      vy: -0.1 - Math.random()*0.3,
      alpha: 0.05 + Math.random()*0.12
    }))

    let raf = 0
    function frame(){
      ctx.clearRect(0,0,width,height)
      for(const p of particles){
        p.x += p.vx
        p.y += p.vy
        p.vx += (Math.random()-0.5)*0.02
        if(p.y < -10) { p.y = height + 10; p.x = Math.random()*width }
        if(p.x < -10) p.x = width + 10
        if(p.x > width + 10) p.x = -10
        ctx.beginPath()
        ctx.fillStyle = `rgba(200,30,30,${p.alpha})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const onResize = ()=>{
      width = canvas.clientWidth
      height = canvas.clientHeight
      const DPR = window.devicePixelRatio || 1
      canvas.width = width * DPR
      canvas.height = height * DPR
      ctx.scale(DPR, DPR)
    }
    window.addEventListener('resize', onResize)
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  },[])

  return (
    <canvas ref={ref} className={`hero-particles ${className}`} aria-hidden />
  )
}
