import { useState } from "react";
import Botao from "../components/Botao";
import LayoutPrincipal from "../components/LayoutPrincipal";
import DateConverter, { tresMesesProgramacao } from "../functions/meses";
import GeradorPdf from "../components/GeradorPdf";

export default function Designacoes() {

    const[pdfShow, setPdfShow] = useState(false)

    const [pdfMes, setPdfMes] = useState('')

    const [visivel, setVisivel] = useState(false)

    let tresMeses = false

    if(new Date().getDate() <=6 && new Date().getDay() <=4){
        tresMeses = tresMesesProgramacao()
    }

    function renderizarPdf(){
        return(
            <GeradorPdf mes={pdfMes}/>
        )
    }
    

    function renderizarBotoes() {
        return tresMeses ? (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao onClick={() =>{setPdfShow(true), setPdfMes(`${DateConverter('mes-1')}`)}} texto={`${DateConverter('mes-1')}`}/>
                <Botao onClick={() =>{setPdfShow(true), setPdfMes(`${DateConverter('mes')}`)}} texto={`${DateConverter('mes')}`} />
                <Botao onClick={() =>{setPdfShow(true), setPdfMes(`${DateConverter('mes+1')}`)}} texto={`${DateConverter('mes+1')}`} />
            </div>
        ) : (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao onClick={() =>{setPdfShow(true), setPdfMes(`${DateConverter('mes')}`)}} texto={`${DateConverter('mes')}`} />
                <Botao onClick={() =>{setPdfShow(true), setPdfMes(`${DateConverter('mes+1')}`)}} texto={`${DateConverter('mes+1')}`} />
            </div>
        )
    }

    return !pdfShow ? (

        <LayoutPrincipal>
            <Botao
                onClick={() => setVisivel(true)}
                texto='Vida e Ministério'
            />

            {visivel ? renderizarBotoes() : null}
            {!visivel ? <p className="font-bold">Quinta-feira às 19:30hrs</p> : null}

            <Botao
                texto='Reunião Pública'
            />
                {<p className="font-bold">Domingo às 09:30hrs</p>}
            <Botao href='/' texto='Voltar' />
        </LayoutPrincipal>
    ) : (
        renderizarPdf()
    )
}