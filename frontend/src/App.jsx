import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root, Home, ContactUs, NotFound, AdminPage, Celebrations, Portfolio, About } from './pages'

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
        path:"/contact",
        element: <ContactUs />,
      },
      {
        path:"/admin",
        element: <AdminPage />,
      },
      {
        path:"/celebrations",
        element: <Celebrations />,
      },
      {
        path:"/galleries",
        element: <Portfolio />,
      },
      {
        path:"/about",
        element: <About />,
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
