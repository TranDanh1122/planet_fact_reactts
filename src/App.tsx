
import './styles.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import React from "react"
import Content from './Content.tsx';

function App() {
  const [data, setData] = React.useState([] as Planet[])
  const [loading, isLoading] = React.useState(true)
  const mobileMenu = React.useRef<HTMLUListElement>(null)
  React.useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("./data.json")
        if (!response.ok) return
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.log(error);
      } finally {
        isLoading(false)
      }
    }
    loadData()

  }, [])

  if (loading) return <p>Loading...</p>

  const toogleMenu = () => {

    if (!mobileMenu) return
    if (mobileMenu.current?.classList.contains('mb:hidden')) {
      mobileMenu?.current?.classList.remove('mb:hidden', 'hidden');
      mobileMenu?.current?.classList.remove('mb:flex');

    } else {
      mobileMenu?.current?.classList.add('mb:hidden', 'hidden');
    }
  }

  return (
    <BrowserRouter basename="planet_fact_reactts">
      <header className='max-w-[1440px] mb:max-w-none mx-auto w-full px-8 mb:px-2 mb:py-4 flex tb:flex-wrap items-center justify-between tb:justify-center border-b-[1px] border-solid border-gray'>
        <NavLink to='/' className='font-medium text-[1.75rem] mb:text-[1rem] tracking-[-1.05px] tb:w-full tb:text-center tb:pt-8 relative z-20'>THE PLANETS</NavLink>
        <ul className='flex items-center justify-start gap-8 h-full  uppercase h4 mb:hidden'>
          {data.map((planet: Planet, index) => (
            <li key={index} className='hover:border-t-4 tb:hover:border-t-0 tb:hover:border-b-4 hover:border-solid hover:border-cyan py-6'>
              <NavLink to={`${index + 1}`}>{planet.name}</NavLink>
            </li>
          ))}

        </ul>
        <ul ref={mobileMenu} className='hidden items-center mb:items-start justify-start gap-8 mb:gap-2 h-full  uppercase h4 mb:px-4 mb:pt-16 mb:hidden mb:fixed mb:flex-col mb:w-full mb:h-full mb:right-0 mb:top-0 mb:z-10 mb:bg-dark'>
          {data.map((planet: Planet, index) => (
            <li key={index} className='py-4 w-full'>
              <NavLink onClick={() => toogleMenu()} className="flex gap-4 items-center w-full " to={`${index + 1}`}>
                <img className='w-5 h-5 object-cover rounded-full' src={planet.images["overview"]}></img>
                {planet.name}
                <img className='w-3 h-3 object-cover ml-auto' src="./assets/icon-chevron.svg" />
              </NavLink>
            </li>
          ))}
        </ul>
        <i onClick={() => toogleMenu()} className='w-6 h-4 bg-white relative z-20' style={{ mask: `url(./assets/icon-hamburger.svg)` }}></i>
      </header>
      <Routes >
        <Route path="/" element={<Content data={data} />} />
        <Route path="/:id" element={<Content data={data} />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
