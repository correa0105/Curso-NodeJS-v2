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
        .then(res => {
            const action = res['action']

            if (action === 'Criar conta') {
                createAccount()
            } else if (action === 'Consultar saldo') {
                balance()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Sacar') {
                withdraw()
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit()
            }
        })
        .catch(err => console.log(err))

}

function createAccount() {
    console.log(chalk.bgGreen.black("Parabens por escolher nosso banco!"))
    console.log(chalk.green("Defina as opções da sua conta a seguir"))

    buildAccount()
}

function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then(res => {
        const accountName = res['accountName']

        if(!checkAccount(accountName)) {
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja depositar?'
            }
        ])
        .then(res => {
            const amount = res['amount']

            addAmount(accountName, amount)

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function balance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then(res => {
        const accountName = res['accountName']

        if(!checkAccount(accountName)) {
            return balance()
        }

        console.log(chalk.bgBlack.green('Seu saldo atual é de: R$' + getAccount(accountName).balance))
        operation()
    })
    .catch(err => console.log(err))
}

function withdraw() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then(res => {
        const accountName = res['accountName']

        if(!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }
        ])
        .then(res => {
            const amount = res['amount']

            subAmount(accountName, amount)

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

//Funções Helper

function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }
    return true
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(accountData.balance) + parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), err => console.log(err))

    console.log(chalk.green(`Foi depositado um valor de R$${amount} na sua conta!`))
    operation()
}

function subAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return withdraw()
    }

    if(accountData.balance < amount) {
        console.log(chalk.bgRed.black('Saldo insuficiente para saque, você possui o valor de: R$' + accountData.balance))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), err => console.log(err))

    console.log(chalk.green(`Foi retirado um valor de R$${amount} na sua conta!`))
    operation()
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: "Digite um nome para sua conta:"
        }
    ])
        .then(res => {
            const accountName = res['accountName']

            console.info(res['accountName'])

            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }

            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(chalk.bgRed.black("Esta conta já existe, escolha outro nome!"))
                buildAccount()
                return
            }

            fs.writeFileSync(`accounts/${accountName}.json`, `{"balance": 0}`, err => {
                console.log(err)
            })

            console.log(chalk.green('Parabéns, a sua conta foi criada!'))

            operation()
        })
        .catch(err => console.log(err))
}