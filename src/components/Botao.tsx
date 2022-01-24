import Link from "next/link";

interface BotaoProps {
    texto: string | Date 
    href?: string
    onClick?: any
    alternarPdfShow?:  () => void
    alterarCategoria?: (e:any) => any
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button  className={`
                bg-[rgb(13,106,134)] my-1  hover:bg-cyan-950 w-full rounded-md h-10  
                text-white text-xl
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