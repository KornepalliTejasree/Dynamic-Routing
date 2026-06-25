import React from 'react'
import {createHashRouter,RouterProvider} from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductsDetailed from './components/ProductsDetailed'
const App = () => {
  const router=createHashRouter([
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
    {path:"/products/:id",
      element:<div>
         <Navbar />
        <ProductsDetailed />
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
