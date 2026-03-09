import BackgroundSG from './components/BackgroundSG'
import fotoMinha from './assets/225765876.jpg'
import Card from './components/Card'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState } from 'react'

function App() {

  const [tema, setTema] = useState(0);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-around">
      {/* Btn de mudar tema */}
      <button className='cursor-pointer text-2xl hover:bg-white/20 rounded-full p-2 fixed top-5 right-5 text-white' onClick={() => { setTema(!tema) }}>{tema == 0 ? <FaSun /> : <FaMoon />}</button>
      {/* Fundo com Shader Gradient */}
      <BackgroundSG tema={tema} />
      {/* Seção com Minha foto */}
      <section className='w-full flex flex-col gap-5 items-center justify-center'>
        <img src={fotoMinha} alt="Matheus G Benevides" className='w-2/12 rounded-full border-5 border-white/10 shadow-2xl' />
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
