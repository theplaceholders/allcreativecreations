import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root, Home, ContactUs, NotFound } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/contact-us",
        element: <ContactUs />,
      },
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
