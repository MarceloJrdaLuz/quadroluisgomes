import { useState } from "react";
import Botao from "../components/Botao";
import LayoutPrincipal from "../components/LayoutPrincipal";
import DateConverter, { tresMesesProgramacao } from "../components/functions/meses";

export default function Limpeza() {

    //testes 

    const diaHoje = 6
    const diaSemana = 5

    //-------------///

    const [visivel, setVisivel] = useState(false)

    let tresMeses = false

    if(new Date().getDate() <=6 && new Date().getDay() <=4){
        tresMeses = tresMesesProgramacao()
    }

    

    function renderizarBotoes() {
        return tresMeses ? (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao texto={`${DateConverter('mes-1')}`}/>
                <Botao texto={`${DateConverter('mes')}`} />
                <Botao texto={`${DateConverter('mes+1')}`} />
            </div>
        ) : (
            <div className="flex justify-between w-full md:w-4/5 ">
                <Botao texto={`${DateConverter('mes')}`} />
                <Botao texto={`${DateConverter('mes+1')}`} />
            </div>
        )
    }

    return (
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
    )
}