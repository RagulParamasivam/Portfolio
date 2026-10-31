import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Gamepad2, Code2, Sparkles, Github, Linkedin } from "lucide-react";
import { profile } from "../data";

export default function About() {
  return <div className="container home-page">
    <section className="hero">
      <motion.div className="hero-copy" initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} transition={{duration:.65}}>
        <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/></div>
        <p className="hero-kicker">HELLO, PLAYER ONE.</p>
        <h1>I'm <span className="gradient-text">Ragul P</span><br/>I build digital<br/><span className="outline-text">experiences.</span></h1>
        <div className="role-line"><Gamepad2 size={17}/> ASPIRING GAME DEVELOPER <span className="role-divider">/</span> SOFTWARE DEVELOPER</div>
        <p className="hero-description">{profile.summary}</p>
        <div className="hero-actions"><Link className="button button-primary" to="/projects">Explore projects <ArrowUpRight size={17}/></Link><a className="button button-ghost" href="/Ragul-Resume.pdf" download>Download resume <ArrowDownRight size={17}/></a></div>
        <div className="hero-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div>
      </motion.div>
      <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
        <div className="visual-grid"/>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="core-card"><div className="core-top"><span className="mono">PLAYER PROFILE</span><span className="live-chip">ONLINE</span></div><div className="avatar-placeholder"><Gamepad2 size={76} strokeWidth={1}/><span>RP</span></div><div className="core-name">RAGUL P</div><div className="core-sub">GAME DEV IN PROGRESS</div><div className="core-stats"><div><strong>8.1</strong><small>CGPA</small></div><div><strong>03</strong><small>MONTHS GAME DEV</small></div><div><strong>07</strong><small>SKILL GROUPS</small></div></div></div>
        <div className="float-chip chip-a"><Sparkles size={15}/> Creative mindset</div><div className="float-chip chip-b"><Code2 size={15}/> Unity • Code • Create</div>
        <div className="visual-caption mono">FIG. 01 — THE DEVELOPER</div>
      </motion.div>
      <div className="hero-scroll mono">SCROLL TO EXPLORE <span/></div>
    </section>
    <section className="about-strip">
      <div><span className="eyebrow">01 / ABOUT ME</span><h2>Curious by nature.<br/><span className="gradient-text">Builder by choice.</span></h2></div>
      <div className="about-text"><p>I'm an Information Technology student exploring the intersection of game development and software engineering. I enjoy learning by building, experimenting with interactive ideas, and turning concepts into working projects.</p><p>My experience includes internships in game development, full-stack development, web development, and cybersecurity. I'm currently focused on strengthening my Unity and game-development foundations.</p><Link className="text-link" to="/experience">Explore my journey <ArrowUpRight size={16}/></Link></div>
    </section>
    <section className="quick-links"><Link to="/skills"><span>01</span><strong>Skills & toolkit</strong><ArrowUpRight/></Link><Link to="/experience"><span>02</span><strong>Experience</strong><ArrowUpRight/></Link><Link to="/projects"><span>03</span><strong>Selected projects</strong><ArrowUpRight/></Link><Link to="/contact"><span>04</span><strong>Let's connect</strong><ArrowUpRight/></Link></section>
  </div>;
}
