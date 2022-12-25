const fs = require('fs')
const path = require('path')

// Criar uma pasta

// fs.mkdir(path.join(__dirname, "/teste"), (error)=> {
//     if (error){
//         return console.log("Erro:", error);
//     }else{
//         console.log("Pasta Criada com sucesso");

//     }
// });

// Criar um arquivo (local, conteudo, callback)
// fs.writeFile(path.join(__dirname, '/teste', 'test.txt'), 'HelloW', (error) => {
//     if (error) {
//         return console.log("ERROR: ", error)
//     }else{
//         console.log("Arquivo criado com sucesso!");

//     }
// } );

// Adicionar conteudo ao arquivo
// fs.appendFile(path.join(__dirname, "/teste","test.txt"), "hello Willian", (error)=>{
//     if (error){
//         return console.log("Erro: ", error);
//     }else {
//         console.log("Arquivo modificado com sucesso");
//     }
// } );

//Ler arquivo (path, sistema de caracter, callback(erro, e data) ) data conteudo que esta lendo
fs.readFile(path.join(__dirname, 'teste', 'test.txt'), 'utf8', (error,data) =>{
    if (error){
        return console.log("Erro:", error);
    }else{
        console.log(data);
    }
}  );