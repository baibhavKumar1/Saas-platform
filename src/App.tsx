import './App.css'
import AllRoutes from './components/AllRoutes';
//import { GridBackgroundDemo } from './pages/waves'
import { ThemeProvider } from './components/theme-provider'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function App() {
  
  return (
    <ThemeProvider>
      <div className="w-[99.9%] dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
      <Navbar/>
      <div className=" absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      <AllRoutes/>
      <Footer/>
    </div>    
    </ThemeProvider>
    
  )
}
export default App
