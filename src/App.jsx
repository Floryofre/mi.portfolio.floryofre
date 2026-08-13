import { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolio.js'
export default function App(){
  const [activeSection, setActiveSection] = useState('inicio')
  const [theme, setTheme] = useState('light')
  const [typeText, setTypeText] = useState('')
  const [typeIndex, setTypeIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [projectTab, setProjectTab] = useState('data')
  const { rotatingTitles, nav, recomendaciones, proyectosData, proyectosWeb, experiencia, habilidades, formacion, about, contacto, personal } = portfolioData
  useEffect(()=>{
    const c = rotatingTitles[typeIndex]
    const t = setTimeout(()=>{
      if(!isDeleting){
        if(typeText.length < c.length) setTypeText(c.slice(0, typeText.length+1))
        else setTimeout(()=> setIsDeleting(true), 1600)
      } else {
        if(typeText.length>0) setTypeText(c.slice(0, typeText.length-1))
        else { setIsDeleting(false); setTypeIndex(p=>(p+1)%rotatingTitles.length) }
      }
    }, isDeleting ? 35 : 85)
    return ()=> clearTimeout(t)
  },[typeText, isDeleting, typeIndex, rotatingTitles])
  const isDark = theme==='dark'
  const scrollTo = (id)=>{ const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:"smooth"}) }
  return (
    <div style={{backgroundColor:"var(--bg)", color:"var(--text)", paddingTop:"64px"}} className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 h-[64px] flex items-center border-b z-50" style={{backgroundColor:isDark?"rgba(15,23,42,0.92)":"rgba(253,251,247,0.92)", borderColor:"var(--border)"}}>
        <div className="mx-auto max-w-[1320px] flex justify-between items-center w-full px-4">
          <img src="/icon.png" className="h-[36px]" />
          <nav className="flex gap-2">{nav.map(n=><button key={n.id} onClick={()=>scrollTo(n.id)} className="rounded-full px-3 py-1.5 text-[13px] bg-[#1e293b] text-white">{n.label}</button>)}</nav>
          <button onClick={()=>setTheme(isDark?'light':'dark')} className="h-8 w-8 rounded-full border">{isDark?'☀️':'🌙'}</button>
        </div>
      </header>
      <div className="h-[180px]"><img src="/banner.webp" className="h-full w-full object-cover" /></div>
      <div className="max-w-[1180px] mx-auto px-4 -mt-12">
        <div className="rounded-[24px] border p-6 flex gap-6" style={{backgroundColor:"var(--card)", borderColor:"var(--border)"}}>
          <img src="/profile.jpg" className="h-[110px] w-[110px] rounded-full" style={{border:"4px solid #D4AF37"}} />
          <div><h1 className="text-[26px] font-bold">{personal.fullName}</h1><p>{personal.headline}</p><div>{typeText}</div></div>
        </div>
      </div>
      <section id="sobre-mi" className="max-w-[1180px] mx-auto px-6 py-16"><h2 className="text-[28px] font-bold">Perfil Profesional</h2><p>{about.intro}</p><p>{about.camino}</p><p>{about.experienciaActual}</p></section>
      <section id="habilidades" className="max-w-[1180px] mx-auto px-6 py-16"><h2 className="text-[28px] font-bold">Habilidades</h2><div className="grid md:grid-cols-3 gap-4 mt-6">{habilidades.map(c=><div key={c.title} className="border rounded-[20px] p-6" style={{backgroundColor:"var(--card)"}}><h3 className="font-semibold">{c.title}</h3><div className="flex flex-wrap gap-2 mt-2">{c.pills.map(p=><span key={p} className="border rounded-full px-2.5 py-1 text-[11px]">{p}</span>)}</div></div>)}</div></section>
      <section id="experiencia" className="max-w-[1180px] mx-auto px-6 py-16"><h2 className="text-[28px] font-bold">Experiencia</h2><div className="mt-6 space-y-4">{experiencia.map(e=><div key={e.title} className="border rounded-[20px] p-6"><h3 className="font-semibold">{e.title}</h3><p className="text-[13px]">{e.org} • {e.meta}</p><ul className="list-disc pl-4 mt-2 text-[13px]">{e.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul></div>)}</div></section>
      <section id="proyectos" className="max-w-[1180px] mx-auto px-6 py-16"><h2 className="text-[28px] font-bold">Proyectos</h2><div className="flex gap-2 mt-4"><button onClick={()=>setProjectTab('data')} className={`px-4 py-1.5 rounded-full ${projectTab==='data'?'bg-[#1e293b] text-white':'border'}`}>Datos</button><button onClick={()=>setProjectTab('web')} className={`px-4 py-1.5 rounded-full ${projectTab==='web'?'bg-[#1e293b] text-white':'border'}`}>Web</button></div><div className="grid md:grid-cols-2 gap-6 mt-6">{(projectTab==='data'?proyectosData:proyectosWeb).map(p=><div key={p.id} className="border rounded-[20px] overflow-hidden"><div className={`h-[160px] bg-gradient-to-br ${p.coverGradient} p-4`}><span className={`rounded-full px-2.5 py-1 text-[10px] ${p.badgeClass}`}>{p.badge}</span></div><div className="p-5"><h3 className="font-semibold">{p.title}</h3><p className="text-[13px] mt-2">{p.desc}</p></div></div>)}</div></section>
      <section id="recomendaciones" className="max-w-[1180px] mx-auto px-6 py-16"><h2 className="text-[28px] font-bold">Recomendaciones</h2><div className="grid md:grid-cols-3 gap-4 mt-6">{recomendaciones.map(r=><div key={r.id} className="border rounded-[20px] p-6"><div className="flex gap-3 items-center"><div className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${r.color}`}>{r.initials}</div><div><p className="font-semibold text-[13px]">{r.name}</p><p className="text-[11px]">{r.role}</p></div></div><p className="mt-3 text-[13px]">{r.text}</p></div>)}</div></section>
      <section id="formacion" className="max-w-[1180px] mx-auto px-6 py-16"><h2 className="text-[28px] font-bold">Formación</h2><div className="grid md:grid-cols-2 gap-4 mt-6">{formacion.map(f=><div key={f.title} className="border rounded-[16px] p-5"><h3 className="font-semibold">{f.title}</h3><p className="text-[12px]">{f.org} • {f.year}</p><p className="text-[12px] mt-2">{f.desc}</p></div>)}</div></section>
      <section id="contacto" className="max-w-[1180px] mx-auto px-6 py-16"><h2 className="text-[28px] font-bold">Contacto</h2><p>{contacto.email} • {contacto.linkedin}</p></section>
    </div>
  )
}
