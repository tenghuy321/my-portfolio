import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Skills from "./pages/Skills"
import Facts from "./pages/Facts"
import Experience from "./pages/Experience"
import Project from "./pages/Project"


function App() {

  return (
    <main className="w-full h-screen">
      <Header />
      <section className="grid grid-cols-12 bg-[#ffdb66] min-h-screen pt-10 z-[20]">
        <div className="col-span-12 lg:col-span-8 xl:col-span-10 mt-[5rem] px-2 md:pr-0 md:pl-10">
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/about" element={<About />}>About me</Route>
            <Route path="/services" element={<Services />}>My Services</Route>
            <Route path="/skills" element={<Skills />}>My Skills</Route>
            <Route path="/facts" element={<Facts />}>Facts</Route>
            <Route path="/experience" element={<Experience />}>Experience</Route>
            <Route path="/projects" element={<Project />}>Project</Route>
          </Routes>
        </div>

        <div className="col-span-4 xl:col-span-2 w-full mt-[5rem] hidden lg:flex">
          <hr className="w-[2px] h-full bg-[#d9bb59]" />
          <div className="w-full">
            <Navbar />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
