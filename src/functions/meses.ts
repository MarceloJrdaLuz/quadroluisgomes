export const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio','Junho', 'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro','Dezembro'];


export default function DateConverter (opcao: string){
    const mesCapturado = new Date().getMonth()
    switch(opcao){
        case 'mes': return meses[mesCapturado];
        case 'mes-1': 
            return mesCapturado === 0 ? meses[mesCapturado+11] : meses[mesCapturado-1];
        case 'mes+1':
            return mesCapturado === 11 ? meses[mesCapturado-11] : meses[mesCapturado+1];   
    }   
}

export function tresMesesProgramacao(){
    const diaHoje = new Date().getDate()
    const diaSemanaAtual = new Date().getDay()
    const segunda = diaHoje - diaSemanaAtual+1
    console.log(segunda)
    return segunda <= 0 ? true : false
}

export function MesString(mes: number){
    const diaAtual = new Date().getDate()
    return diaAtual >=30 ?  meses[mes+1] : meses[mes]
}