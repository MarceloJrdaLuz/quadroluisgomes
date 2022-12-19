import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import GeradorPdf from "../components/GeradorPdf";
import LayoutPrincipal from "../components/LayoutPrincipal";
import { meses } from "../functions/meses";
import HeadComponent from "../components/HeadComponent";
import loading from '../components/Icons/loading-menor.gif'
import Image from "next/image";


export default function Cartas() {

    const [pdfShow, setPdfShow] = useState(false)

    const [visivel, setVisivel] = useState(false) //

    const [visivelCartas, setVisivelCartas] = useState(false) //

    const [item, setItem] = useState<'' | 'Carta1' | 'Carta2' | 'Assembleias' | 'Congresso' | 'Visita'>('')

    const [rotate, setRotate] = useState(0)

    const [cartas, setCartas] = useState([])

    const [mapCartasConcluido, setMapCartasConcluido] = useState(false)

    useEffect(() => {
        const dados = fetch('https://painelluisgomes.vercel.app/posts')
            .then(res => res.json())
            .then(posts => {
                posts.length > 0 && posts.forEach(post => {
                    post.name.includes('Carta') && setCartas((rest) => [...rest, post])
                })
            })
            .catch(error => console.log(error))
    }, [])

    function exibirCartas() {
        return (
            <div className="flex justify-between w-full md:w-4/5">
                {cartas.length > 0 ? cartas.map(obj =>
                (
                    <Botao key={obj.name} onClick={() => { setItem(obj.name.replace('.pdf', '')), setPdfShow(true), setRotate(0) }} texto={obj.name.replace('.pdf', '')} />
                )
                ) : (
                    <div className="flex flex-1 justify-center items-center text-center">
                        {/* <Image layout="fill" src={loading} alt="Gif de carregamento"></Image> */}
                        <span className="flex justify-center items-center text-teste-100 text-lg font-bold px-20 w-4/5">{`Nenhuma carta disponível no mês de ${meses[new Date().getMonth()]}` }</span>
                    </div>
                )}
            </div>
        )
    }


    function renderizarPdf(item?: string) {
        return (
            <GeradorPdf nomeArquivo={item} rotate={rotate} setPdfShow={setPdfShow} />
        )
    }

    function renderizarBotoesEventos() {
        return (
            <div className="flex justify-between w-full md:w-4/5">
                <Botao onClick={() => { setItem('Assembleias'), setPdfShow(true), setRotate(90) }} texto='Assembleias' />

                <Botao onClick={() => { setItem('Congresso'), setPdfShow(true) }} texto='Congresso' />

                <Botao onClick={() => { setItem('Visita'), setPdfShow(true), setRotate(90) }} texto='Visita do SC' />
            </div>
        )
    }
    return !pdfShow ? (
        <>
            <HeadComponent title="Cartas" urlMiniatura="https://bituruna.netlify.app/images/cartas.jpg" />
            <LayoutPrincipal textoHeader="Cartas" heightConteudo={'1/2'} header className="bg-cartas bg-left-bottom bg-cover lg:bg-right">
                <div className="linha bg-gray-500 mt-2 w-full h-0.5 md:w-4/5"></div>

                <Botao texto={`Cartas do mês de ${meses[new Date().getMonth()]}`} onClick={() => { setVisivelCartas(true), setVisivel(false) }} />

                {visivelCartas ? exibirCartas() : null}

                <Botao texto={`Eventos Especiais`} onClick={() => { setVisivel(true), renderizarBotoesEventos(), setVisivelCartas(false) }} />

                {visivel ? renderizarBotoesEventos() : null}

                <Botao href='/' texto='Voltar' />
            </LayoutPrincipal>
        </>
    ) : (
        renderizarPdf(item)
    )
}