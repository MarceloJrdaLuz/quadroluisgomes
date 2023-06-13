import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import LayoutPrincipal from "../components/LayoutPrincipal";
import DateConverter, { tresMesesProgramacao } from "../functions/meses";
import GeradorPdf from "../components/GeradorPdf";
import usePdfShow from "../data/hooks/usePdfShow";
import HeadComponent from "../components/HeadComponent";
import { api } from "../services/api";

export interface DataTypes {
    _id: string
    name: string
    key: string
    url: string
}

export default function Designacoes() {
    useEffect(() => {
        api.get('/posts').then(res => {
            const data: DataTypes[] = res.data
            const filter = data.sort(function(x, y) {
                let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();

                return a === b ? 0 : a > b ? 1 : -1
            })

            console.log(filter)
        })


    }, [])

    const { pdfShow, setPdfShow } = usePdfShow()  //aqui define se o pdf vai ser renderizado ou se vai ser o layout

    const [opcao, setOpcao] = useState('') // aqui define o caminho que ele vai acessar para chegar no pdf ou da reuniao do meio de semana ou do fim de semana

    const [visivel, setVisivel] = useState(false) // mostrar ou nao mostrar opções dos meses da programação

    let tresMeses = false

    if (new Date().getDate() <= 6 && new Date().getDay() <= 4) {
        tresMeses = tresMesesProgramacao()
    }

    function renderizarPdf(opcao: string) {
        return (
            <GeradorPdf nomeArquivo={opcao} setPdfShow={setPdfShow} />
        )
    }


    function renderizarBotoes() {
        return tresMeses ? (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao onClick={() => { setPdfShow(true), setOpcao(`${DateConverter('mes-1')}`) }} texto={`${DateConverter('mes-1')}`} />

                <Botao onClick={() => { setPdfShow(true), setOpcao(`${DateConverter('mes')}`) }} texto={`${DateConverter('mes')}`} />

                <Botao onClick={() => { setPdfShow(true), setOpcao(`${DateConverter('mes+1')}`) }} texto={`${DateConverter('mes+1')}`} />
            </div>
        ) : (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao onClick={() => { setPdfShow(true), setOpcao(`${DateConverter('mes')}`) }} texto={`${DateConverter('mes')}`} />

                <Botao onClick={() => { setPdfShow(true), setOpcao(`${DateConverter('mes+1')}`) }} texto={`${DateConverter('mes+1')}`} />
            </div>
        )
    }

    return !pdfShow ? (
        <>
            <HeadComponent title="Designações" urlMiniatura="https://luisgomes.netlify.app/images/designacoes.png" />
            <LayoutPrincipal textoHeader="Designações Semanais" heightConteudo={'1/2'} header className='bg-designacoes bg-center bg-cover'>
                <Botao
                    onClick={() => setVisivel(true)}
                    texto='Vida e Ministério'
                />

                {visivel ? renderizarBotoes() : null}
                {!visivel ? <p className="font-bold  text-xl">Quarta-feira às 19:00 hrs</p> : null}

                <Botao
                    onClick={() => { setOpcao('Publica'), setPdfShow(true) }}
                    texto='Reunião Pública'
                />
                {<p className="font-bold text-xl">Sábado às 18:00 hrs</p>}
                <Botao href='/' texto='Voltar' />
            </LayoutPrincipal>
        </>
    ) : (
        renderizarPdf(opcao)
    )
}