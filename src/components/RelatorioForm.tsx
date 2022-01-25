import Input from "./Input";
import Label from "./Label";

export default function RelatorioForm() {
    return (
        <div className="px-4 w-full flex flex-col border-2 rounded-xl bg-gray-200">
            <h1 className="mt-2 flex justify-center text-3xl font-semibold">Relatório</h1>
            <form className="flex flex-col  p-3">
                <Input placeholder="Nome" tipo='text' />
                <Input placeholder="Mês" tipo='text' />
                <Input placeholder="Publicações" tipo='number' />
                <Input placeholder="Vídeos" tipo='number' />
                <Input placeholder="Horas" tipo='number' />
                <Input placeholder="Revisitas" tipo='number' />
                <Input placeholder="Estudos" tipo='number' />
                <Input placeholder="Observações" tipo='text' />
                {/* <div className="outline relative rounded-lg border-2 border-black focus-within:border-teste-200 outline-none">
                    <input type="text" name="" placeholder=" " className="block p-4 w-full  text-lg text-black appearance-none  focus:outline-none bg-transparent" />
                    <label className="rounded-lg bg-gray-200 absolute top-0 p-4 text-lg -z-1 right-0 duration-300 origin-0">Username</label>
                </div> */}
            </form>
        </div>
    )
}