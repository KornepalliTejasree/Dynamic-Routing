import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
const App = () => {
  const router=createBrowserRouter([
    {path:"/",
      element:<div>
        <Navbar />
        <Home />
      </div>
    },
    {path:"/about",
      element:<div>
         <Navbar />
        <About />
      </div>
    },
    {path:"/products",
      element:<div>
         <Navbar />
        <Products />
      </div>
    },
  ])
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
