import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inbox from './Components/Inbox'
import Navbar from './Components/Shared/Navbar'
import Body from './Components/Body'
import Mail from './Components/Mail'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]
  }
])

function App() {

  return (
    <>
      <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
