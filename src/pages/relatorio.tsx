import Link from "next/link";
import Conteudo from "../components/Conteudo";
import { IconeSeta } from "../components/Icons/Icons";
import LayoutPrincipal from "../components/LayoutPrincipal";
import RelatorioForm from "../components/RelatorioForm";

export default function Relatorio() {
    return (
        <LayoutPrincipal bgFundo={'bg-teste-100'} heightConteudo="auto">
                <Link href={'/'}>
                    <div className="absolute top-10 left-11 rounded-full bg-teste-200 p-2 hover:border hover:border-teste-100">
                        {IconeSeta}
                    </div>
                </Link>
                <RelatorioForm/>
        </LayoutPrincipal>

    )
} 