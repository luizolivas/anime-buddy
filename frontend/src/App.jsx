import { useState } from 'react'
import './App.css'
import AnimeList from './components/AnimeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimeList></AnimeList>
    </>
  )
}

export default App
