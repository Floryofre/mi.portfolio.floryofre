
export const portfolioData = {
  personal: {
    name: "Maria Florencia Yofre",
    fullName: "María Florencia Yofre",
    headline: "Data & Operations Analyst | Business Intelligence, Automatizacion y Mejora de Procesos",
    subHeadline: "Data • Security • Process",
    location: "Córdoba, AR • GMT-3",
    locationShort: "Córdoba, Argentina - Remoto • GMT-3",
    availability: "Disponible para remoto",
    availabilityDetail: "Disponible para remoto - Data Operations / BI / Automatización",
    email: "floryofre.da@gmail.com",
    emailSubject: "Consulta Data Ops - Portfolio MFY",
    rotatingTitles: ["Data Operations Analyst","Business Operations Analyst","BI Solutions & Power BI","SQL • Python • Automation"],
    profileImage: "/images/image_0.jpg",
    bannerImage: "/images/image_1.webp",
    logoImage: "/images/image_2.png",
    iconImage: "/images/image_3.jpg",
    bio: {
      title: "Perfil Profesional",
      intro: "Profesional de datos con experiencia en analisis, operaciones y mejora continua de procesos, combinando Business Intelligence y automatizacion para optimizar la toma de decisiones.",
      currentRole: "Data Operations Analyst / Student Success Analyst en Henry",
      camino: "Empece mi formacion en Data Analytics en el bootcamp de Henry, donde desarrolle bases solidas en SQL, Python y Power BI a traves de proyectos academicos centrados en limpieza de datos, modelado y creacion de dashboards. Ese recorrido incluyo proyectos individuales y en equipo, entre ellos el proyecto final integrador.",
      experienciaActual: "Hoy trabajo en Henry como Data Operations Analyst / Student Success Analyst, donde analizo datos operativos y coordino cohortes y equipos, con foco en la automatizacion de procesos con Airtable y la mejora continua de flujos. Antes, me desempeñe como Tutor Program Coordinator & Data Analytics Teaching Assistant. En paralelo, colaboro como voluntaria en DataRockers y participe como mentora adjunta de Salesforce en Bridge2Tech Academy."
    },
    tags: ["SQL","Power BI","Airtable","Automatizacion","Python","n8n"]
  },
  nav: [
    {id:"inicio", label:"Inicio"},
    {id:"sobre-mi", label:"Sobre mí"},
    {id:"habilidades", label:"Habilidades"},
    {id:"experiencia", label:"Experiencia"},
    {id:"proyectos", label:"Proyectos"},
    {id:"recomendaciones", label:"Recomendaciones"},
    {id:"formacion", label:"Formación"},
    {id:"contacto", label:"Contacto"}
  ],
  habilidades: [
    {title:"Análisis y Visualización", pills:["Power BI (DAX, Modelado)","KPIs & OKRs","Data Storytelling","Business Intelligence","Dashboards estratégicos","Reportes ejecutivos"]},
    {title:"Programación y Datos", pills:["SQL","Python (Pandas, Matplotlib, Seaborn)","VS Code","Modelado de datos","Limpieza y transformación","EDA"]},
    {title:"Automatización y Operaciones", pills:["n8n","Airtable","HubSpot","Salesforce","ClickUp","Trello","Asana"]},
    {title:"Herramientas y Plataformas", pills:["Excel avanzado","Google Sheets","Slack","Teams","Discord","GitHub","Google Forms","Typeform","AWS Cloud Practitioner (en proceso)"]},
    {title:"Gestión", pills:["Scrum","Metodologías Ágiles","Documentación de procesos","Seguimiento de KPIs","Mejora de procesos","Coordinación multidisciplinaria"]},
    {title:"Idiomas", pills:["Español Nativo","Inglés Professional Working","Portugués Limited / Básico"], special:true}
  ],
  experiencia: [
    {title:"Data Operations Analyst / Student Success Analyst", org:"Henry Bootcamp", meta:"Remoto • Abr 2025 - Actualidad", current:true, bullets:["Automatización de procesos internos con Airtable, reduciendo carga manual y mejorando trazabilidad.","Creación y administración de cohortes, soporte a estudiantes vía Slack y gestión de canales.","Optimización de flujos operativos y documentación para escalar onboarding."]},
    {title:"Tutor Program Coordinator & TA", org:"Henry Bootcamp", meta:"Mayo 2024 - Jun 2025", bullets:["Presentación del programa de tutores, capacitación y coordinación de equipo.","Reuniones semanales de seguimiento, detección de bloqueos y mejora de experiencia.","Coordinación de grupos, pair programming y seguimiento de indicadores operativos."]},
    {title:"Mentora Adjunta Salesforce (Admin & Developer)", org:"Bridge2Tech Academy", meta:"Ene 2025 - Jul 2025", bullets:["Mentorías técnicas en Salesforce, CRM y automatización de procesos comerciales.","Sesiones de formación y oradora en Seminario Salesforce Essentials."]},
    {title:"Data Analyst - SmartPro Analytics", org:"Contrato Formación", meta:"Feb - Jul 2024", bullets:["Mejora del posicionamiento de agencia de representación deportiva mediante análisis de datos.","Dashboard interactivo en Power BI y análisis de rendimiento NBA con Python / SQL."]},
    {title:"Data Analyst Voluntariado - DataRockers", org:"Área Infancia", meta:"Abr 2023 - Jul 2025", bullets:["Análisis del impacto del bullying en Argentina: limpieza con Python / DAX y visualización en Power BI.","Dashboards y reportes para toma de decisiones basadas en evidencia con enfoque social."]}
  ],
  proyectosData: [
    {id:"smartpro", title:"SmartPro Analytics - NBA Performance", href:"https://github.com/Floryofre/SmartPro_Analytics", productName:"GitHub - Floryofre/SmartPro_Analytics", desc:"Evaluación y optimización del rendimiento NBA para agencia de representación deportiva. Stack completo: SQL, Python, Power BI.", tags:["Python","Power BI","SQL","DAX","Business Case"], bullets:["Dashboard 6 pestañas (Equipos, Drafts, Jugadores, Lesiones, Contratación) + Índice de Rendimiento Individual","5 jugadores <25 años y <10M alto potencial: Garland, LaMelo Ball, Haliburton, Johnson, Bain"], coverGradient:"from-[#1a1a1a] via-[#2a2211] to-[#D4AF37]/30", badge:"Full Stack Data", badgeClass:"bg-[#1a2a3a] text-white", category:"Data Analytics"},
    {id:"adventure", title:"Adventure Works Cycles - Power BI", href:"https://github.com/Floryofre/Power_BI_Henry", productName:"GitHub - Floryofre/Power_BI_Henry", desc:"Análisis para fabricante líder de bicicletas con presencia global. Limpieza Power Query, modelado, 6 páginas de análisis comercial.", tags:["Power BI","Power Query","DAX","Modelado"], bullets:["Ingresos por país, categoría Road Bikes más vendida","Utilidad bruta/neta, COGS, demografía y proyección futura"], coverGradient:"from-[#0f172a] via-[#1e293b] to-[#C0C0C0]/40", badge:"Power BI", badgeClass:"bg-[#8a6a2e] text-white", category:"BI"},
    {id:"biogenesys", title:"Expansión Estratégica Biogenesys en Latinoamérica (COVID-19)", href:"https://github.com/Floryofre/Trabajando_con-_Python", productName:"GitHub - Floryofre/Trabajando_con-_Python", desc:"Consolidar expansión de laboratorios Biogénesys en 6 países mediante análisis COVID-19 y tasas de vacunación.", tags:["Python","Pandas","Matplotlib","Seaborn","EDA"], bullets:["Brasil, México y Argentina óptimos para expansión","Recomendaciones infraestructura Colombia y Perú + dashboard"], coverGradient:"from-[#fdfbf7] via-[#F5E6C8] to-[#D4AF37]/30", badge:"Python", badgeClass:"bg-[#1a2a3a] text-white", category:"Python/EDA"},
    {id:"fastfood", title:"Fast Food Delivery - Análisis con SQL Server", href:"https://github.com/Floryofre/Analisis_con_SQL", productName:"GitHub - Floryofre/Analisis_con_SQL", desc:"Creación BD para empresa ficticia F & F – Fast Food Delivery para mejorar escalabilidad y toma de decisiones.", tags:["SQL Server","SQL","Normalización","Multitabla"], bullets:["Identificación inconsistencias y optimización consultas avanzadas","Análisis eficiencia personal por sucursal y normalización"], coverGradient:"from-[#1e293b] via-[#334155] to-[#C0C0C0]/30", badge:"SQL", badgeClass:"bg-[#334155] text-white", category:"Data Analytics"},
    {id:"excel", title:"Global Super Store - Análisis con Excel / Google Sheets", href:"https://github.com/Floryofre/PrimerProyectoExcel", productName:"GitHub - Floryofre/PrimerProyectoExcel", desc:"Primer proyecto Data Analytics Henry. Limpieza, transformación, tablas dinámicas y dashboards en Excel.", tags:["Excel","Google Sheets","Tablas Dinámicas","Gráficos"], bullets:["Tendencias ventas mensuales, productos más vendidos","Dashboard interactivo con formato condicional y storytelling"], coverGradient:"from-[#fafaf9] via-[#E8E8E8] to-[#C0C0C0]/40", badge:"Excel", badgeClass:"bg-[#166534] text-white", category:"Data Analytics"},
    {id:"ai", title:"Operations Intelligence AI", href:"", desc:"Evolución de SmartPro a Arcadia Tech Academy. Sistema de inteligencia operativa con automatización e IA para operaciones educativas.", tags:["Python","n8n","Airtable","HubSpot","IA Automation","Power BI"], bullets:["En desarrollo - Dashboard operativo inteligente con alertas","Automatización flujos, integración datos y capa IA"], coverGradient:"from-[#0f0a1a] via-[#1a1a1a] to-[#D4AF37]/20", badge:"IA En Progreso - 65%", badgeClass:"bg-[#D4AF37] text-[#1a1a1a]", progress:65, category:"Automation/IA", extraNote:"Repo privado • Arcadia Tech Academy • Próximamente público"}
  ],
  proyectosWeb: [
    {id:"mfy-landing", title:"MFY Landing - Data • Security • Process", hrefWeb:"https://floryofre.github.io/", hrefCode:"https://floryofre.github.io/", desc:"Landing personal premium con identidad dorada/plateada, responsive, modo claro/oscuro, animaciones suaves y foco en conversión.", tags:["HTML","CSS","JS","GitHub Pages","Responsive"], bullets:["Diseño premium Gold & Silver","Banner teal + foto + badges técnicos","Modo claro/oscuro y navegación fluida"], coverGradient:"from-[#0f172a] via-[#1e3a5f] to-[#D4AF37]/40", badge:"Live", badgeClass:"bg-[#10b981] text-white", status:"Live"},
    {id:"portfolio-v1", title:"Portfolio Web Personal v1", desc:"Primera versión portfolio, enfoque limpio para mostrar proyectos Data. Base para evolución a React + Tailwind.", tags:["HTML","CSS","Tailwind","Portfolio"], bullets:["Grid de proyectos Data","Sección sobre mí + habilidades","Links a GitHub y LinkedIn integrados"], coverGradient:"from-[#1e293b] via-[#2a3f5f] to-[#D4AF37]/30", badge:"v1 • Evolucionando", badgeClass:"bg-[#334155] text-white", status:"Live"},
    {id:"local-biz", title:"Web para emprendimiento local", desc:"Web básica para negocio local con formulario conectado a Airtable/HubSpot y automatización n8n para seguimiento.", tags:["HTML","CSS","JS","Form + n8n","Airtable"], bullets:["Landing + formulario + WhatsApp","Automatización leads → Airtable/HubSpot","Template reutilizable para clientes"], coverGradient:"from-[#0f172a] via-[#1a2a4a] to-[#C0C0C0]/30", badge:"Template • Disponible", badgeClass:"bg-[#8a6a2e] text-white", status:"Template"},
    {id:"arcadia-web", title:"Arcadia Tech Academy Web", desc:"Plataforma educativa con dashboard de operaciones, parte del proyecto operations-intelligence-ai. En construcción.", tags:["React","Next.js","IA","Dashboard","Operations"], bullets:["Dashboard operativo con KPIs y alertas","Integración con sistema de automatización","Stack moderno + IA operativa"], coverGradient:"from-[#0a0f1f] via-[#1a1a2a] to-[#D4AF37]/20", badge:"En progreso • 40%", badgeClass:"bg-[#D4AF37] text-[#1a1a1a]", status:"En progreso"}
  ],
  recomendaciones: [
    {id:1, name:"Alejo Peralta Falconi", initials:"AP", degree:"1er", role:"Data Engineer | AWS | SQL | Apache Airflow | Big Data | ETL/ELT", date:"24 de enero de 2025", relation:"Ma. Florencia supervisaba a Alejo", color:"bg-[#1a2a3a]", text:"Flor fue una coordinadora increíble mientras trabajamos juntos. Siempre estaba ahí para escuchar, orientar y darnos una mano cuando hacía falta. Tiene una forma de liderar súper cercana, mezclando muchísima experiencia con una empatía que se nota en todo lo que hace."},
    {id:2, name:"Facundo Ariel Sardo", initials:"FS", degree:"1er", role:"BI Analyst at Data Mind", date:"24 de enero de 2025", relation:"Ma. Florencia supervisaba a Facundo Ariel", color:"bg-[#7a5a2a]", text:"Tuve la suerte de trabajar con Flor como Head Assistant, y no puedo dejar de destacar el gran trabajo que hizo en todo momento. Desde presentar el programa de tutores hasta capacitar y coordinar al equipo, siempre estuvo completamente comprometida."},
    {id:3, name:"Joel Stanich", initials:"JS", degree:"1er", role:"Business Intelligence & Data Analyst | Power BI | SQL | BigQuery | Looker", date:"9 de septiembre de 2024", relation:"Joel supervisaba directamente a Ma. Florencia", color:"bg-[#334155]", text:"Tuve la oportunidad de acompañar como Mentor el proyecto Final de María Florencia en Soy Henry, y puedo decir con certeza que es una excelente profesional con una combinación interesante de habilidades técnicas y cualidades personales."},
    {id:4, name:"Valentin Martinez Biasi", initials:"VM", degree:"1er", role:"Learning Designer at MateTCC, Co-founder Proyecto Ser", date:"8 de agosto de 2024", relation:"Valentin supervisaba directamente a Ma. Florencia", color:"bg-[#1e293b]", text:"Florencia Yofre es una persona súper dedicada y comprometida con lo que hace. En su rol de Teaching Assistant tuvo la proactividad para realizar un número de iniciativas. Tiene unas habilidades de comunicación muy altas."},
    {id:5, name:"Pablo Rodriguez de la Torre", initials:"PR", degree:"1er", role:"Managing Partner Korn Ferry | Executive Search C Level", date:"8 de agosto de 2024", relation:"Cargo superior pero no supervisaba directamente", color:"bg-[#0f172a]", text:"Conozco a Maria Florencia hace muchos años y destacó su honestidad, capacidad de trabajo, empatía y su actitud pro-activa para conseguir resultados. Muy buen talento."},
    {id:6, name:"Angela Escobar", initials:"AE", degree:"1er", role:"Analytics Engineer | Data Automation | BI & AI-driven Insights", date:"10 de julio de 2024", relation:"Trabajó con Ma. Florencia en el mismo equipo", color:"bg-[#8a6a2e]", text:"Flor es una de las personas más proactivas y colaboradoras con quien he tenido el placer de trabajar. Contar con ella en el equipo es tener la seguridad de que todo va a estar realizado y listo cuando tiene que estarlo."}
  ],
  formacion: [
    {title:"Data Analytics Bootcamp", org:"Henry", year:"2023-2024", desc:"SQL, Python, Power BI, EDA, modelado, storytelling."},
    {title:"Salesforce Administrator & Developer", org:"Trailhead / Bridge2Tech", year:"2024-2025", desc:"Apex Specialist Superbadge, automatización CRM."},
    {title:"AWS Cloud Practitioner", org:"AWS (en proceso)", year:"2025", desc:"Fundamentos cloud, servicios core, seguridad."},
    {title:"n8n & Automatización", org:"Formación autodidacta", year:"2024-2025", desc:"Workflows, integraciones Airtable, HubSpot, Slack."}
  ],
  contacto: {
    email:"floryofre.da@gmail.com",
    linkedin:"https://www.linkedin.com/in/maflorenciayofre",
    linkedinLabel:"linkedin.com/in/maflorenciayofre",
    github:"https://github.com/Floryofre",
    githubLabel:"github.com/Floryofre",
    website:"https://floryofre.github.io/",
    ubicacion:"Córdoba, Argentina - Remoto • GMT-3"
  },
  links: {
    github:"https://github.com/Floryofre",
    linkedin:"https://www.linkedin.com/in/maflorenciayofre",
    website:"https://floryofre.github.io/"
  }
};
