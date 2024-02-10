import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root, Home, ContactUs, NotFound, AdminPage } from './pages'

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
      {
        path:"/admin",
        element: <AdminPage />,
      }
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
