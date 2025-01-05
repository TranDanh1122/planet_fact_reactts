
import './styles.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import React from "react"
function App() {
  const [data, setData] = React.useState([])
  const [loading, isLoading] = React.useState(true)

  React.useEffect(() => {

  }, [])
  if (loading) return <p>Loading...</p>
  return (
    <BrowserRouter>
      <header className='max-w-[1440px] mx-auto w-full px-8  flex items-center justify-between border-b-[1px] border-solid border-gray'>
        <span className='font-medium text-[1.75rem] tracking-[-1.05px]'>THE PLANETS</span>
        <ul className='flex items-center justify-start gap-8 h-full  uppercase h4'>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/mercury">mercury</NavLink>
          </li>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/venus">venus</NavLink>
          </li>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/earth">earth</NavLink>
          </li>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/mars">mars</NavLink>
          </li>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/jupiter">jupiter</NavLink>
          </li>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/saturn">saturn</NavLink>
          </li>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/uranus">uranus</NavLink>
          </li>
          <li className='hover:border-t-4 hover:border-solid hover:border-cyan py-6'>
            <NavLink to="/neptune">neptune</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:planet" element={<App />} />
      </Routes>
    </BrowserRouter >






  )
}

export default App
