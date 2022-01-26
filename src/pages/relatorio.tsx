import Conteudo from "../components/Conteudo";
import LayoutPrincipal from "../components/LayoutPrincipal";
import RelatorioForm from "../components/RelatorioForm";

export default function Relatorio() {
    return (
        <LayoutPrincipal bgFundo={'bg-teste-100'} heightConteudo="auto">
                <RelatorioForm/>
        </LayoutPrincipal>

    )
}