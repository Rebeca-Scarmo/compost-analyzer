
let variancia = {};
let medias = {};
let desvio = {};
let minino = {};
let maximo = {};
let afastamento = {};
let covariancia = {};
let correlacao={};
function calculaMedia(){
    medias = {};
    let tempForaMd = 0;
    let tempDentroMd = 0;
    let umidDentroMd = 0;
    let umidForaMd = 0;
    for(let i=0; i<arrayOfObjects.length; i++){
        tempDentroMd += arrayOfObjects[i].tempDentro;
        tempForaMd += arrayOfObjects[i].tempFora;
        umidDentroMd += arrayOfObjects[i].umidDentro;
        umidForaMd += arrayOfObjects[i].umidFora;
    }
    medias = {
        MdTempDentro : tempDentroMd/arrayOfObjects.length,
        MdTempFora : tempForaMd/arrayOfObjects.length,
        MdUmidDentro : umidDentroMd/arrayOfObjects.length,
        MdUmidFora: umidForaMd/arrayOfObjects.length
    } 
   
}

function calculaVariancia(){
    variancia = {};
    let tempForaV = 0;
    let tempDentroV = 0;
    let umidForaV = 0;
    let umidDentroV = 0;
    for(let i=0; i<arrayOfObjects.length; i++){
        tempDentroV += (quadrado(arrayOfObjects[i].tempDentro - medias.MdTempDentro))
        tempForaV += (quadrado(arrayOfObjects[i].tempFora - medias.MdTempFora))
        umidForaV += (quadrado(arrayOfObjects[i].umidFora - medias.MdUmidFora))
        umidDentroV += (quadrado(arrayOfObjects[i].umidDentro - medias.MdUmidDentro))
    }
    variancia = {
        VtempFora: tempForaV/arrayOfObjects.length,
        VtempDentro: tempDentroV/arrayOfObjects.length,
        VumidFora: umidForaV/arrayOfObjects.length,
        VumidDentro: umidDentroV/arrayOfObjects.length
    }
}

function calculaDesvio(){
    desvio = {};
    desvio = {
        DTempFora: Math.sqrt(variancia.VtempFora),
        DTempDentro: Math.sqrt(variancia.VtempDentro),
        DUmidFora: Math.sqrt(variancia.VumidFora),
        DUmidDentro: Math.sqrt(variancia.VumidDentro)
    };
}

function quadrado(valor){
    return valor*valor;
}

function calculaMinimo(){
    minino = {};
    let tempForaMin;
    let tempDentroMin;
    let umidForaMin;
    let umidDentroMin;
    for(let i=0; i<arrayOfObjects.length; i++){
        if(i==0){
            tempForaMin = arrayOfObjects[i].tempFora;
            tempDentroMin = arrayOfObjects[i].tempDentro;
            umidForaMin = arrayOfObjects[i].umidFora;
            umidDentroMin = arrayOfObjects[i].umidDentro;
        }
        if(arrayOfObjects[i].tempFora < tempForaMin){
            tempForaMin = arrayOfObjects[i].tempFora;
        }
        if(arrayOfObjects[i].tempDentro < tempDentroMin){
            tempDentroMin = arrayOfObjects[i].tempDentro;
        }
        if(arrayOfObjects[i].umidFora < umidForaMin){
            umidForaMin = arrayOfObjects[i].umidFora;
        }
        if(arrayOfObjects[i].umidDentro < umidDentroMin){
            umidDentroMin = arrayOfObjects[i].umidDentro;
        }
    }
    minino = {
        MinTempFora: tempForaMin,
        MinTempDentro: tempDentroMin,
        MinUmidFora: umidForaMin,
        MinUmidDentro: umidDentroMin
    }
}

function calculaMaximo(){
    maximo = {};
    let tempForaMax;
    let tempDentroMax;
    let umidForaMax ;
    let umidDentroMax;
    for(let i=0; i<arrayOfObjects.length; i++){
        if(i==0){
            tempForaMax = arrayOfObjects[i].tempFora;
            tempDentroMax = arrayOfObjects[i].tempDentro;
            umidForaMax = arrayOfObjects[i].umidFora;
            umidDentroMax = arrayOfObjects[i].umidDentro;
        }
        if(arrayOfObjects[i].tempFora > tempForaMax){
            tempForaMax = arrayOfObjects[i].tempFora;
        }
        if(arrayOfObjects[i].tempDentro > tempDentroMax){
            tempDentroMax = arrayOfObjects[i].tempDentro;
        }
        if(arrayOfObjects[i].umidFora > umidForaMax){
            umidForaMax = arrayOfObjects[i].umidFora;
        }
        if(arrayOfObjects[i].umidDentro > umidDentroMax){
            umidDentroMax = arrayOfObjects[i].umidDentro;
        }
    }
    maximo = {
        MaxTempFora: tempForaMax,
        MaxTempDentro: tempDentroMax,
        MaxUmidFora: umidForaMax,
        MaxUmidDentro: umidDentroMax
    }
}

function calculaAfastamento(){
    afastamento = {};
    let tempForaAf = [];
    let tempDentroAf = [];
    let umidForaAf = [];
    let umidDentroAf = [];
    for(let i=0; i<arrayOfObjects.length; i++){
        tempDentroAf [i] = (arrayOfObjects[i].tempDentro - medias.MdTempDentro)
        tempForaAf [i] = (arrayOfObjects[i].tempFora - medias.MdTempFora)
        umidForaAf [i] = (arrayOfObjects[i].umidFora - medias.MdUmidFora)
        umidDentroAf [i] = (arrayOfObjects[i].umidDentro - medias.MdUmidDentro)
    }
    afastamento = {
        AfTempFora: tempForaAf,
        AfTempDentro: tempDentroAf,
        AfUmidFora: umidForaAf,
        AfUmidDentro: umidDentroAf
    }
}

function calculaCovariancia(){
    covariancia = {};
    let tempDentroXtempFora = 0;
    let umidDentroXumidFora = 0;
    let umidDentroXtempDentro = 0;
    let umidForaXtempFora = 0;

    for(let i=0; i<afastamento.AfTempDentro.length; i++){
        tempDentroXtempFora += (afastamento.AfTempDentro[i]*afastamento.AfTempFora[i]);
        umidDentroXumidFora += (afastamento.AfUmidDentro[i]*afastamento.AfUmidFora[i]);
        umidDentroXtempDentro += (afastamento.AfUmidDentro[i]*afastamento.AfTempDentro[i]);
        umidForaXtempFora += (afastamento.AfUmidFora[i]*afastamento.AfTempFora[i]);
    }

    covariancia = {
        CovTempDentroXtempFora: tempDentroXtempFora/afastamento.AfTempDentro.length,
        CovUmidDentroXumidFora: umidDentroXumidFora/afastamento.AfTempDentro.length,
        CovUmidDentroXtempDentro: umidDentroXtempDentro/afastamento.AfTempDentro.length,
        CovUmidForaXtempFora:  umidForaXtempFora/afastamento.AfTempDentro.length
    }

}

function calculaCorrelacao(){
    correlacao = {};
    correlacao = {
        CorTempDentroXtempFora: (covariancia.CovTempDentroXtempFora/(desvio.DTempDentro*desvio.DTempFora)),
        CorUmidDentroXumidFora: (covariancia.CovUmidDentroXumidFora/(desvio.DUmidDentro*desvio.DUmidFora)),
        CorUmidDentroXtempDentro: (covariancia.CovUmidDentroXtempDentro/(desvio.DUmidDentro*desvio.DTempDentro)),
        CorUmidForaXtempFora: (covariancia.CovUmidForaXtempFora/(desvio.DUmidFora*desvio.DTempFora))
    }
}