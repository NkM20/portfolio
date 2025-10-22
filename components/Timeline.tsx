import React from 'react'

export type TimelineItem = {
  period: string
  title: string
  org?: string
  details?: string
  link?: string
  badge?: React.ReactNode
}

export default function Timeline({items}:{items:TimelineItem[]}){
  return (
    <div className="timeline">
      {items.map((it,i)=> (
        <div key={i} className="timeline-item flex gap-4">
          <div className="w-12 text-right text-sm muted">{it.period}</div>
          <div className="flex-1">
            <div className="meta"><strong>{it.title}</strong>{it.org ? ` — ${it.org}` : ''}</div>
            {it.details ? <div className="text-gray-400 mt-1">{it.details}</div> : null}
          </div>
        </div>
      ))}
    </div>
  )
}
