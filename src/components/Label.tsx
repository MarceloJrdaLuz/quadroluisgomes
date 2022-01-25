interface LabelProps {
    texto: string
}

export default function Label(props: LabelProps) {
    return (
        <label className="rounded-lg bg-gray-200 absolute top-0 p-4 text-lg -z-1 duration-300 origin-0">{props.texto}</label>
        )
}