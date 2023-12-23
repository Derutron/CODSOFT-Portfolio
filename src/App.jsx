
import Contact from './Components/Contact'
import DownloadResumeButton from './Components/DownloadResumeButton'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import Projects from './Components/projects'

const App = () => {
  return (
    <div className='home mt-[50px] w-[1600px] h-[4800px] mx-auto bg-[#F5FCFF] '>
      <Navbar/>
      <div id="Header"><Header/></div>
      <div id="Skills"><Skills/></div>
      <div id="Projects"><Projects/></div>

      <div className='absolute top-[3600px]'>
        <div id="Resume"><Resume/></div>
      </div>

      <DownloadResumeButton/>

      <div className='absolute top-[4000px]'>
        <div id="Contact"><Contact/></div>
      </div>

      <Footer/>
    </div>
  )
}

export default App