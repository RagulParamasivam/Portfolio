import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, BrainCircuit, QrCode, ArrowUpRight, X } from "lucide-react";
import { projects } from "../data";
import { PageIntro, Tag } from "../components/UI";
const icons = {Gamepad2, BrainCircuit, QrCode};
export default function Projects() {
 const [filter,setFilter]=useState("All"); const [selected,setSelected]=useState(null);
 const cats=["All",...new Set(projects.map(p=>p.category))]; const visible=filter==="All"?projects:projects.filter(p=>p.category===filter);
 return <div className="container page"><PageIntro eyebrow="05 / SELECTED WORK" title={<>Projects in <span className="gradient-text">progress.</span></>} description="A selection of academic work and my developing journey in game development."/><div className="filter-row">{cats.map(c=><button key={c} onClick={()=>setFilter(c)} className={filter===c?"filter active-filter":"filter"}>{c}</button>)}</div><div className="project-grid">{visible.map((p,i)=>{const Icon=icons[p.icon];return <motion.article className="panel project-card" key={p.name} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*.08}}><div className={`project-art art-${p.icon}`}><div className="art-grid"/><Icon size={66} strokeWidth={1.15}/><span className="art-code mono">PROJECT / 0{i+1}</span></div><div className="project-content"><div className="project-meta"><span>{p.category}</span><span className="status-text">{p.status}</span></div><h2>{p.name}</h2><p>{p.description}</p><div className="tag-list">{p.stack.map(s=><Tag key={s}>{s}</Tag>)}</div><button className="text-link project-detail" onClick={()=>setSelected(p)}>View details <ArrowUpRight size={16}/></button></div></motion.article>})}</div>
 {selected&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="detail-modal panel" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><span className="eyebrow">PROJECT DETAILS</span><h2>{selected.name}</h2><p>{selected.description}</p><div className="tag-list">{selected.stack.map(s=><Tag key={s}>{s}</Tag>)}</div><p className="modal-hint">Project screenshots, detailed features, and repository links can be added here when available.</p></div></div>}
 </div>;
}
