

let medias = {};

function calculaMedia(){
    medias = [];
    let tempForaMd = 0;
    let tempDentroMd = 0;
    let umidDentroMd = 0;
    let umidForaMd = 0;
    let cont = 0;
    for(let i=0; i<arrayOfObjects.length; i++){
        tempDentroMd += arrayOfObjects[i].tempDentro;
        tempForaMd += arrayOfObjects[i].tempFora;
        umidDentroMd += arrayOfObjects[i].umidDentro;
        umidForaMd += arrayOfObjects[i].umidFora;
        cont++;
    }
    medias = {
        MdTempDentro :  tempDentroMd = tempDentroMd/cont,
        MdTempFora :  tempForaMd =tempForaMd/cont,
        MdUmidDentro : umidDentroMd = umidDentroMd/cont,
        MdUmidFora:  umidForaMd = umidForaMd/cont
    } 
   
}