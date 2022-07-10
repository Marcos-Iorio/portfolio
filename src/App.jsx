import React, {useRef, useEffect}  from 'react'

import './App.css'

import About from './components/about/About'
import Contact from './components/Contact/Contact'
import Heading from './components/heading/heading'
import Menu from './components/menu/Menu'
import Projects from './components/projects/Projects'
import Stack from './components/Stack/Stack'

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <Menu/>
      <div ref={containerRef} className='content_wrapper'>
        <Heading/>
        <About/>
        <Stack/>
        <Projects/>
        <Contact/>
      </div>
    </>
    
  )
}

export default App
