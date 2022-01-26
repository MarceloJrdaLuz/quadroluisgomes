import Link from "next/link";
import { useState } from "react";
import Botao from "./Botao";
import { IconeWhats } from "./Icons/Icons";
import Input from "./Input";



export default function RelatorioForm() {


    const [btnEnvio, setBtnEnvio] = useState(false)
    const [nome, setNome] = useState('')
    const [mes, setmes] = useState('')
    const [publicacoes, setPublicacoes] = useState(0)
    const [videos, setVideos] = useState(0)
    const [horas, setHoras] = useState(0)
    const [revisitas, setRevisitas] = useState(0)
    const [estudos, setEstudos] = useState(0)
    const [observacoes, setObservacoes] = useState('')

    function renderizarBotoesEnvio() {

        return btnEnvio ? (
            <div className="flex ">
                <div className="flex w-full h-16">
                        <a href={`https://api.whatsapp.com/send?phone=5542998675557&text=*Publicador:*%20${nome}%0A%0A*Mês:*%20${mes}%0A%0A*Publicações:*%20${publicacoes}%0A*Vídeos:*%20${videos}%0A*Horas:*%20${horas}%0A*Revisitas:*%20${revisitas}%0A*Estudos:*%20${estudos}%0A%0A*Observações:*%20${observacoes}`} className="flex justify-center items-center bg-teste-200 my-1  hover:bg-teste-200  w-full rounded-md
                                text-black text-base
                                 font-medium md:w-4/5 md:m-1 auto hover:-translate-x-1
                                 mx-1 hover:border-2 hover:border-black
                                 ">
                            <span>Marcelo</span>
                            <span className="ml-2">{IconeWhats}</span>
                        </a>

                    <Link href={`https://api.whatsapp.com/send?phone=556681420394&text=*Publicador:*%20${nome}%0A%0A*Mês:*%20${mes}%0A%0A*Publicações:*%20${publicacoes}%0A*Vídeos:*%20${videos}%0A*Horas:*%20${horas}%0A*Revisitas:*%20${revisitas}%0A*Estudos:*%20${estudos}%0A%0A*Observações:*%20${observacoes}`}>
                        <button className="flex justify-center items-center bg-teste-200 my-1  hover:bg-teste-200  w-full rounded-md
                        text-black text-base
                         font-medium md:w-4/5 md:m-1 auto hover:-translate-x-1
                         mx-1 hover:border-2 hover:border-black ">
                            <span>Paulo</span>
                            <span className="ml-2">{IconeWhats}</span>
                        </button>
                    </Link>
                </div>
            </div>
        ) : null
    }
    return (
        <div className="px-4 w-full flex flex-col border-2 rounded-xl bg-gray-200">
            <h1 className="my-4 flex justify-center text-3xl font-semibold">Relatório</h1>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col  p-3">
                <Input name="nome" placeholder="Nome" tipo='text' onChange={({ target: { value } }) => setNome(value)} />
                <Input name="mes" placeholder="Mês" tipo='text' onChange={({ target: { value } }) => setmes(value)} />
                <Input name="publicacoes" placeholder="Publicações" tipo='number' onChange={({ target: { value } }) => setPublicacoes(value)} />
                <Input name="videos" placeholder="Vídeos" tipo='number' onChange={({ target: { value } }) => setVideos(value)} />
                <Input name="horas" placeholder="Horas" tipo='number' onChange={({ target: { value } }) => setHoras(value)} />
                <Input name="revisitas" placeholder="Revisitas" tipo='number' onChange={({ target: { value } }) => setRevisitas(value)} />
                <Input name="estudos" placeholder="Estudos" tipo='number' onChange={({ target: { value } }) => setEstudos(value)} />
                <Input name="observacoes" placeholder="Observações" tipo='text' onChange={({ target: { value } }) => setObservacoes(value)} />

                <div className="mt-6 w-full flex">
                    <Botao
                        height={'h-16'}
                        texto={'Enviar'}
                        onClick={() => { console.log(nome, mes, publicacoes, videos, horas, revisitas, estudos, observacoes), setBtnEnvio(true), renderizarBotoesEnvio }}
                        className="hover:border-2 hover:border-black hover:-translate-y-1"
                    />
                </div>
                {renderizarBotoesEnvio()}

            </form>
        </div>
    )
}