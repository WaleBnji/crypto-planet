
import Navbar from "./components/Navbar"
import Hero from "./Sections/Hero"
import Topmarket from "./Sections/Topmarket"
import CreateProfile from "./Sections/CreateProfile"
import DownloadApp from "./Sections/DownloadApp"
import Benefits from "./Sections/Benefits"
import Investors from "./Sections/Investors"
import Footer from "./Sections/Footer"



export default function App() {
  return (
    
    <div className="">
      <Navbar />
      <Hero />
      <Topmarket />
      <CreateProfile />
      <DownloadApp />
      <Benefits />
      <Investors />
      <Footer />

     
    </div>
    
  )
}