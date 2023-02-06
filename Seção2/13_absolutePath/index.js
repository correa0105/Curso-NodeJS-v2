const path = require('path');

// Path Absoluto
console.log(path.resolve('teste.txt'));

// Formar um Path
const midFolder = 'relatorios';
const fileName = 'matheus.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath)