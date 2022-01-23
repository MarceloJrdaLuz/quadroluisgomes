import { useState } from "react";
import Botao from "../components/Botao";
import LayoutPrincipal from "../components/LayoutPrincipal";
import DateConverter, { tresMesesProgramacao } from "../functions/meses";
import GeradorPdf from "../components/GeradorPdf";

export default function Designacoes() {

    const [pdfShow, setPdfShow] = useState(false) //aqui define se o pdf vai ser renderizado ou se vai ser o layout

    const [opcao, setOpcao] = useState<'meiodesemana'| 'fimdesemana' | ''>('') // aqui define o caminho que ele vai acessar para chegar no pdf ou da reuniao do meio de semana ou do fim de semana

    const [pdfMes, setPdfMes] = useState('') // define o mes que vai ser gerado o pdf

    const [visivel, setVisivel] = useState(false) // mostrar ou nao mostrar opções dos meses da programação

    let tresMeses = false

    if (new Date().getDate() <= 6 && new Date().getDay() <= 4) {
        tresMeses = tresMesesProgramacao()
    }

    function renderizarPdf(opcao: string) {
        return (
            <GeradorPdf caminho={opcao} mes={pdfMes} />
        )
    }


    function renderizarBotoes() {
        return tresMeses ? (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao onClick={() => {setOpcao('meiodesemana'), setPdfShow(true), setPdfMes(`${DateConverter('mes-1')}`) }} texto={`${DateConverter('mes-1')}`} />

                <Botao onClick={() => {setOpcao('meiodesemana'), setPdfShow(true), setPdfMes(`${DateConverter('mes')}`) }} texto={`${DateConverter('mes')}`} />

                <Botao onClick={() => {setOpcao('meiodesemana'), setPdfShow(true), setPdfMes(`${DateConverter('mes+1')}`) }} texto={`${DateConverter('mes+1')}`} />
            </div>
        ) : (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao onClick={() => {setOpcao('meiodesemana'), setPdfShow(true), setPdfMes(`${DateConverter('mes')}`) }} texto={`${DateConverter('mes')}`} />

                <Botao onClick={() => {setOpcao('meiodesemana'), setPdfShow(true), setPdfMes(`${DateConverter('mes+1')}`) }} texto={`${DateConverter('mes+1')}`} />
            </div>
        )
    }

    return !pdfShow ? (

        <LayoutPrincipal className='bg-designacoes bg-center bg-cover'>
            <Botao
                onClick={() => setVisivel(true)}
                texto='Vida e Ministério'
            />

            {visivel ? renderizarBotoes() : null}
            {!visivel ? <p className="font-bold">Quinta-feira às 19:30hrs</p> : null}

            <Botao
                onClick={()=> {setOpcao('fimdesemana'), setPdfMes(`${DateConverter('mes')}`), setPdfShow(true)}}
                texto='Reunião Pública'
            />
            {<p className="font-bold">Domingo às 09:30hrs</p>}
            <Botao href='/' texto='Voltar' />
        </LayoutPrincipal>
    ) : (
        renderizarPdf(opcao)
    )
}