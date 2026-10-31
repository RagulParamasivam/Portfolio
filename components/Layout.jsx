import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data";

const nav = [
  ["About", "/"], ["Skills", "/skills"], ["Education", "/education"],
  ["Experience", "/experience"], ["Projects", "/projects"],
  ["Certifications", "/certifications"], ["Contact", "/contact"]
];

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="site-header">
      <Link className="brand" to="/"><span className="brand-mark">R</span><span>RAGUL<span className="accent">.P</span></span></Link>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {nav.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}
      </nav>
      <a className="header-cta" href="/Ragul-Resume.pdf" download>Download CV <span>↗</span></a>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div><span className="brand-mark small">R</span> <span>Designed & built for the next level.</span></div>
      <div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div>
      <span className="mono">© {new Date().getFullYear()} RAGUL P</span>
    </footer>
    {showTop && <button className="back-top" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} aria-label="Back to top"><ArrowUp size={18}/></button>}
  </>;
}
