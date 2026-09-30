import './App.css'
import BrowserHeader from './components/blocks/Browser'
import HomeBody from './components/blocks/Home'
import AboutMeBody from './components/blocks/AboutMeBody'
import Projects from './components/blocks/Projects'
import Footer from './components/blocks/Footer'
import ProProjects from './components/blocks/ProProjects'

function App() {
  return (
    <>
      <body className="bg-stone-950">
        <BrowserHeader />
        <HomeBody />
        <AboutMeBody />
        <Projects />
        <ProProjects />
        <Footer />
      </body>
    </>
  ) 
}

export default App
