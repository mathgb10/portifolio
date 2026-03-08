import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri"
import { SiPhp } from "react-icons/si"
import { VscTerminalBash } from "react-icons/vsc"

export default function Card(props) {

    const styleIcon = "font-bold text-3xl"
    const styleTxt = "flex justify-between w-full font-light text-xl"

    const FrontendTech = [{ id: 1, tech: "React", icon: <FaReact className={styleIcon} /> }, { id: 2, tech: "TailwindCSS", icon: <RiTailwindCssFill className={styleIcon} /> }, { id: 3, tech: "JavaScript", icon: <RiJavascriptFill className={styleIcon} /> }, { id: 4, tech: "HTML5", icon: <FaHtml5 className={styleIcon} /> }, { id: 5, tech: "CSS3", icon: <FaCss3Alt className={styleIcon} /> }]
    const BackendTech = [{ id: 1, tech: "PHP", icon: <SiPhp className={styleIcon} /> }, { id: 2, tech: "MySQL", icon: <GrMysql className={styleIcon} /> }]
    const FerramentasTech = [{ id: 1, tech: "Git", icon: <FaGitAlt className={styleIcon} /> }, { id: 2, tech: "GitHub", icon: <FaGithub className={styleIcon} /> }, { id: 3, tech: "Bash", icon: <VscTerminalBash className={styleIcon} /> }]

    return (
        <div className='flex-1 min-w-80 min-h-50 border-1 p-3 border-white/25 rounded-lg bg-white/15 backdrop-blur-4xl transition-all duration-700 ease-in-out hover:bg-white/35 hover:border-white/50 hover:scale-105 hover:shadow-2xl'>
            <div className='w-full font-bold text-xl text-white'>
                <h3>{props.titulo}</h3>
            </div>
            <div>
                {
                    props.titulo == 'Frontend' && FrontendTech.map((m) => (
                        <p key={m.id} className={styleTxt}>{m.tech}{m.icon}</p>
                    ))
                }
                {
                    props.titulo == "Backend" && BackendTech.map((m) => (
                        <p key={m.id} className={styleTxt}>{m.tech}{m.icon}</p>
                    ))
                }
                {
                    props.titulo == "Ferramentas" && FerramentasTech.map((m) => (
                        <p key={m.id} className={styleTxt}>{m.tech}{m.icon}</p>
                    ))
                }
            </div>
        </div>
    )
}