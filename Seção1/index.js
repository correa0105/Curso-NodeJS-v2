/* const minimist = require("minimist"); */
/* const chalk = require("chalk"); */
const inquirer = require("inquirer");
const soma = require("./soma").soma;

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/* const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const a = minimist(process.argv).a;
const b = minimist(process.argv).b;

soma(a, b) 

readline.question("Quanto é 1+1? ", (resposta) => {
    if (resposta == 2) {
        console.log(chalk.green("Resposta Correta!"));
    } else {
        console.log(chalk.red("Resposta Errada!"));
    }

    readline.close();
});
*/

eventEmitter.on("start", () => {
    console.log("Durante");
})

console.log("Antes");

eventEmitter.emit("start");

console.log("Depois");

inquirer.prompt([
    {
        name: "v1",
        message: "Valor de A"
    },
    {
        name: "v2",
        message: "Valor de B"
    }
]).then(res => {
    soma(parseInt(res.v1),parseInt(res.v2))
}).catch(err => {
    console.log(err)
})

//FOI APRENDIDO TRY/CATCH, EVENT LOOP, EVENT EMITTER, SYNC E ASYNC POREM NÃO FOI NECESSÁRIO ANOTAR