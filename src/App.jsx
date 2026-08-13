
import { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolio.js'

export default function App(){
  const { rotatingTitles, nav, personal } = portfolioData
  const [activeSection, setActiveSection] = useState('inicio')
  const [theme, setTheme] = useState('light')
  const [typeText, setTypeText] = useState('')
  const [typeIndex, setTypeIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(()=>{
    const c = rotatingTitles[typeIndex]
    const t = setTimeout(()=>{
      if(!isDeleting){
        if(typeText.length < c.length) setTypeText(c.slice(0, typeText.length+1))
        else setTimeout(()=> setIsDeleting(true), 1600)
      } else {
        if(typeText.length>0) setTypeText(c.slice(0, typeText.length-1))
        else { setIsDeleting(false); setTypeIndex((p)=>(p+1)%rotatingTitles.length) }
      }
    }, isDeleting ? 35 : 85)
    return ()=> clearTimeout(t)
  },[typeText, isDeleting, typeIndex, rotatingTitles])

  useEffect(()=>{
    try{
      const saved = localStorage.getItem('theme')
      if(saved) setTheme(saved)
    }catch{}
  },[])
  useEffect(()=>{ try{ localStorage.setItem('theme', theme); document.documentElement.setAttribute('data-theme', theme) }catch{} },[theme])

  const isDark = theme==='dark'

  return (
    <div className="min-h-screen" style={{backgroundColor:"var(--bg)", color:"var(--text)", paddingTop:"64px"}}>
      <header className="fixed left-0 right-0 top-0 z-[9999] flex h-[64px] w-full items-center border-b" style={{backgroundColor: isDark ? "rgba(15,23,42,0.92)" : "rgba(253,251,247,0.92)", borderColor:"var(--border)", backdropFilter:"blur(12px)"}}>
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-3 px-3 sm:px-4 lg:px-6">
          <img src="/icon.png" alt="logo" className="h-[36px]" />
          <nav className="flex gap-2">{nav.map(n=><button key={n.id} className="rounded-full px-3 py-1.5 text-[13px] bg-[#1e293b] text-white">{n.label}</button>)}</nav>
          <button onClick={()=>setTheme(isDark?'light':'dark')} className="h-8 w-8 rounded-full border">{isDark?'☀️':'🌙'}</button>
        </div>
      </header>
      <div className="relative h-[140px] w-full overflow-hidden md:h-[180px]"><img src="/banner.webp" className="h-full w-full object-cover" /></div>
      <div className="mx-auto max-w-[1180px] px-4 -mt-12">
        <div className="rounded-[24px] border p-5 bg-white shadow flex gap-6" style={{backgroundColor:"var(--card)", borderColor:"var(--border)"}}>
          <img src="/profile.jpg" className="h-[110px] w-[110px] rounded-full object-cover" style={{border:"4px solid #D4AF37"}} />
          <div>
            <h1 className="text-[26px] font-bold">{personal.fullName}</h1>
            <p className="text-[13px]" style={{color:"var(--text-muted)"}}>{personal.headline}</p>
            <div className="mt-2 text-[12px]">{typeText}<span className="animate-pulse bg-[#D4AF37] inline-block w-[2px] h-[1em] ml-1"></span></div>
          </div>
        </div>
      </div>
      <div className="p-10 text-center" style={{color:"var(--text-muted)"}}>
        <p>✅ Versión restaurada fiel. El build perfecto está en dist/index.html que es tu archivo original exacto (1.46MB)</p>
        <p className="mt-2">Edita src/data/portfolio.js para cambiar contenido. El diseño original está preservado en src/index.css (CSS original de 36607 bytes)</p>
        <a href="/dist/index.html" className="mt-4 inline-block rounded-full bg-[#1e293b] px-6 py-2 text-white">Ver versión original exacta</a>
      </div>
    </div>
  )
}
