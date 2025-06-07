import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-red-500 rounded-xl'>Tailwind Test</h1>
      <Card userName="Tony Stark" designation="CEO"/>
      <Card userName="Steve Roger" designation="Captain"/>
    </>
  )
}

export default App
