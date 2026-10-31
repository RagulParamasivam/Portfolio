import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Gamepad2, PanelsTopLeft, Database, Wrench, Bug, Sparkles } from "lucide-react";
import { skillGroups } from "../data";
import { PageIntro, Tag } from "../components/UI";
const icons = {Code2, Gamepad2, PanelsTopLeft, Database, Wrench, Bug};
export default function Skills() {
  const [filter, setFilter] = useState("All");
  const groups = filter === "All" ? skillGroups : skillGroups.filter(g => g.title === filter);
  return <div className="container page"><PageIntro eyebrow="02 / THE TOOLKIT" title={<>Skills & <span className="gradient-text">abilities.</span></>} description="A growing toolkit across game development, programming, web technologies, and software quality."/>
    <div className="filter-row">{["All", ...skillGroups.map(g=>g.title)].map(x=><button key={x} className={filter===x?"filter active-filter":"filter"} onClick={()=>setFilter(x)}>{x}</button>)}</div>
    <div className="skill-grid">{groups.map((g,i)=>{const Icon=icons[g.icon];return <motion.article className="panel skill-card" key={g.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*.07}}><div className="card-icon"><Icon size={23}/></div><div className="card-index mono">SKILL SET / 0{i+1}</div><h2>{g.title}</h2><div className="tag-list">{g.items.map(s=><Tag key={s}>{s}</Tag>)}</div>{g.title==="Game Development"&&<div className="learning-note"><Sparkles size={15}/> Currently learning and building practical experience.</div>}</motion.article>})}</div>
    <p className="note-line mono">SKILL LEVELS ARE NOT SCORED — THIS LIST REFLECTS THE RESUME.</p>
  </div>;
}
