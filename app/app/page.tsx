"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Code2, Smartphone, Cpu, Palette, Bot, Database,
    Menu, X,
    ArrowRight, Navigation, Globe, Plane, Compass,
    Hexagon,
    Terminal,
    Layers,
    Megaphone,
    ArrowUpRight,
    Star,
    Quote
} from 'lucide-react';

const services = [
    { id: "01", title: "Desarrollo Web", tag: "Arquitectura", accent: "bg-[#06ACA1]", icon: <Code2 className="w-5 h-5" />, desc: "Estructuras digitales robustas y fluidas." },
    { id: "02", title: "Desarrollo Móvil", tag: "Experiencia", accent: "bg-sky-500", icon: <Smartphone className="w-5 h-5" />, desc: "Aplicaciones con UX de primera clase." },
    { id: "03", title: "Cultura DevOps", tag: "Infraestructura", accent: "bg-teal-500", icon: <Cpu className="w-5 h-5" />, desc: "Logística técnica para despliegues seguros." },
    { id: "04", title: "IA & Automatización", tag: "Innovación", accent: "bg-cyan-500", icon: <Bot className="w-5 h-5" />, desc: "Navegación inteligente con agentes autónomos." },
    { id: "05", title: "Web3 & Blockchain", tag: "Seguridad", accent: "bg-blue-800", icon: <Database className="w-5 h-5" />, desc: "Seguridad descentralizada de nueva generación." },
    { id: "06", title: "Estrategia de Redes Sociales", tag: "Comunidad", accent: "bg-indigo-500", icon: <Megaphone className="w-5 h-5" />, desc: "Posicionamiento orgánico y crecimiento digital." }
];

const projects = [
    {
        name: "Nutringest",
        category: "Health Tech",
        description: "Plataforma integral de nutrición inteligente. Arquitectura de datos optimizada para procesamiento en tiempo real.",
        metrics: ["+150% Retención", "0.8s Carga"],
        tags: ["Next.js", "IA", "AWS"],
        url: "https://nutringest.quanticarch.com",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800"
    },
    {
        name: "Cronobyke",
        category: "Sport Lab",
        description: "Ecosistema digital para ciclistas de alto rendimiento. Telemetría y análisis con precisión milimétrica.",
        metrics: ["10k+ Usuarios", "99.9% Uptime"],
        tags: ["React Native", "Node.js", "IoT"],
        url: "https://cronobyke.quanticarch.com",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800"
    }
];

const testimonials = [
    {
        id: 1,
        quote: "Quantic Arch no solo entregó código, diseñó una verdadera obra de ingeniería digital. La infraestructura que montaron para Nutringest soporta miles de usuarios concurrentes sin inmutarse. El nivel de detalle es obsesivo, en el buen sentido.",
        author: "Elena Ramírez",
        role: "CEO & Fundadora",
        company: "Nutringest",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "La transición hacia una cultura DevOps y la automatización de nuestros despliegues fue quirúrgica. Redujimos el 'time-to-market' de nuevas features en un 60%. Trabajar con ellos es como tener un equipo de arquitectos de software de élite in-house.",
        author: "David Chen",
        role: "CTO",
        company: "Cronobyke",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "Buscábamos una agencia que entendiera las complejidades de Web3 y la seguridad descentralizada. Su capacidad para traducir conceptos criptográficos complejos en interfaces hermosas y fáciles de usar fue lo que marcó la diferencia.",
        author: "Sofía Valenzuela",
        role: "Directora de Producto",
        company: "Aether Protocol",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
];

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1F2833] via-[#0B0C10] to-[#0B0C10]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06ACA1]/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#45A29E]/10 rounded-full blur-[100px]"></div>

                {/* Cyber Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2833_1px,transparent_1px),linear-gradient(to_bottom,#1F2833_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2833] border border-[#45A29E]/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#06ACA1] animate-pulse"></span>
                        <span className="text-[#45A29E] text-xs font-mono tracking-widest uppercase">Sistema en línea</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#212529] leading-tight mb-6 tracking-tight">
                        Ingeniería digital <br />
                        para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06ACA1] to-[#45A29E]">futuro.</span>
                    </h1>
                    <p className="text-[#212529]/70 text-lg md:text-xl mb-8 max-w-lg font-light leading-relaxed">
                        Construimos arquitecturas web y software de alto rendimiento. Soluciones precisas, escalables y diseñadas con tecnología de vanguardia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#06ACA1] text-[#0B0C10] rounded font-bold hover:bg-[#212529] hover:text-[#f2f2f2] transition-colors group">
                            Explorar Soluciones
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 py-4 border border-[#1F2833] text-[#212529] rounded hover:bg-[#1F2833] hover:text-[#f2f2f2] transition-colors">
                            <Terminal className="w-5 h-5 text-[#45A29E]" />
                            Ver Documentación
                        </button>
                    </div>
                </div>

                {/* Abstract Hero Graphic */}
                <div className="hidden lg:flex justify-center relative group">
                    {/* Background Energy Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#06ACA1] rounded-full blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                        {/* Orbits */}
                        <div className="absolute w-[400px] h-[400px] border border-[#1F2833] rounded-full animate-[spin_20s_linear_infinite] group-hover:border-[#45A29E]/50 transition-colors duration-700">
                            {/* Electron/Node */}
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#06ACA1] rounded-full shadow-[0_0_15px_#06ACA1] -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        <div className="absolute w-[300px] h-[300px] border border-[#45A29E]/30 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse] group-hover:border-[#06ACA1]/60 transition-colors duration-700">
                            {/* Electron/Node */}
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#45A29E] rounded-full shadow-[0_0_10px_#45A29E] -translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        <div className="absolute w-[200px] h-[200px] border border-[#1F2833] rounded-full animate-[spin_10s_linear_infinite] group-hover:border-[#45A29E]/40 transition-colors duration-500"></div>

                        {/* Center Core */}
                        <div className="relative w-32 h-32 bg-[#1F2833] border border-[#06ACA1] rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(102,252,241,0.3)] group-hover:shadow-[0_0_60px_rgba(102,252,241,0.6)] group-hover:scale-110 transition-all duration-500 z-10 cursor-pointer">
                            <Hexagon className="w-16 h-16 text-[#06ACA1] -rotate-45 group-hover:animate-pulse" />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-10 right-20 w-12 h-12 bg-[#0B0C10]/80 backdrop-blur-sm border border-[#45A29E] rounded flex items-center justify-center animate-bounce z-10 group-hover:-translate-y-2 transition-transform duration-500">
                            <Code2 className="w-5 h-5 text-[#45A29E]" />
                        </div>

                        <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#0B0C10]/80 backdrop-blur-sm border border-[#06ACA1] rounded-full flex items-center justify-center animate-pulse z-10 group-hover:scale-110 transition-transform duration-500">
                            <Cpu className="w-6 h-6 text-[#06ACA1]" />
                        </div>

                        <div className="absolute top-32 left-10 w-10 h-10 bg-[#0B0C10]/80 backdrop-blur-sm border border-[#1F2833] rounded-xl flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite_reverse] z-10">
                            <Layers className="w-4 h-4 text-[#212529]/60" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100">
            {/* Header Info */}
            <div className="bg-slate-50 border-b border-slate-200 py-2 hidden sm:block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex gap-6"><span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Global</span><span className="flex items-center gap-1"><Plane className="w-3 h-3" /> Remote</span></div>
                    <p className="italic font-serif">Bit por bit, átomo por átomo</p>
                </div>
            </div>

            {/* Nav */}
            <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur-md border-b py-3 shadow-sm' : 'bg-transparent py-7'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <Hexagon className="w-8 h-8 text-[#06ACA1]" />
                        <span className="text-[#212529] font-bold text-xl tracking-wider">
                            QUANTIC<span className="text-[#06ACA1]">ARCH</span>
                        </span>
                    </div>

                    <div className="hidden md:flex gap-8 items-center text-[11px] font-black uppercase tracking-widest text-slate-400">
                        {['Servicios', 'Proyectos', 'Contacto'].map(i => <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-[#06ACA1] transition-colors">{i}</a>)}
                        <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-[#06ACA1] transition-all shadow-lg">Agendar Ruta</button>
                    </div>
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
                </div>
            </nav>

            {/* Hero */}
            <Hero />

            {/* Services */}
            <section id="servicios" className="py-32 bg-slate-50 relative overflow-hidden">
                {/* Background Grid Pattern for technical feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-[#06ACA1]"></span> Especialidades
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-slate-900">
                                Soluciones con <br /><span className="italic font-serif text-slate-500">Grado de Arquitectura</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 text-sm md:text-base max-w-md font-light leading-relaxed">
                            Diseñamos infraestructuras digitales que combinan estética de alta gama con rendimiento cuántico. Cada módulo está construido para escalar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(s => (
                            <div key={s.id} className="relative p-8 lg:p-10 bg-white rounded-[2rem] border border-slate-100 hover:border-[#06ACA1]/30 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(6,172,161,0.15)] transition-all duration-500 group overflow-hidden">

                                {/* Top Energy Line (Hover Effect) */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#06ACA1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Watermark Architecture Number */}
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

                                    <div className="mt-auto flex items-center gap-3 cursor-pointer">
                                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#06ACA1] group-hover:border-[#06ACA1] transition-colors duration-500">
                                            <Navigation className="w-4 h-4 rotate-90 text-slate-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                                            Explorar Módulo
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="proyectos" className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-20 flex flex-col items-center text-center">
                        <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
                            <span className="w-4 h-[1px] bg-[#06ACA1]"></span> Bitácora de Casos <span className="w-4 h-[1px] bg-[#06ACA1]"></span>
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
                            Proyectos <span className="italic font-serif text-[#06ACA1]">Destacados</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((p) => (
                            <a key={p.name} href={p.url} className="group relative bg-slate-900 rounded-[0.5rem] overflow-hidden block border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                                {/* Image with zoom effect */}
                                <div className="relative h-[450px] w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-700 z-10"></div>
                                    <img src={p.image} alt={`Proyecto ${p.name}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-1000" />
                                </div>

                                {/* Top Tags */}
                                <div className="absolute top-8 left-8 z-20 flex flex-wrap gap-2 pr-8">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent z-20">
                                    <div className="flex justify-between items-end gap-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-[#06ACA1] text-[10px] font-black uppercase tracking-widest mb-3">{p.category}</p>
                                            <h3 className="text-3xl font-black text-white mb-3">{p.name}</h3>

                                            {/* Description (reveals on hover on desktop) */}
                                            <p className="text-slate-300 text-sm font-light max-w-sm mb-6 md:opacity-0 md:h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 hidden md:block">
                                                {p.description}
                                            </p>

                                            {/* Metrics */}
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

                                        {/* Action Button */}
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
                {/* Dark Mode Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
                <div className="absolute -left-[20%] -top-[20%] w-[50%] h-[50%] bg-[#06ACA1]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="text-[#06ACA1] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-[#06ACA1]"></span> Reputación
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-white">
                                Voces de <br /><span className="italic font-serif text-slate-400">Nuestros Socios</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-sm md:text-base max-w-md font-light leading-relaxed">
                            No somos proveedores, somos arquitectos de tu visión. El éxito de nuestras estructuras digitales se refleja en el crecimiento de quienes confían en nosotros.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#06ACA1]/50 transition-all duration-500 backdrop-blur-sm">

                                {/* Decorative Quote Icon */}
                                <div className="absolute top-8 right-8 text-white/5 group-hover:text-[#06ACA1]/20 transition-colors duration-500">
                                    <Quote className="w-16 h-16 rotate-180" />
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#06ACA1] text-[#06ACA1]" />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-10 relative z-10">
                                    &quot;{t.quote}&quot;
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-white/10">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-[#06ACA1] transition-colors duration-500">
                                        <Image src={t.image} alt={t.author} className="w-full h-full object-cover" width={50} height={50} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{t.author}</h4>c
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


            <footer className="py-12 bg-white border-t text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                © {new Date().getFullYear()} QuanticArch Lab.
            </footer>
        </div>
    );
}