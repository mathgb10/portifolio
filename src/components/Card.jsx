import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri"
import { SiPhp } from "react-icons/si"
import { VscTerminalBash } from "react-icons/vsc"

export default function Card(props) {

    const styleIcon = "font-bold text-3xl"
    const styleTxt = "flex justify-between w-full font-light text-xl"

    const FrontendTech = [{ id: 1, tech: "React", icon: <FaReact className={styleIcon + " text-sky-500"} /> }, { id: 2, tech: "TailwindCSS", icon: <RiTailwindCssFill className={styleIcon + " text-sky-400"} /> }, { id: 3, tech: "JavaScript", icon: <RiJavascriptFill className={styleIcon + " text-amber-400"} /> }, { id: 4, tech: "HTML5", icon: <FaHtml5 className={styleIcon + " text-orange-500"} /> }, { id: 5, tech: "CSS3", icon: <FaCss3Alt className={styleIcon + " text-blue-500"} /> }]
    const BackendTech = [{ id: 1, tech: "PHP", icon: <SiPhp className={styleIcon + " text-blue-300"} /> }, { id: 2, tech: "MySQL", icon: <GrMysql className={styleIcon + " text-sky-700"} /> }]
    const FerramentasTech = [{ id: 1, tech: "Git", icon: <FaGitAlt className={styleIcon + " text-orange-600"} /> }, { id: 2, tech: "GitHub", icon: <FaGithub className={styleIcon} /> }, { id: 3, tech: "Bash", icon: <VscTerminalBash className={styleIcon} /> }]
    const CertificadosTech = [{ id: 1, certificado: "Administração de Sistemas ServiceNow" }, { id: 2, certificado: "Desenvolvimento em JavaScript" }, { id: 3, certificado: "Implantação de Serviços em Nuvem - Microsoft AZ-90" }, { id: 4, certificado: "Programação Oracle - Java" }, { id: 5, certificado: "IA Generativas Aplicada a Programação" }, { id: 6, certificado: "Ética na IA" }, { id: 7, certificado: "Fundamentos da IA" }]

    return (
        <div className='flex-1 min-w-77 min-h-50 border-1 p-3 border-white/25 rounded-lg bg-white/15 backdrop-blur-4xl transition-all duration-700 ease-in-out hover:bg-white/35 hover:border-white/50 hover:scale-105 hover:shadow-2xl'>
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
                {
                    props.titulo == "Experiências" && <p>Facchini - Infraestrutura e Redes</p>
                }
                {
                    props.titulo == "Certificações" && CertificadosTech.map((m) => (
                        <p key={m.id} className={styleTxt}>{m.certificado}</p>
                    ))
                }
            </div>
        </div>
    )
}