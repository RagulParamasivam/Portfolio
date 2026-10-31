import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.22}}>
    <Routes location={location}>
      <Route path="/" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/certifications" element={<Certifications/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<About/>}/>
    </Routes>
  </motion.div></AnimatePresence>;
}
export default function App() { return <Layout><AnimatedRoutes/></Layout>; }
