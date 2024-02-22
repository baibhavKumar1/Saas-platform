import About from '@/pages/About';
import Blogs from '@/pages/Blogs';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Services from '@/pages/Services';
import {Routes,Route} from 'react-router-dom';
const AllRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/services/:data' element={<Services/>}/>
      </Routes>
  )
}

export default AllRoutes
