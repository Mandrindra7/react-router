import { BrowserRouter , Routes, Route, Link, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import CareersLayout from './layouts/CareersLayout'
import HelpLayout from './layouts/HelpLayout'

import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import CareerDetails, { getCareerDetail } from './pages/CareerDetails'
import Careers, {getCareers} from './pages/Careers'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='help' element={<HelpLayout />}>
            <Route path='faq' element={<Faq />}/>
            <Route path='contact'element={<Contact />}/>
        </Route>

        <Route path='career' element={<CareersLayout />}>
            <Route 
            loader={getCareers}
            index  
            element={<Careers />}
            />
            <Route 
              path=':id'
              element={<CareerDetails />}
              loader={getCareerDetail}
            />
        </Route>

        <Route path='*' element={<NotFound />}/>
      </Route>
    )
  )

  return (
     <RouterProvider router={router}/>
 
  )
}

export default App
