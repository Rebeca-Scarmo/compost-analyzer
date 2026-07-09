function calculos(){
    calculaMinimo();
    calculaMaximo();
    calculaMedia();
    calculaVariancia();
    calculaDesvio();
    calculaAfastamento();
    calculaCovariancia();
    calculaCorrelacao();
    exibirResultados();
    criaGraficos();
}

function exibirResultados (){
    console.log(correlacao);
    document.getElementById("MdTempDentro").innerHTML = (medias.MdTempDentro).toFixed(4);
    document.getElementById("MdTempFora").innerHTML = (medias.MdTempFora).toFixed(4);
    document.getElementById("MdUmidDentro").innerHTML = (medias.MdUmidDentro).toFixed(4);
    document.getElementById("MdUmidFora").innerHTML = (medias.MdUmidFora).toFixed(4);

    document.getElementById("MinTempDentro").innerHTML = (minino.MinTempDentro).toFixed(4);
    document.getElementById("MinTempFora").innerHTML = (minino.MinTempFora).toFixed(4);
    document.getElementById("MinUmidDentro").innerHTML = (minino.MinUmidDentro).toFixed(4);
    document.getElementById("MinUmidFora").innerHTML = (minino.MinUmidFora).toFixed(4);

    document.getElementById("MaxTempDentro").innerHTML = (maximo.MaxTempDentro).toFixed(4);
    document.getElementById("MaxTempFora").innerHTML = (maximo.MaxTempFora).toFixed(4);
    document.getElementById("MaxUmidDentro").innerHTML = (maximo.MaxUmidDentro).toFixed(4);
    document.getElementById("MaxUmidFora").innerHTML = (maximo.MaxUmidFora).toFixed(4);

    document.getElementById("DesTempDentro").innerHTML = (desvio.DTempDentro).toFixed(4);
    document.getElementById("DesTempFora").innerHTML = (desvio.DTempFora).toFixed(4);
    document.getElementById("DesUmidDentro").innerHTML = (desvio.DUmidDentro).toFixed(4);
    document.getElementById("DesUmidFora").innerHTML = (desvio.DUmidFora).toFixed(4);

    document.getElementById("CorTempDentroXtempFora").innerHTML = (correlacao.CorTempDentroXtempFora || 0).toFixed(4);
    document.getElementById("CorUmidDentroXumidFora").innerHTML = (correlacao.CorUmidDentroXumidFora || 0).toFixed(4);
    document.getElementById("CorUmidDentroXtempDentro").innerHTML = (correlacao.CorUmidDentroXtempDentro || 0).toFixed(4);
    document.getElementById("CorUmidForaXtempFora").innerHTML = (correlacao.CorUmidForaXtempFora || 0).toFixed(4);
    
}