import { motion } from "framer-motion";

export function PageIntro({ eyebrow, title, description }) {
  return <motion.div className="page-intro" initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{duration:.5}}>
    <div className="eyebrow"><span className="eyebrow-line"/> {eyebrow}</div>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </motion.div>;
}
export function SectionLabel({ children }) { return <div className="section-label">{children}</div>; }
export function Tag({ children }) { return <span className="tag">{children}</span>; }
export const fadeUp = { hidden:{opacity:0,y:20}, show:{opacity:1,y:0} };
export const stagger = { hidden:{}, show:{transition:{staggerChildren:.09}} };
