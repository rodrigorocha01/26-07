const fs = require("fs");

let paraEscrever = process.argv[2];

if(process.argv.length === 3 && (process.argv[2] != null &&
     process.argv[2] != "")){
        fs.appendFile('testeEscrita.txt', `${paraEscrever}\r\n`, erro => {
            if(erro){
                console.log("ERRO AO ESCREVER O ARQUIVO");
            }
            else{
                console.log("Deu bom - arquivo escrito com sucesso");
            }
        });    
}else{
     console.log("Fomra de funcionamento");
     console.log("<node><nome do arquivo> <texto ser gravado>");
}

