/**TO DO:
 * Fazer o resto dos gráficos
 * 
 * */
let arrayTempDentro = [];
let arrayTempFora = [];
let arrayUmidDentro = [];
let arrayUmidFora = [];
let arraytimeStamp = [];


function transformaEmArray(){
    for(let i=0; i<arrayOfObjects.length; i++){
        arrayTempDentro[i]=arrayOfObjects[i].tempDentro;
        arrayTempFora[i]=arrayOfObjects[i].tempFora;
        arrayUmidDentro[i]=arrayOfObjects[i].umidDentro;
        arrayUmidFora[i]=arrayOfObjects[i].umidFora;
        arraytimeStamp[i]=arrayOfObjects[i].timeStamp;
    }
}

function transformaEmHoras(){
    let horario = (document.getElementById("horario").value).split(":");
    let horarioEmMin = (parseInt(horario[0])*60)+ parseInt(horario[1]);
    let horarioEmMinAtual = [];
    for(let i=0;i<arraytimeStamp.length;i++){
        horarioEmMinAtual[i] = arraytimeStamp[i]+horarioEmMin;
        arraytimeStamp[i]= (Math.floor((horarioEmMinAtual[i])/60))+":"+((horarioEmMinAtual[i])%60)
    }
}

function criaGraficoLtempDentroXtempFora(){
    const canvas = document.getElementById("graficoLtempDentroXtempFora");
    const grafico = new Chart(canvas, {
        type: 'line',
        data: {
            labels: arraytimeStamp,       
            datasets: [
                {
                    label: 'Temperatura Interior',
                    data: arrayTempDentro
                },
                {
                    label: 'Temperatura Exterior', 
                    data: arrayTempFora   
                }
            ]
        }
    });
}