import useValidar from "../data/hooks/useValidar";
import { MesString } from "../functions/meses";
import Label from "./Label";

interface InputProps {
    tipo: string
    placeholder: string
    onChange?: any
    name?: string
    readonly?: boolean
    mes?:  number | null
    required?: boolean
    invalido?: string
    focus?: any
}

export default function Input(props: InputProps) {
    
    const {
        inputHorasInvalido,
        inputNomeInvalido,
        setInputNomeInvalido,
        setInputHorasInvalido
    } = useValidar()

    return (
        <div className={`${props.readonly ? 'focus-within:border-black' : 'outline' } relative rounded-lg border-2 ${props.invalido === 'invalido' ? 'border-red-700': 'border-black'} focus-within:border-teste-200 outline-none my-2 `}>
            <input
                onChange={props.onChange}
                type={props.tipo}
                name={props.name}
                placeholder={props.mes >=0 ? `${MesString(props.mes)}` : " "} className={`block p-4 w-full  text-xl
                text-black appearance-none placeholder-black focus:outline-none bg-transparent read-only:bg-gray-300 read-only:rounded-lg`}
                readOnly={props.readonly}
                autoComplete="off"
                required = {props.required}
                ref={props.focus}
            />
            <Label invalido={props.invalido === 'invalido' ? true : false} texto={props.placeholder} readonly={props.readonly} />
        </div>
    )
}   