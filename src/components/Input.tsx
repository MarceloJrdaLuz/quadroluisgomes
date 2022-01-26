import Label from "./Label";

interface InputProps {
    tipo: string
    placeholder: string
    onChange?: any
    name?: string
}

export default function Input(props: InputProps) {

    return (
        <div className="outline relative rounded-lg border-2 border-black focus-within:border-teste-200 outline-none my-2">
            <input
                onChange={props.onChange}
                type="text" name={props.name}
                placeholder=" " className="block p-4 w-full  text-xl
             text-black appearance-none  focus:outline-none bg-transparent"
            />
            <Label texto={props.placeholder} />
        </div>
    )
}   