import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root, Home, NotFound } from './pages'

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
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
