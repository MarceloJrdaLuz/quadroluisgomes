interface TextoHeaderProps{
    texto: string
    children?: any
}

export default function TextoHeader(props: TextoHeaderProps){
    return(
        <div className={`flex`}>
            <h1>{props.texto}</h1>
        </div>
    )
}