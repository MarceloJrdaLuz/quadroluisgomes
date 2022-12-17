import Conteudo from "./Conteudo";
import Footer from "./Footer";
import Header from "./Header";
import TextoHeader from "./TextoHeader";

interface LayoutPrincipalProps {
    children?: any
    className?: string
    header?: boolean
    heightConteudo?: string
    bgFundo?: string
    textoHeader?: string
}

export default function LayoutPrincipal(props: LayoutPrincipalProps) {

    return (
        <div className={`layout relative shadow shadow-gray-600  bg-gray-200 h-screen w-screen flex flex-col md:w-screen md:m-auto lg:w-screen lg:shadow-none`}>
            {!props.header ? null : <Header className={props.className} texto={props.textoHeader}></Header>}
            <Conteudo bgFundo={props.bgFundo} hConteudo={props.heightConteudo}>
                {props.children}
            </Conteudo>

            <Footer ano={new Date().getFullYear()} nomeCongregacao="Congregação Luis Gomes - PB-04" aviso="Atenção: favor não compartilhar acesso ao site para outros que não pertencem à congregação" />
        </div>
    )
}