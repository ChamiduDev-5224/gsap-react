
import './App.css'
import Carousel from './components/Carousel';
import { Highlight } from './components/Highlight';
import NavBar from './components/NavBar';
function App() {
  
  return (
    <main className='bg-black'>
      <NavBar />
      <Highlight />
      <Carousel />
    </main >
  )
}

export default App
