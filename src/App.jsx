import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Watermark from './components/Watermark'

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Testimonials/>
      <Footer/>
      <Watermark/>
    </div>
  )
}

export default App
