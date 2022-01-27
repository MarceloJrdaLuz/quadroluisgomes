import { MesString } from "../functions/meses";
import Label from "./Label";

interface InputProps {
    tipo: string
    placeholder: string
    onChange?: any
    name?: string
    readonly?: boolean
    mes?: () =>  number
}

export default function Input(props: InputProps) {

    return (
        <div className="outline relative rounded-lg border-2 border-black focus-within:border-teste-200 outline-none my-2">
            <input
                onChange={props.onChange}
                type={props.tipo}
                 name={props.name}
                placeholder={props.mes ? `${MesString(props.mes())}` : " "} className="block p-4 w-full  text-xl
             text-black appearance-none placeholder-black focus:outline-none bg-transparent" 
                readOnly={props.readonly}
                autoComplete="off"
            />
            <Label texto={props.placeholder} />
        </div>
    )
}   