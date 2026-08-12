
import { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolio.js'
import { 
  Moon, Sun, Mail, ExternalLink, Github, Linkedin, 
  MapPin, Menu, X, BarChart3, Code2, Workflow, 
  Wrench, Users, Languages, Briefcase, GraduationCap,
  ArrowUpRight, Check
} from 'lucide-react'

export default function App(){
  const { personal, nav, habilidades, experiencia, proyectosData, proyectosWeb, recomendaciones, formacion, contacto } = portfolioData
  const [activeSection, setActiveSection] = useState('inicio')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [rotIndex, setRotIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [theme, setTheme] = useState('light')
  const [projectTab, setProjectTab] = useState('data') // data | web
  const [projectFilter, setProjectFilter] = useState('all')
  const [clickedNav, setClickedNav] = useState('')

  // theme
  useEffect(()=>{
    try{
      const t = localStorage.getItem('theme')
      if(t) setTheme(t)
      else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
    }catch{}
  },[])
  useEffect(()=>{
    try{
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }catch{}
  },[theme])

  // typewriter
  useEffect(()=>{
    const full = personal.rotatingTitles[rotIndex]
    const speed = deleting ? 35 : 85
    const pauseEnd = 1600
    const pauseStart = 500
    let timeout
    if(!deleting && typed.length < full.length){
      timeout = setTimeout(()=> setTyped(full.slice(0, typed.length+1)), speed)
    } else if(!deleting && typed.length === full.length){
      timeout = setTimeout(()=> setDeleting(true), pauseEnd)
    } else if(deleting && typed.length > 0){
      timeout = setTimeout(()=> setTyped(full.slice(0, typed.length-1)), 35)
    } else if(deleting && typed.length === 0){
      setDeleting(false)
      setRotIndex((rotIndex+1)%personal.rotatingTitles.length)
    }
    return ()=> clearTimeout(timeout)
  },[typed, deleting, rotIndex, personal.rotatingTitles])

  // scroll spy
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) setActiveSection(e.target.id)
      })
    },{rootMargin:'-45% 0px -45% 0px', threshold:0})
    nav.forEach(n=>{
      const el = document.getElementById(n.id)
      if(el) obs.observe(el)
    })
    return ()=> obs.disconnect()
  },[nav])

  const scrollTo = (id)=>{
    setMobileOpen(false)
    setActiveSection(id)
    setClickedNav(id)
    setTimeout(()=> setClickedNav(''), 600)
    try{ history.replaceState(null,'',`#${id}`)}catch{}
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
    else window.scrollTo({top:0, behavior:'smooth'})
  }

  const isDark = theme==='dark'

  return (
    <div className="min-h-screen antialiased selection:bg-[#D4AF37]/30 overflow-x-hidden" style={{backgroundColor:'var(--bg)', color:'var(--text)', paddingTop:'64px'}}>
      {/* HEADER - exact replica */}
      <header className="fixed left-0 right-0 top-0 z-[9999] flex h-[64px] w-full items-center border-b" style={{backgroundColor: isDark ? 'rgba(15,23,42,0.92)' : 'rgba(253,251,247,0.92)', borderColor:'var(--border)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)'}}>
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-3 px-3 sm:px-4 lg:px-6">
          <a href="#inicio" onClick={(e)=>{e.preventDefault(); scrollTo('inicio'); window.scrollTo({top:0, behavior:'smooth'})}} className="flex shrink-0 items-center" aria-label="Inicio">
            <img src={personal.logoImage} alt="MFY Icon" className="h-[36px] w-auto object-contain" style={{height:'36px', filter: isDark ? 'none' : 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'}} />
          </a>
          <nav className="flex flex-1 items-center justify-start gap-[12px] overflow-x-auto whitespace-nowrap px-2 scrollbar-hide lg:justify-center">
            {nav.map(item=>(
              <button key={item.id} onClick={()=>scrollTo(item.id)} data-nav-id={item.id} className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-all duration-200 ${activeSection===item.id ? 'bg-[#1e293b] text-white dark:bg-white dark:text-[#0f172a]' : 'hover:bg-black/5 dark:hover:bg-white/10'} ${clickedNav===item.id ? 'scale-95 ring-2 ring-[#D4AF37]/50' : ''}`} style={{color: activeSection===item.id ? undefined : 'var(--text-muted)'}}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <button onClick={()=>setTheme(isDark?'light':'dark')} aria-label="Toggle theme" className="flex h-8 w-8 items-center justify-center rounded-full border transition" style={{backgroundColor:'var(--card)', borderColor:'var(--border)', color:'var(--text)'}}>
              {isDark ? <Sun className="h-4 w-4 text-[#D4AF37]" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="hidden items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium md:flex" style={{backgroundColor: isDark ? 'rgba(212,175,55,0.12)' : 'rgba(212,175,55,0.10)', borderColor:'rgba(212,175,55,0.25)', color: isDark ? '#D4AF37' : '#8a6a2e'}}>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
              <span>{personal.availability}</span>
            </div>
            <a href="#contacto" onClick={(e)=>{e.preventDefault(); scrollTo('contacto')}} className="inline-flex items-center gap-1.5 rounded-full bg-[#1e293b] px-4 py-2 text-[13px] font-medium text-white transition hover:bg-black dark:bg-white dark:text-[#0f172a]">
              <Mail className="h-3.5 w-3.5" /> Contactar
            </a>
            <button onClick={()=>setMobileOpen(!mobileOpen)} className="flex h-8 w-8 items-center justify-center rounded-full border lg:hidden" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}} aria-label="Menu">
              <div className="space-y-1">
                <div className={`h-px w-4 bg-current transition ${mobileOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
                <div className={`h-px w-4 bg-current transition ${mobileOpen ? 'opacity-0' : ''}`} />
                <div className={`h-px w-4 bg-current transition ${mobileOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[64px] z-[9998] border-b p-4 shadow-xl lg:hidden" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
          <div className="grid grid-cols-2 gap-2">
            {nav.map(item=>(
              <button key={item.id} onClick={()=>scrollTo(item.id)} className="rounded-xl border px-4 py-3 text-left text-[13px] font-medium" style={{backgroundColor: activeSection===item.id ? '#1e293b' : 'var(--card-soft)', color: activeSection===item.id ? 'white' : 'var(--text-muted)', borderColor:'var(--border)'}}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* HERO - INICIO */}
      <section id="inicio" className="relative" style={{backgroundColor:'var(--bg)'}}>
        <div className="relative h-[140px] w-full overflow-hidden md:h-[180px]">
          <img src={personal.bannerImage} alt="Teal network banner" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/40 to-transparent" />
        </div>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 -mt-12 flex flex-col gap-6 rounded-[24px] border p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,.25)] sm:-mt-16 sm:flex-row sm:items-center sm:p-7 md:gap-8" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
            <div className="shrink-0 self-center sm:self-auto">
              <img src={personal.profileImage} alt={personal.fullName} className="h-[110px] w-[110px] rounded-full object-cover md:h-[140px] md:w-[140px]" style={{border:'4px solid #D4AF37', boxShadow:'0 8px 24px -8px rgba(0,0,0,.3)'}} />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h1 className="text-[26px] font-bold leading-[1.1] tracking-tight sm:text-[32px] md:text-[36px]" style={{color:'var(--text)'}}>{personal.fullName}</h1>
              <p className="mt-2 text-[13px] font-medium leading-6 sm:text-[14px] md:text-[15px]" style={{color:'var(--text-muted)'}}>{personal.headline}</p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span className="mono text-[11px] font-semibold tracking-[0.18em] text-[#D4AF37]">{personal.subHeadline}</span>
                <span className="hidden h-3 w-px bg-[#D4AF37]/30 sm:block" />
                <span className="flex items-center gap-1.5 text-[11px]" style={{color:'var(--text-muted)'}}><span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" /> {personal.location}</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                {personal.tags.map(t=>(
                  <span key={t} className="rounded-full border px-2.5 py-1 text-[11px] font-medium" style={{backgroundColor:'var(--card-soft)', borderColor:'var(--border)', color:'var(--text-muted)'}}>{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
                <div className="flex items-center gap-2 text-[12px] font-medium" style={{color:'var(--text)'}}>
                  <span className="text-[#D4AF37]">{typed}</span><span className="h-4 w-px bg-[#D4AF37] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="border-t" style={{backgroundColor:'var(--bg)', borderColor:'var(--border)'}}>
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex items-center gap-2">
            <div className="h-px w-10 bg-[#D4AF37]" />
            <span className="mono text-[11px] font-semibold tracking-[0.18em]" style={{color:'var(--text-muted)'}}>SOBRE MÍ</span>
          </div>
          <h2 className="mt-3 max-w-[760px] text-[28px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[34px]" style={{color:'var(--text)'}}>{personal.bio.title}</h2>
          <p className="mt-4 max-w-[800px] text-[15px] leading-7" style={{color:'var(--text-muted)'}}>
            {personal.bio.intro} <strong style={{color:'var(--text)'}}>{personal.bio.currentRole}</strong>
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[20px] border p-6" style={{backgroundColor:'var(--card-soft)', borderColor:'var(--border)'}}>
              <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wide" style={{color:'var(--text)'}}>
                <GraduationCap className="h-4 w-4 text-[#D4AF37]" /> Mi camino
              </div>
              <p className="mt-3 text-[14px] leading-6" style={{color:'var(--text-muted)'}}>{personal.bio.camino}</p>
            </div>
            <div className="rounded-[20px] border p-6" style={{backgroundColor:'var(--card-soft)', borderColor:'var(--border)'}}>
              <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wide" style={{color:'var(--text)'}}>
                <Briefcase className="h-4 w-4 text-[#D4AF37]" /> Experiencia actual
              </div>
              <p className="mt-3 text-[14px] leading-6" style={{color:'var(--text-muted)'}}>{personal.bio.experienciaActual}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="border-t" style={{backgroundColor:'var(--bg)', borderColor:'var(--border)'}}>
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium" style={{backgroundColor:'var(--card)', borderColor:'var(--border)', color:'var(--text-muted)'}}>
              <Wrench className="h-3.5 w-3.5" /> STACK TÉCNICO & OPERATIVO
            </div>
            <h2 className="mt-4 text-[28px] font-bold tracking-tight sm:text-[36px]" style={{color:'var(--text)'}}>Habilidades Técnicas</h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6" style={{color:'var(--text-muted)'}}>Combino análisis, visualización y automatización para construir sistemas que escalan.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {habilidades.map(group=>{
              const icons = {
                "Análisis y Visualización": BarChart3,
                "Programación y Datos": Code2,
                "Automatización y Operaciones": Workflow,
                "Herramientas y Plataformas": Wrench,
                "Gestión": Users,
                "Idiomas": Languages
              }
              const Icon = icons[group.title] || Wrench
              return (
                <div key={group.title} className="card-hover rounded-[20px] border p-6" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e293b] text-white dark:bg-white dark:text-black">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-[14px] font-semibold" style={{color:'var(--text)'}}>{group.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.pills.map(p=>(
                      <span key={p} className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${group.special ? 'bg-[#D4AF37]/15 text-[#8a6a2e] dark:text-[#D4AF37] border-[#D4AF37]/20' : ''}`} style={group.special ? undefined : {backgroundColor:'var(--card-soft)', borderColor:'var(--border)', color:'var(--text-muted)'}}>{p}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="border-t" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" style={{color:'var(--text)'}} />
                <span className="mono text-[11px] font-semibold tracking-[0.18em]" style={{color:'var(--text-muted)'}}>TRAYECTORIA</span>
              </div>
              <h2 className="mt-3 text-[28px] font-bold tracking-tight sm:text-[36px]" style={{color:'var(--text)'}}>Experiencia Profesional</h2>
            </div>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-3 top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent lg:block" />
            <div className="space-y-6">
              {experiencia.map((exp, idx)=>(
                <div key={idx} className="relative rounded-[20px] border p-6 pl-8 lg:pl-10" style={{backgroundColor:'var(--card-soft)', borderColor:'var(--border)'}}>
                  <div className="absolute left-0 top-8 hidden h-3 w-3 rounded-full bg-[#D4AF37] lg:block" style={{left:'-5px'}} />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[16px] font-semibold" style={{color:'var(--text)'}}>{exp.title}</h3>
                      <div className="mt-1 flex items-center gap-2 text-[13px]" style={{color:'var(--text-muted)'}}>
                        <span className="font-medium text-[#D4AF37]">{exp.org}</span>
                        <span>•</span>
                        <span>{exp.meta}</span>
                      </div>
                    </div>
                    {exp.current && <span className="rounded-full bg-[#10b981]/20 px-2.5 py-1 text-[10px] font-bold text-[#10b981]">Actual</span>}
                  </div>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[13px] leading-6" style={{color:'var(--text-muted)'}}>
                    {exp.bullets.map((b,i)=><li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="border-t" style={{backgroundColor:'var(--bg)', borderColor:'var(--border)'}}>
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[28px] font-bold tracking-tight sm:text-[36px]" style={{color:'var(--text)'}}>Proyectos Destacados</h2>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <button onClick={()=>{setProjectTab('data'); setProjectFilter('all')}} className={`rounded-full px-5 py-2 text-[13px] font-medium transition ${projectTab==='data' ? 'bg-[#1a2a3a] text-white' : 'border bg-white'}`} style={projectTab!=='data' ? {borderColor:'var(--border)', color:'var(--text-muted)', backgroundColor:'var(--card)'} : {}}>Datos, BI, Automatización + IA</button>
            <button onClick={()=>{setProjectTab('web'); setProjectFilter('all')}} className={`rounded-full px-5 py-2 text-[13px] font-medium transition ${projectTab==='web' ? 'bg-[#1a2a3a] text-white' : 'border'}`} style={projectTab!=='web' ? {borderColor:'var(--border)', color:'var(--text-muted)', backgroundColor:'var(--card)'} : {}}>MFY Web Studio</button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {(projectTab==='data' ? proyectosData : proyectosWeb).map(proj=>(
              <div key={proj.id} className="card-hover group overflow-hidden rounded-[20px] border" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
                <div className={`h-[160px] w-full bg-gradient-to-br ${proj.coverGradient} relative p-5`}>
                  <div className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold ${proj.badgeClass}`}>{proj.badge}</div>
                  <div className="flex h-full items-end">
                    <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white backdrop-blur">{proj.category || proj.status || 'Proyecto'}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[16px] font-semibold leading-tight" style={{color:'var(--text)'}}>{proj.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-6" style={{color:'var(--text-muted)'}}>{proj.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.tags.slice(0,4).map(t=><span key={t} className="rounded-full bg-black/5 px-2 py-1 text-[10px] dark:bg-white/10" style={{color:'var(--text-muted)'}}>{t}</span>)}
                  </div>
                  <ul className="mt-4 space-y-1">
                    {proj.bullets.slice(0,2).map((b,i)=><li key={i} className="flex gap-2 text-[12px] leading-5" style={{color:'var(--text-muted)'}}><Check className="mt-0.5 h-3 w-3 shrink-0 text-[#D4AF37]" /> {b}</li>)}
                  </ul>
                  {proj.href && (
                    <a href={proj.href} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#D4AF37] hover:underline">
                      Ver en GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {proj.extraNote && <div className="mt-3 text-[11px] italic" style={{color:'var(--text-muted)'}}>{proj.extraNote}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMENDACIONES */}
      <section id="recomendaciones" className="border-t" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
          <h2 className="text-[28px] font-bold tracking-tight sm:text-[36px]" style={{color:'var(--text)'}}>Recomendaciones</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recomendaciones.map(rec=>(
              <div key={rec.id} className="rounded-[20px] border p-6" style={{backgroundColor:'var(--card-soft)', borderColor:'var(--border)'}}>
                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white ${rec.color}`}>{rec.initials}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <h4 className="truncate text-[13px] font-semibold" style={{color:'var(--text)'}}>{rec.name}</h4>
                      <span className="text-[10px] text-[#0A66C2]">• {rec.degree}</span>
                    </div>
                    <p className="mt-0.5 line-clamp-1 text-[11px]" style={{color:'var(--text-muted)'}}>{rec.role}</p>
                    <p className="mt-1 text-[10px]" style={{color:'var(--text-muted)'}}>{rec.date} • {rec.relation}</p>
                  </div>
                </div>
                <p className="mt-4 line-clamp-5 text-[13px] leading-6" style={{color:'var(--text-muted)'}}>"{rec.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACION */}
      <section id="formacion" className="border-t" style={{backgroundColor:'var(--bg)', borderColor:'var(--border)'}}>
        <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
          <h2 className="text-[28px] font-bold tracking-tight sm:text-[36px]" style={{color:'var(--text)'}}>Formación</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {formacion.map(item=>(
              <div key={item.title} className="rounded-[16px] border p-5" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[14px] font-semibold" style={{color:'var(--text)'}}>{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-[#D4AF37]/15 px-2.5 py-1 text-[10px] font-bold" style={{color: isDark ? '#D4AF37' : '#8a6a2e'}}>{item.year}</span>
                </div>
                <div className="mt-1 text-[12px] font-medium" style={{color:'var(--text-muted)'}}>{item.org}</div>
                <div className="mt-2 text-[13px] leading-6" style={{color:'var(--text-muted)'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[900px]">
            <div className="flex items-center gap-2">
              <div className="h-px w-10 bg-[#D4AF37]" />
              <span className="mono text-[11px] font-semibold tracking-[0.18em]" style={{color:'var(--text-muted)'}}>CONTACTO</span>
            </div>
            <h2 className="mt-3 text-[34px] font-bold tracking-tight" style={{color:'var(--text)'}}>Hablemos</h2>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium" style={{backgroundColor:'rgba(212,175,55,0.10)', borderColor:'rgba(212,175,55,0.25)', color: isDark ? '#D4AF37' : '#8a6a2e'}}>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" /> {personal.availabilityDetail}
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
              <div className="rounded-[20px] border p-6" style={{backgroundColor:'var(--card-soft)', borderColor:'var(--border)'}}>
                <div className="space-y-4">
                  <a href={`mailto:${contacto.email}`} className="group flex items-center gap-3 rounded-2xl border px-4 py-4 transition hover:shadow-sm" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e293b] text-white dark:bg-white dark:text-black"><Mail className="h-4 w-4" /></div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-wide" style={{color:'var(--text-muted)'}}>EMAIL</div>
                      <div className="truncate text-[14px] font-semibold" style={{color:'var(--text)'}}>{contacto.email}</div>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 opacity-30 transition group-hover:opacity-100" />
                  </a>

                  <a href={contacto.linkedin} target="_blank" rel="noopener" className="group flex items-center gap-3 rounded-2xl border px-4 py-4 transition hover:shadow-sm" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a66c2] text-white"><Linkedin className="h-4 w-4" /></div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-wide" style={{color:'var(--text-muted)'}}>LINKEDIN</div>
                      <div className="truncate text-[14px] font-semibold" style={{color:'var(--text)'}}>{contacto.linkedinLabel}</div>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 opacity-30 transition group-hover:opacity-100" />
                  </a>

                  <a href={contacto.github} target="_blank" rel="noopener" className="group flex items-center gap-3 rounded-2xl border px-4 py-4 transition hover:shadow-sm" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white dark:bg-white dark:text-black"><Github className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[11px] font-semibold tracking-wide" style={{color:'var(--text-muted)'}}>GITHUB</div>
                      <div className="text-[14px] font-semibold" style={{color:'var(--text)'}}>{contacto.githubLabel}</div>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 opacity-30 transition group-hover:opacity-100" />
                  </a>

                  <div className="flex items-center gap-3 rounded-2xl border px-4 py-4" style={{backgroundColor:'var(--card)', borderColor:'var(--border)'}}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#8a6a2e] dark:text-[#D4AF37]"><MapPin className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[11px] font-semibold tracking-wide" style={{color:'var(--text-muted)'}}>UBICACIÓN</div>
                      <div className="text-[14px] font-semibold" style={{color:'var(--text)'}}>{contacto.ubicacion}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border p-7 text-white" style={{backgroundColor:'#1a1a1a', borderColor:'var(--border)'}}>
                <div className="mono text-[11px] tracking-[0.2em] text-white/40">CONTACTO DIRECTO • SIN FORMULARIOS EXTERNOS</div>
                <h3 className="mt-4 text-[22px] font-semibold leading-tight">¿Reportes manuales o dashboards que no escalan?</h3>
                <p className="mt-3 text-[13px] leading-6 text-white/60">Escribime directo con contexto. Sin bloqueos, sin formularios externos. Respondo con propuesta clara y tiempos reales.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={`mailto:${contacto.email}?subject=${encodeURIComponent(personal.emailSubject)}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#1a1a1a] transition hover:bg-[#E8E8E8]">
                    <Mail className="h-4 w-4" /> {contacto.email}
                  </a>
                  <a href={contacto.linkedin} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10">
                    <Linkedin className="h-4 w-4" /> Mensaje por LinkedIn
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[11px] text-white/40">
                  <div className="h-px flex-1 bg-white/10" />
                  <span>Respuesta en 24h • GMT-3</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-[11px]" style={{borderColor:'var(--border)', color:'var(--text-muted)', backgroundColor:'var(--bg)'}}>
        © {new Date().getFullYear()} {personal.fullName} — Data • Security • Process. Hecho con React + Tailwind.
      </footer>
    </div>
  )
}
