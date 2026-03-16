const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = xlsx.readFile(path.join(__dirname, 'BD_TABELAS_REGISTROS.xlsx'));

const allData = {};

workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    allData[sheetName] = data;
});

fs.writeFileSync(path.join(__dirname, 'dump_excel.json'), JSON.stringify(allData, null, 2));
console.log('Dump completed: ' + Object.keys(allData).join(', '));
