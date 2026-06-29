let arrayOfObjects = [];
document.getElementById("BtnUpload").addEventListener("click",formataDados);

function formataDados (){
    arrayOfObjects = [];
    const arquivo = document.getElementById("file").files[0];
    const leitor = new FileReader();
    leitor.onload = evento;
    leitor.readAsText(arquivo);
}

function evento (e){
    const conteudo = e.target.result;
    const coletas = conteudo.split("\n");
    for(let i=0; i<coletas.length;i++){
        if(coletas[i].trim() !== ""){
            const dados = coletas[i].split(",");
            const leitura = {
                tempDentro: parseFloat(dados[0]),
                tempFora: parseFloat(dados[1]),
                umidDentro: parseFloat(dados[2]),
                umidFora: parseFloat(dados[3]),
                timeStamp: dados[4]
    	    }
            arrayOfObjects.push(leitura);
        }
    }
}