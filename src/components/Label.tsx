interface LabelProps {
    texto: string
    readonly?: boolean
    invalido?: boolean
}

export default function Label(props: LabelProps) {
    return (
        <label className={`rounded-lg font-semibold absolute top-0 p-4 text-lg ${props.invalido ? 'text-red-700 ': 'text-black'} -z-10 right-2 duration-300 origin-0 ${props.readonly ? 'bg-gray-300' : 'bg-gray-200'}`}>{props.texto}</label>)
}