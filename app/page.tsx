"use client";

import React, { useState, useEffect } from 'react';
import {
  Code2,
  Globe,
  Terminal,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Server,
  Layers,
  Users,
  Briefcase,
  ChevronRight,
  Building2,
  Cpu,
  TrendingUp,
  LucideIcon
} from 'lucide-react';

// --- INTERFACES & TYPES (Strong Typing) ---

interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  email: string;
  location: string;
  yearsExp: string;
}

interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface Experience {
  role: string;
  company: string;
  focus: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
}

interface Philosophy {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  category: string;
  desc: string;
  stats: string[];
  tags: string[];
}

interface PortfolioData {
  personal: PersonalInfo;
  metrics: Metric[];
  experience: Experience[];
  philosophy: Philosophy[];
  skillsCategories: Record<string, string[]>;
  projects: Project[];
}

// --- DATOS (Typed) ---

const portfolioData: PortfolioData = {
  personal: {
    name: "Jose Sojo",
    role: "Software Architect & Tech Leader",
    tagline: "Arquitectura Escalable / Liderazgo Técnico / Innovación",
    heroTitle: "Ingeniería de Software, Estrategia y Visión.",
    heroSubtitle: "Soy un arquitecto de soluciones enfocado en la escalabilidad y el rendimiento. Actualmente aplico mi experiencia liderando la visión técnica como CEO en QuanticArch.",
    email: "tu.email@personal.com",
    location: "Global / Remoto",
    yearsExp: "12+"
  },
  metrics: [
    { label: "Años en la Industria", value: "12+", icon: <Briefcase size={20} /> },
    { label: "Arquitecturas Diseñadas", value: "50+", icon: <Layers size={20} /> },
    { label: "Ingenieros Mentoreados", value: "30+", icon: <Users size={20} /> },
    { label: "Impacto en Negocio", value: "High", icon: <TrendingUp size={20} /> },
  ],
  experience: [
    {
      role: "CEO & Lead Architect",
      company: "QuanticArch",
      focus: "Mi Rol Actual",
      desc: "Fundé esta firma para elevar el estándar del desarrollo de software. Lidero la estrategia tecnológica, superviso arquitecturas críticas y defino la cultura de ingeniería del equipo.",
      tags: ["Tech Direction", "Leadership", "Architecture"],
      icon: <Building2 className="text-blue-600" size={24} />
    },
    {
      role: "Senior Software Architect",
      company: "Fintech Systems",
      focus: "Sistemas Distribuidos",
      desc: "Diseñé el núcleo transaccional para una plataforma de pagos de alto volumen. Responsable de la seguridad, la consistencia de datos y la migración a microservicios.",
      tags: ["High Availability", "Security", "Microservices"],
      icon: <Layers className="text-indigo-600" size={24} />
    },
    {
      role: "Strategic Tech Consultant",
      company: "Enterprise Clients",
      focus: "Consultoría Externa",
      desc: "He asesorado a CTOs y equipos de ingeniería en la modernización de legacy code, adopción de Cloud-Native y optimización de procesos CI/CD.",
      tags: ["Cloud Strategy", "DevOps Culture", "Mentoring"],
      icon: <Cpu className="text-purple-600" size={24} />
    }
  ],
  philosophy: [
    {
      title: "Calidad sobre Cantidad",
      desc: "Prefiero escribir menos código, pero más robusto. La deuda técnica se paga con intereses muy altos, así que priorizo la excelencia desde el día 1.",
      icon: <Code2 className="text-blue-600" />
    },
    {
      title: "Tecnología Pragmática",
      desc: "No uso tecnología por moda (hype). Selecciono el stack que resuelve el problema de negocio de la manera más eficiente y segura posible.",
      icon: <Server className="text-indigo-600" />
    },
    {
      title: "Construir Equipos",
      desc: "Un gran arquitecto no solo diseña sistemas, diseña equipos. Mi objetivo es elevar el nivel técnico de quienes trabajan conmigo.",
      icon: <Users className="text-teal-600" />
    }
  ],
  skillsCategories: {
    "Arquitectura & Cloud": ["AWS Certified Solutions Architect", "System Design", "Kubernetes", "Docker", "Event-Driven Architecture", "Serverless"],
    "Lenguajes & Core": ["TypeScript / Node.js", "Python", "Go (Golang)", "Solidity", "Rust (Learning)", "SQL Avanzado"],
    "Stack Moderno": ["Next.js / React", "Tailwind CSS", "GraphQL", "Prisma ORM", "Redis", "ElasticSearch"],
    "Liderazgo & Ops": ["CI/CD Pipelines", "Agile/Scrum", "Team Mentoring", "Tech Hiring", "Code Review Strategy"]
  },
  projects: [
    {
      title: "Arquitectura Core Bancaria",
      category: "Fintech",
      desc: "Diseño e implementación de un ledger inmutable para transacciones financieras. Reducción de latencia del 40% y consistencia ACID garantizada.",
      stats: ["High Throughput", "Zero Downtime"],
      tags: ["Node.js", "PostgreSQL", "Kafka"]
    },
    {
      title: "Protocolo DeFi Seguro",
      category: "Blockchain",
      desc: "Desarrollo de Smart Contracts para un protocolo de liquidez. Implementación de patrones de seguridad avanzados y optimización de Gas.",
      stats: ["Audited", "$5M+ TVL"],
      tags: ["Solidity", "Hardhat", "Ethers.js"]
    },
    {
      title: "Plataforma SaaS Global",
      category: "Cloud Native",
      desc: "Lideré la reingeniería de una plataforma monolítica a una arquitectura serverless, permitiendo escalar a miles de usuarios concurrentes.",
      stats: ["Auto-Scaling", "Global CDN"],
      tags: ["AWS Lambda", "DynamoDB", "Next.js"]
    }
  ]
};

// --- COMPONENTES PROPS ---

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}

// --- COMPONENTES AUXILIARES ---

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, mobile = false }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${mobile ? 'block py-3 text-lg border-b border-slate-100' : 'text-sm font-medium'
      } text-slate-600 hover:text-blue-700 transition-colors duration-200 relative group`}
  >
    {children}
    {!mobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>}
  </a>
);

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"} max-w-4xl mx-auto`}>
    <div className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
      <span className="h-px w-8 bg-blue-600"></span>
      <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">Professional Portfolio</span>
      {align === "center" && <span className="h-px w-8 bg-blue-600"></span>}
    </div>
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
      {title}
    </h2>
    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
      {subtitle}
    </p>
  </div>
);

// Componente simple para icono de Twitter/X
const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

// --- COMPONENTE PRINCIPAL ---

export default function PortfolioPro() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("Arquitectura & Cloud");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled
            ? 'bg-white/80 backdrop-blur-xl border-slate-200 py-3 shadow-sm'
            : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 text-white p-2 rounded-xl">
                <Terminal size={22} strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-slate-900 text-lg tracking-tight">{portfolioData.personal.name}</span>
                <span className="block text-xs text-slate-500 font-medium">{portfolioData.personal.role}</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#about">Experiencia</NavLink>
              <NavLink href="#philosophy">Enfoque</NavLink>
              <NavLink href="#skills">Stack</NavLink>
              <NavLink href="#projects">Proyectos</NavLink>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2 group"
              >
                Conectar
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <button
              className="md:hidden text-slate-900 p-2 bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col z-50 animate-in slide-in-from-top-5">
            <NavLink href="#about" mobile onClick={() => setIsMenuOpen(false)}>Experiencia</NavLink>
            <NavLink href="#philosophy" mobile onClick={() => setIsMenuOpen(false)}>Enfoque</NavLink>
            <NavLink href="#skills" mobile onClick={() => setIsMenuOpen(false)}>Stack</NavLink>
            <NavLink href="#projects" mobile onClick={() => setIsMenuOpen(false)}>Proyectos</NavLink>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold text-lg">
              Conectar
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Open for Networking & Consulting
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                {portfolioData.personal.heroTitle.split(" ").slice(0, 2).join(" ")} <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {portfolioData.personal.heroTitle.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {portfolioData.personal.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group">
                  Hablemos de Código <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#skills" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center">
                  Ver mi Stack Técnico
                </a>
              </div>

              {/* Metrics Strip */}
              <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                {portfolioData.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-extrabold text-slate-900">{metric.value}</span>
                    <span className="text-sm text-slate-500 font-medium">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Abstract Architecture */}
            <div className="hidden lg:block w-full max-w-lg relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 blur-2xl"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">architect-profile.tsx</div>
                </div>

                {/* Code Abstract */}
                <div className="space-y-4 font-mono text-sm">
                  <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <span className="text-purple-600">class</span> <span className="text-slate-900 font-bold">SoftwareArchitect</span> <span className="text-slate-500">{'{'}</span>
                    <div className="pl-4 mt-2 text-slate-600">
                      <div><span className="text-blue-600">constructor</span>() {'{'}</div>
                      <div className="pl-4">this.focus = <span className="text-green-600">"Scalability"</span>;</div>
                      <div className="pl-4">this.passion = <span className="text-green-600">"Problem Solving"</span>;</div>
                      <div>{'}'}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/50 rounded border border-blue-100 flex items-center gap-3">
                    <Layers size={16} className="text-blue-600" />
                    <span className="text-blue-900 font-semibold">Microservices Design</span>
                  </div>

                  <div className="p-3 bg-indigo-50/50 rounded border border-indigo-100 flex items-center gap-3">
                    <Users size={16} className="text-indigo-600" />
                    <span className="text-indigo-900 font-semibold">Technical Leadership</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION (BENTO GRID STYLE) --- */}
      <section id="philosophy" className="py-24 relative z-10 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Mi Enfoque Técnico"
            subtitle="La tecnología es solo una herramienta. Lo que importa es cómo la utilizamos para crear sistemas resilientes y eficientes."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.philosophy.map((item, idx) => (
              <div key={idx} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION (PERSONAL TRACK RECORD) --- */}
      <section id="about" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Trayectoria & Impacto"
            subtitle="Mi evolución profesional: Desde escribir el primer endpoint hasta diseñar ecosistemas digitales completos."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {portfolioData.experience.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 text-slate-700">
                  {job.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <div className="text-blue-600 font-semibold text-sm mb-1">{job.company}</div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-4">{job.focus}</div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {job.desc}
                </p>

                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-slate-500 text-lg">
              Mi rol en <span className="text-slate-900 font-bold">QuanticArch</span> demuestra mi capacidad para ejecutar una visión a gran escala, pero mi pasión sigue siendo la resolución de problemas técnicos complejos.
            </p>
          </div>
        </div>
      </section>

      {/* --- SKILLS & TECH STACK (INTERACTIVE TABS) --- */}
      <section id="skills" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Expertise Técnico"
            subtitle="Este es el stack que domino y utilizo para construir soluciones de nivel empresarial."
          />

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs Navigation */}
            <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {Object.keys(portfolioData.skillsCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-4 rounded-xl text-left font-semibold text-sm transition-all whitespace-nowrap lg:whitespace-normal flex items-center justify-between ${activeTab === category
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {category}
                  {activeTab === category && <ChevronRight size={16} className="hidden lg:block" />}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-3/4 bg-slate-50 rounded-3xl p-8 border border-slate-100 min-h-[300px]">
              <div className="animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Code2 className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{activeTab}</h3>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {portfolioData.skillsCategories[activeTab].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:border-blue-300 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                      <span className="font-medium text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Proyectos Destacados"
            subtitle="Una selección de retos técnicos que he resuelto personalmente o liderado arquitecturalmente."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-lg">
                      {project.category}
                    </span>
                    <Globe className="text-slate-300 group-hover:text-blue-600 transition-colors" size={20} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="mb-6 space-y-2">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <TrendingUp size={14} className="text-green-600" /> {stat}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / FOOTER --- */}
      <section id="contact" className="relative py-24 bg-slate-900 text-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            ¿Conectamos?
          </h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">
            Siempre estoy interesado en conversar sobre arquitectura de software, nuevas tecnologías o desafíos complejos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href={`mailto:${portfolioData.personal.email}`} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
              <Mail size={20} /> Enviar Correo
            </a>
            <a href="https://quanticarch.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2">
              <Globe size={20} /> Mi Compañía
            </a>
          </div>

          <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <div className="flex flex-col text-left">
              <span className="font-bold text-white mb-1">{portfolioData.personal.name}</span>
              <span>Software Architect & Tech Leader</span>
            </div>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><TwitterIcon /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
