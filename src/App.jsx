import BackgroundSG from './components/BackgroundSG'
import fotoMinha from './assets/225765876.jpg'
import Card from './components/Card'
import { FaSun, FaMoon, FaGithub, FaNodeJs } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { BsInstagram, BsPinMapFill, BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SiDjango, SiExpress, SiReact } from 'react-icons/si'

function App() {
  //Tera o valor inicial salvo no localStorage (isso aq deu um BO para resolver pq eu n fazia ideia q so retornava String) ou false (tema escuro no caso)
  const [tema, setTema] = useState(() => { return localStorage.getItem("tema_portifolio") === "true" || false });
  //Quando o estado de "tema" for alterado ele salvará localStorage
  useEffect(() => {
    localStorage.setItem("tema_portifolio", tema)
  }, [tema])

  const styleLinks = "flex w-fit items-center gap-5 text-white transition-all duration-500 ease-in-out font-bold hover:underline hover:text-violet-300 text-sm md:text-lg"

  return (
    <>
      {/* Fundo com Shader Gradient */}
      < BackgroundSG tema={tema} />
      < main className="min-h-screen w-full flex flex-col items-center justify-center gap-20 py-10 overflow-auto" >
        {/* Btn de mudar tema */}
        < button className='cursor-pointer text-2xl hover:bg-white/50 transition-all duration-500 ease-in-out hover:scale-110 rounded-lg bg-white/20 border-1 border-white/25 p-2 fixed top-5 right-5 text-white' onClick={() => { setTema(!tema) }
        }> {tema == false ? <FaMoon /> : <FaSun />}</button >
        {/* Seção com Minha foto */}
        < section className='w-full flex flex-col gap-5 mt-25 mb-15 items-center justify-center' >
          <img src={fotoMinha} alt="Matheus G Benevides" className='w-4/12 md:w-2/12 max-w-50 rounded-full border-5 border-white/10 shadow-2xl' />
          <p className='italic font-bold text-xl text-white'>Matheus G Benevides</p>
        </section >
        {/* Seção Sobre Mim */}
        <section className='w-11/12 bg-white/25 rounded-lg flex flex-col gap-5 items-center py-10 overflow-auto'>
          <h2 className='text-white text-2xl w-full text-center'>Sobre Mim</h2>
          <div className='w-11/12 gap-5'>
            <p>Eu sou Matheus Gonçalves Benevides, tenho {2026 - 2006} anos de idade, estudo a área desde 2024, atualmente curso <strong className='text-violet-300'>Sistemas das Informação</strong> e também curso Técnico em <strong className='text-violet-300'>Desenvolvimento de Sistemas</strong>.</p>
            <h3>Algumas Linguagens/Frameworks que pretendo estudar até o fim do ano:</h3>
            <ul className='flex flex-col px-4'>
              <li className='flex items-center gap-5' ><FaNodeJs className='text-2xl text-emerald-500' />Node.js</li>
              <li className='flex items-center gap-5' ><SiExpress className='text-2xl text-black' />Express.js</li>
              <li className='flex items-center gap-5' ><SiDjango className='text-2xl text-emerald-400' />Django</li>
              <li className='flex items-center gap-5' ><SiReact className='text-2xl text-sky-400' />React Native</li>
            </ul>
          </div>
        </section>
        <section className='bg-white/20 flex w-11/12 py-10 rounded-lg flex-col gap-10 items-center'>
          {/*Seção de Skills*/}
          < section className='w-11/12 p-5 rounded-lg flex flex-wrap gap-5 items-center justify-around' >
            <h1 className='w-full text-center text-2xl text-white'>Habilidades</h1>
            <div className='w-full flex flex-wrap gap-5 items-center'>
              <Card titulo='Frontend' />
              <Card titulo='Backend' />
            </div>
            <Card titulo='Ferramentas' />
          </section >
          {/*Seção Contatos*/}
          <section className='w-11/12 p-5 rounded-lg gap-5 flex flex-col justify-center'>
            <h1 className='w-full text-center text-2xl text-white'>Contatos</h1>
            <div className='w-full bg-white/25 border-1 border-white/25 p-5 gap-5 rounded-lg flex flex-col overflow-auto'>
              <a href="https://instagram.com/mth.benevides" target='_blank' className={styleLinks}><BsInstagram className='text-pink-500 text-2xl' /> @mth.benevides</a>
              <a href="https://wa.me/5517991389495" target='_blank' className={styleLinks}><BsWhatsapp className='text-emerald-500 text-2xl' /> +55 (17) 99138-9495</a>
              <a href="mailto:matheusgoncalvesbenevides@gmail.com" target='_blank' className={styleLinks}><MdEmail className='text-blue-500 text-2xl' />matheusgoncalvesbenevides@gmail.com</a>
              <a href="https://github.com/mathgb10" target='_blank' className={styleLinks}><FaGithub className="text-2xl" />@mathgb10</a>
              <a href="" target='_blank' className={styleLinks}><BsPinMapFill className="text-2xl text-red-500" />Votuporanga, SP</a>
            </div>
          </section>
        </section>

      </main >
    </>
  )
}

export default App
