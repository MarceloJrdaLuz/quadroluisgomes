import Label from "./Label";

interface InputProps {
    tipo: string
    placeholder: string
}

export default function Input(props: InputProps) {
    return (
        <div className="outline relative rounded-lg border-2 border-black focus-within:border-teste-200 outline-none m-2">
            <input type="text" name="username" placeholder=" " className="block p-4 w-full  text-lg text-black appearance-none  focus:outline-none bg-transparent" />
            <Label texto={props.placeholder}/>
        </div>
    )
}   