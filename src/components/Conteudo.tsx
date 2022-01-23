
export default function ConteudoInicio (props){
    return(
        <div className="conteudo flex flex-col h-1/2 p-3 justify-around items-center">
            {props.children}
        </div>
    )
}