
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
    let horario = (document.getElementById("campoHorario").value).split(":");
    let horarioEmMin = (parseInt(horario[0])*60)+ parseInt(horario[1]);
    let horarioEmMinAtual = [];
    for(let i=0;i<arraytimeStamp.length;i++){
        horarioEmMinAtual[i] = arraytimeStamp[i]+horarioEmMin;
        arraytimeStamp[i]= (Math.floor((horarioEmMinAtual[i])/60))+":"+((horarioEmMinAtual[i])%60)
    }
}

function criaGraficoLinha(canvaHTML,eixoX, eixoY1, eixoY2, label1, label2){
    const canvas = document.getElementById(canvaHTML);
    const grafico = new Chart(canvas, {
        type: 'line',
        data: {
            labels: eixoX,       
            datasets: [
                {
                    label: label1,
                    data: eixoY1
                },
                {
                    label: label2, 
                    data: eixoY2   
                }
            ]
        }
    });
}

function criaGraficoBarra(canvaHTML,eixoX, eixoY1, eixoY2, label1, label2){
    const canvas = document.getElementById(canvaHTML);
    const grafico = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: eixoX,       
            datasets: [
                {
                    label: label1,
                    data: eixoY1
                },
                {
                    label: label2, 
                    data: eixoY2   
                }
            ]
        }
    });
}

function criaGraficoDesvios(){
    const canvas = document.getElementById("graficoBdesvios");
    const grafico = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ['Temp Interior', 'Temp Exterior', 'Umid Interior', 'Umid Exterior'],
            datasets: [
                {
                    label: "Desvio Padrão",
                    data: [desvio.DTempDentro, desvio.DTempFora, desvio.DUmidDentro, desvio.DUmidFora]
                }
            ]
        }
    })
}

function criaGraficos(){
    transformaEmArray();
    transformaEmHoras();
    criaGraficoLinha("graficoLtempDXtempF",arraytimeStamp,arrayTempDentro,arrayTempFora,
        "Temperatura Interna","Temperatura Externa");
    criaGraficoLinha("graficoLumidDXumidF",arraytimeStamp,arrayUmidDentro,arrayUmidFora,
        "Umidade Interna","Umidade Externa");
    criaGraficoLinha("graficoLtempDXumidD",arraytimeStamp,arrayTempDentro,arrayUmidDentro,
        "Temperatura Interna","Umidade Interna");
    criaGraficoLinha("graficoLtempFXumidF",arraytimeStamp,arrayTempFora,arrayUmidFora,
        "Temperatura Externa","Umidade Externa");
    criaGraficoBarra("graficoMediaBtempDXtempF","Médias",[medias.MdTempDentro],[medias.MdTempFora],
        "Média Temperatura Interna", "Média Temperatura Externa");
    criaGraficoBarra("graficoMediaBumidDXumidF","Médias",[medias.MdUmidDentro],[medias.MdUmidFora],
        "Média Umidade Interna","Média Umidade Externa");
    criaGraficoDesvios();
}