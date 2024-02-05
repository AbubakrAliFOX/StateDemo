import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggler from './Toggler'
import ColorBox from './ColorBox'
import ColorGrid from './ColorGrid'

const colors = ["red", "green", "blue", "orange", "purple", "yellow", "pink", "brown", "teal", "cyan", "magenta", "violet", "lime", "indigo", "gray", "black"];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Toggler /> */}
      {/* <ColorBox colors={colors}/> */}
      <ColorGrid colors={colors} />
    </>
  )
}

export default App
