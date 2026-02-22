"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Code2, Smartphone, Cpu, Bot, Database,
  Menu, X, ArrowRight, Navigation, Globe, Plane,
  Hexagon, Terminal, Layers, Megaphone, ArrowUpRight,
  Star, Quote, ChevronRight, Send, Mail, Linkedin,
  Github, Twitter, MessageCircle
} from 'lucide-react';

// --- DATOS ---

const services = [
  { id: "01", title: "Desarrollo de Software (Web & Mobil)", tag: "Arquitectura", accent: "bg-[#06ACA1]", icon: <Code2 className="w-5 h-5" />, desc: "Estructuras digitales robustas y fluidas con enfoque en la experiencia del usuario." },
  // { id: "02", title: "Desarrollo Móvil", tag: "Experiencia", accent: "bg-sky-500", icon: <Smartphone className="w-5 h-5" />, desc: "Aplicaciones con UX de primera clase." },
  { id: "02", title: "Cultura DevOps", tag: "Infraestructura", accent: "bg-teal-500", icon: <Cpu className="w-5 h-5" />, desc: "Logística técnica para despliegues seguros y eficientes." },
  { id: "03", title: "IA & Automatización", tag: "Innovación", accent: "bg-cyan-500", icon: <Bot className="w-5 h-5" />, desc: "Navegación inteligente con agentes autónomos y automatización de procesos." },
  // { id: "05", title: "Web3 & Blockchain", tag: "Seguridad", accent: "bg-blue-800", icon: <Database className="w-5 h-5" />, desc: "Seguridad descentralizada de nueva generación." },
  // { id: "06", title: "Estrategia Digital", tag: "Crecimiento", accent: "bg-indigo-500", icon: <Megaphone className="w-5 h-5" />, desc: "Visión técnica alineada a objetivos de negocio." }
];

const skillsCategories: Record<string, string[]> = {
  "Stack Preferido": ["Next.js / React", "Tailwind CSS", "NestJS", "Prisma ORM", "Redis", "MongoDB & PostgresSQL"],
  "Lenguajes & Core": ["TypeScript / Node.js", "NextJS & NestJS", "React-Native & Flutter", "Python", "PHP (Symfony)", "Bash & Linux", "Solidity", "SQL (Mysql, Postgres) & MongoDB"],
  "Arquitectura & Cloud": ["AWS", "System Design & Api Design", "Docker & Kubernetes", "Grafana & Prometheus", "Event-Driven Architecture", "Serverless"],
  "Ops": ["CI/CD Pipelines", "Jenkins", "Agile/Scrum", "Code Review Strategy", "Linux"]
};

const projects = [
  {
    name: "Nutringest",
    category: "Health Tech",
    description: "Plataforma integral centralizada para nutricionistas; Facilitando la gestión de pacientes y planes nutricionales.",
    metrics: ["CTO & Co-Founder", "Health Tech"],
    tags: ["NextJS", "NestJS", "Docker", "React-Native"],
    url: "https://nutringest.quanticarch.com",
    image: "/projects/nutringest.png"
  },
  {
    name: "Cronobyke",
    category: "Sport Lab",
    description: "Plataforma integral centralizada para ciclistas; Facilitando el análisis de datos y el rendimiento deportivo; Procesamiento Iot.",
    metrics: ["CTO & Co-Founder", "Sport Lab"],
    tags: ["NextJS", "NestJS", "Docker", "React-Native", "IoT"],
    url: "https://cronobyke.quanticarch.com",
    image: "/projects/cronobyke.png"
  }
];

const testimonials = [
  {
    id: 1,
    quote: "Jose no solo entregó código, diseñó una verdadera obra de ingeniería digital. La infraestructura soporta miles de usuarios concurrentes sin inmutarse.",
    author: "Elena Ramírez",
    role: "CEO & Fundadora",
    company: "Nutringest",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "La transición hacia una cultura DevOps y la automatización de nuestros despliegues fue quirúrgica bajo su liderazgo. Redujimos el 'time-to-market' en un 60%.",
    author: "David Chen",
    role: "CTO",
    company: "Cronobyke",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Buscábamos a un arquitecto que entendiera las complejidades de Web3 y la seguridad descentralizada. Su capacidad técnica marcó la diferencia completamente.",
    author: "Sofía Valenzuela",
    role: "Directora de Producto",
    company: "Aether Protocol",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

// --- COMPONENTE HERO ---

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1F2833] via-[#0B0C10] to-[#0B0C10]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06ACA1]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#45A29E]/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2833_1px,transparent_1px),linear-gradient(to_bottom,#1F2833_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2833] border border-[#45A29E]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#06ACA1] animate-pulse"></span>
            <span className="text-[#45A29E] text-xs font-mono tracking-widest uppercase">Jose Sojo — Tech Lead</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight mb-6 tracking-tight">
            Arquitectura de <br />
            software de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06ACA1] to-[#45A29E]">alto nivel.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg font-light leading-relaxed">
            Construyo infraestructuras web y sistemas de alto rendimiento. Soluciones precisas, escalables y diseñadas para soportar el crecimiento de tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#06ACA1] text-[#0B0C10] rounded font-bold hover:bg-[#212529] hover:text-white transition-colors group">
              Hablemos de Código
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#proyectos" className="flex items-center justify-center gap-2 px-8 py-4 border border-[#1F2833] hover:text-white rounded hover:bg-[#1F2833] transition-colors">
              <Terminal className="w-5 h-5 text-[#45A29E]" />
              Ver Portafolio
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#06ACA1] rounded-full blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <div className="absolute w-[400px] h-[400px] border border-[#1F2833] rounded-full animate-[spin_20s_linear_infinite] group-hover:border-[#45A29E]/50 transition-colors duration-700">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#06ACA1] rounded-full shadow-[0_0_15px_#06ACA1] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute w-[300px] h-[300px] border border-[#45A29E]/30 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse] group-hover:border-[#06ACA1]/60 transition-colors duration-700">
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#45A29E] rounded-full shadow-[0_0_10px_#45A29E] -translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="absolute w-[200px] h-[200px] border border-[#1F2833] rounded-full animate-[spin_10s_linear_infinite] group-hover:border-[#45A29E]/40 transition-colors duration-500"></div>

            <div className="relative w-32 h-32 bg-[#1F2833] border border-[#06ACA1] rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(102,252,241,0.3)] group-hover:shadow-[0_0_60px_rgba(102,252,241,0.6)] group-hover:scale-110 transition-all duration-500 z-10 cursor-pointer">
              <Hexagon className="w-16 h-16 text-[#06ACA1] -rotate-45 group-hover:animate-pulse" />
            </div>

            <div className="absolute top-10 right-20 w-12 h-12 bg-[#0B0C10]/80 backdrop-blur-sm border border-[#45A29E] rounded flex items-center justify-center animate-bounce z-10 group-hover:-translate-y-2 transition-transform duration-500">
              <Code2 className="w-5 h-5 text-[#45A29E]" />
            </div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#0B0C10]/80 backdrop-blur-sm border border-[#06ACA1] rounded-full flex items-center justify-center animate-pulse z-10 group-hover:scale-110 transition-transform duration-500">
              <Cpu className="w-6 h-6 text-[#06ACA1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Stack Preferido");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#06ACA1]/30">

      {/* Header Info */}
      <div className="bg-slate-50 border-b border-slate-200 py-2 hidden sm:block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6"><span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Global</span><span className="flex items-center gap-1"><Plane className="w-3 h-3" /> Remote</span></div>
          <p className="italic font-serif">Bit por bit, átomo por átomo</p>
        </div>
      </div>

      {/* Nav */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Hexagon className={`w-8 h-8 ${scrolled ? 'text-[#06ACA1]' : 'text-[#06ACA1]'}`} />
            <span className={`font-bold text-xl tracking-wider text-slate-900`}>
              JOSE<span className="text-[#06ACA1]">SOJO</span>
            </span>
          </div>

          <div className={`hidden md:flex gap-8 items-center text-[11px] font-black uppercase tracking-widest ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>
            {['Especialidades', 'Stack', 'Proyectos', 'Testimonios'].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-[#06ACA1] transition-colors">{i}</a>
            ))}
            <a href="#contacto" className="bg-[#06ACA1] text-[#0B0C10] px-6 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-all shadow-lg">Contactar</a>
          </div>
          <button className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col z-50">
            {['Especialidades', 'Stack', 'Proyectos', 'Testimonios'].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="py-3 text-lg border-b border-slate-100 text-slate-600 font-medium">
                {i}
              </a>
            ))}
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="mt-4 text-center py-3 bg-[#06ACA1] text-[#0B0C10] font-bold rounded-xl">
              Contactar
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <Hero />

      {/* Services */}
      <section id="especialidades" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#06ACA1]"></span> Mi Enfoque
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-slate-900">
                Mis <br /><span className="italic font-serif text-slate-500">Especialidades</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm md:text-base max-w-md font-light leading-relaxed">
              Diseño infraestructuras digitales que combinan estética de alta gama con rendimiento cuántico. No solo escribo código, resuelvo problemas de negocio complejos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.id} className="relative p-8 lg:p-10 bg-white rounded-[2rem] border border-slate-100 hover:border-[#06ACA1]/30 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(6,172,161,0.15)] transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#06ACA1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute -bottom-6 -right-2 text-[8rem] font-black text-slate-50 group-hover:text-slate-50/80 transition-colors duration-500 z-0 pointer-events-none select-none leading-none">
                  {s.id}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 ${s.accent} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                      {s.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-[#06ACA1] transition-colors bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 text-slate-800 group-hover:text-[#06ACA1] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
                    {s.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Técnico */}
      <section id="stack" className="py-32 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#06ACA1]"></span> Tecnologías Core
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-slate-900">
              Expertise <span className="italic font-serif text-[#06ACA1]">Técnico</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs Navigation */}
            <div className="lg:w-1/3 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
              {Object.keys(skillsCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-8 py-5 rounded-2xl text-left font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal flex items-center justify-between border ${activeTab === category
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10'
                    : 'bg-white text-slate-500 border-slate-100 hover:border-[#06ACA1]/30 hover:text-slate-800'
                    }`}
                >
                  {category}
                  <ChevronRight size={18} className={`hidden lg:block transition-transform ${activeTab === category ? 'translate-x-1 text-[#06ACA1]' : 'opacity-0'}`} />
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3 bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100">
              <div className="animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <Layers className="text-[#06ACA1]" size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{activeTab}</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {skillsCategories[activeTab].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:border-[#06ACA1] hover:shadow-md transition-all group">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#06ACA1] group-hover:shadow-[0_0_10px_#06ACA1] transition-all"></div>
                      <span className="font-medium text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#06ACA1]"></span> Mi Trabajo <span className="w-4 h-[1px] bg-[#06ACA1]"></span>
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
              Proyectos <span className="italic font-serif text-[#06ACA1]">Destacados</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {projects.map((p) => (
              <a key={p.name} href={p.url} className="group relative bg-slate-900 rounded-[0.5rem] overflow-hidden block border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-[450px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-700 z-10"></div>
                  <img src={p.image} alt={`Proyecto ${p.name}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-1000" />
                </div>

                <div className="absolute top-8 left-8 z-20 flex flex-wrap gap-2 pr-8">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent z-20">
                  <div className="flex justify-between items-end gap-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[#06ACA1] text-[10px] font-black uppercase tracking-widest mb-3">{p.category}</p>
                      <h3 className="text-3xl font-black text-white mb-3">{p.name}</h3>
                      <p className="text-slate-300 text-sm font-light max-w-sm mb-6 md:opacity-0 md:h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 hidden md:block">
                        {p.description}
                      </p>
                      <div className="flex gap-8 border-t border-white/10 pt-5 mt-5">
                        {p.metrics.map(metric => {
                          const [value, ...labelParts] = metric.split(' ');
                          const label = labelParts.join(' ');
                          return (
                            <div key={metric}>
                              <span className="block text-white font-black text-xl mb-1">{value}</span>
                              <span className="block text-slate-400 text-[9px] font-bold uppercase tracking-widest">{label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#06ACA1] group-hover:border-[#06ACA1] transition-colors duration-500 shrink-0 shadow-xl">
                      <ArrowUpRight className="w-6 h-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
        <div className="absolute -left-[20%] -top-[20%] w-[50%] h-[50%] bg-[#06ACA1]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#06ACA1]"></span> Referencias
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-white">
                Lo que dicen <br /><span className="italic font-serif text-slate-400">mis clientes</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#06ACA1]/50 transition-all duration-500 backdrop-blur-sm">
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-[#06ACA1]/20 transition-colors duration-500">
                  <Quote className="w-16 h-16 rotate-180" />
                </div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#06ACA1] text-[#06ACA1]" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-10 relative z-10">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-[#06ACA1] transition-colors duration-500">
                    <Image src={t.image} alt={t.author} className="w-full h-full object-cover" width={50} height={50} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.author}</h4>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">
                      {t.role} <span className="text-[#06ACA1]">@</span> {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto & Redes */}
      <section id="contacto" className="py-32 bg-[#0B0C10] relative overflow-hidden border-t border-white/10">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#06ACA1]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2833_1px,transparent_1px),linear-gradient(to_bottom,#1F2833_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#06ACA1]"></span> Conexión
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Hablemos de tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06ACA1] to-[#45A29E]">próximo proyecto.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md font-light leading-relaxed">
              Ya sea para discutir la arquitectura de tu plataforma o solicitar consultoría técnica, mi bandeja está siempre abierta.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:tu.email@personal.com" className="flex items-center gap-4 text-slate-300 hover:text-[#06ACA1] transition-colors w-fit group">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#06ACA1] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm tracking-wide">josesojo2828@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/jose-sojo-14899b380/" target='_blank' className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#06ACA1] hover:border-[#06ACA1] transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/josesojo2828" target='_blank' className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#06ACA1] hover:border-[#06ACA1] transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#06ACA1] hover:border-[#06ACA1] transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-[#1F2833]/50 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nombre</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06ACA1] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Empresa</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06ACA1] transition-colors" placeholder="Acme Inc." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06ACA1] transition-colors" placeholder="john@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mensaje</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06ACA1] transition-colors resize-none" placeholder="Cuéntame sobre la arquitectura de tu proyecto..."></textarea>
              </div>
              <button className="w-full py-4 bg-[#06ACA1] text-[#0B0C10] font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                Enviar Transmisión <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0B0C10] border-t border-white/5 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        © {new Date().getFullYear()} Jose Sojo. Diseñado y desarrollado con precisión.
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/584128606734"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 hover:-translate-y-2 transition-all duration-300 z-[100] group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>
      </a>
    </div>
  );
}