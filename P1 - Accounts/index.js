import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

operation()

function operation() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Qual operação você deseja realizar?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ])
    .then((res) => {
        const action = res['action']

        if(action === 'Criar conta') {
            createAccount()
        }
        if(action === 'Consultar saldo') {
            
        }
        if(action === 'Depositar') {
            
        }
        if(action === 'Sacar') {
            
        }
        if(action === 'Sair') {
            
        }
    })
    .catch(err => console.log((err)))

}

function createAccount() {
    console.log(chalk.bgGreen.black("Parabens por escolher nosso banco!"))
    console.log(chalk.green("Defina as opções da sua conta a seguir"))

    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: "Digite um nome para sua conta:"
        }
    ])
    .then((res) => {
        const accountName = res['accountName']

        console.info(res['accountName'])

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("Esta conta já existe, escolha outro nome!"))
            buildAccount()
        }

        fs.writeFileSync
    })
    .catch((err) => console.log(err))
}