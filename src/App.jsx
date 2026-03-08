import BackgroundSG from './components/BackgroundSG'
import fotoMinha from './assets/225765876.jpg'
import Card from './components/Card'
import { FaSun } from 'react-icons/fa'

function App() {

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-around">
      {/* Fundo com Shader Gradient */}
      <BackgroundSG />
      {/* Seção com Minha foto */}
      <section className='w-full flex flex-col gap-5 items-center justify-center'>
        <img src={fotoMinha} alt="Matheus G Benevides" className='w-2/12 rounded-full border-2 border-white/20 shadow-2xl' />
        <p className='italic font-bold text-xl text-white'>Matheus G Benevides</p>
      </section>
      {/*Seção de Skills*/}
      <section className='w-11/12 p-5 rounded-lg bg-white/10 flex flex-wrap gap-5 items-center justify-around'>
        <h1 className='w-full text-center text-2xl text-white'>Habilidades</h1>
        <Card titulo='Frontend' />
        <Card titulo='Backend' />
        <Card titulo='Ferramentas' />
      </section>

    </main>
  )
}

export default App
