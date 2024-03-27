import './App.css'
import { AboutMe } from "./components/AboutMe.jsx"
import { Badge } from "./components/Badge.jsx"
import { Experience } from "./components/Experience.jsx"
import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/Icons.jsx"
import { Projects } from "./components/Projects.jsx"
import { SocialPill } from "./components/SocialPill.jsx"

function App() {

  return (
    <>
      <Header />
      <main>
        <section className='section-xp'>
          <img className="img-presentation" src="./photo.jpg" alt="angel_wayar" />
          <h1>
            Hey, soy Angel Wayar <a
              href="https://www.linkedin.com/in/angel-wayar-e/"
              target="_blank"
              rel="noopener"
            >
              <Badge>Disponible para trabajar</Badge>
            </a>
          </h1>
          <h2>
            <span>+3 años de experiencia. </span>
            <span className='text-yellow-span'>Desarrollador Full-Stack. </span>
            <span className='text-red-span '><br /> Santa Cruz, Bolivia. </span>
            <span className='text-sky-span'>Especializado en desarrollo móvil con Flutter.</span>
          </h2>
          <nav>
            <SocialPill href={"https://www.linkedin.com/in/angel-wayar-e/"} >
              <LinkedInIcon /> LinkIn
            </SocialPill>
            <SocialPill href={"https://github.com/angelwayar/"} >
              <GitHubIcon /> GitHub
            </SocialPill>
            <SocialPill href={"mailto:awayarencinas@gmail.com"} >
              <MailIcon /> awayarencinas@gmail.com
            </SocialPill>
          </nav>
        </section>
        <Experience />
        <Projects />
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default App
