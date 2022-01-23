import Link from "next/link";

interface BotaoProps {
    texto: string | Date 
    href?: string
    onClick?: any
    alternarPdfShow?:  () => void
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button  className={`
                bg-teal-600 my-1  hover:bg-teal-800 w-full rounded-md h-10  
                text-white text-lg
                 font-medium md:w-4/5 md:m-1 auto
                 mx-1
                `} onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : renderizarBotao()
}