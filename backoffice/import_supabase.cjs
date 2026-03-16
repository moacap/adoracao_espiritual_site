const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const rawData = require('./dump_excel.json');

// Helper to pick only correct keys and map to lowercase
const mapKeys = (rows, validKeys) => rows.map(row => {
    const newRow = {};
    Object.keys(row).forEach(k => {
        let cleanKey = k.replace(/\s+/g, '_').toLowerCase();
        if (cleanKey === 'bairro_paroquia') cleanKey = 'bairro_paroquia';
        if (validKeys.includes(cleanKey)) {
            newRow[cleanKey] = row[k];
        } else {
            // Se encontrar a key errada que foi gerada na sheet do Excel 
            if (k === 'BAIRRO PAROQUIA' && validKeys.includes('bairro_paroquia')) {
                newRow['bairro_paroquia'] = row[k];
            }
        }
    });
    return newRow;
});

async function run() {
    try {
        console.log('Iniciando importação de dados para o Supabase...');

        // 1. PAIS
        if (rawData['PAIS']) {
            const paisData = mapKeys(rawData['PAIS'], ['id_pais', 'sigla_pais', 'nome_pais']);
            const { error } = await supabase.from('pais').upsert(paisData, { onConflict: 'id_pais' });
            if (error) console.error('Erro ao importar PAIS:', error.message);
            else console.log(`✓ PAIS importados: ${paisData.length}`);
        }

        // 2. SITUACAO
        if (rawData['SITUACAO']) {
            const situacaoData = mapKeys(rawData['SITUACAO'], ['id_situacao', 'desc_situacao']);
            const { error } = await supabase.from('situacao').upsert(situacaoData, { onConflict: 'id_situacao' });
            if (error) console.error('Erro ao importar SITUACAO:', error.message);
            else console.log(`✓ SITUACAO importados: ${situacaoData.length}`);
        }

        // 3. REGIONAL
        if (rawData['REGIONAL']) {
            const regData = mapKeys(rawData['REGIONAL'], ['id_regional', 'id_pais', 'desc_regional']);
            const { error } = await supabase.from('regional').upsert(regData, { onConflict: 'id_regional' });
            if (error) console.error('Erro ao importar REGIONAL:', error.message);
            else console.log(`✓ REGIONAL importados: ${regData.length}`);
        }

        // 4. ESTADO (sheet: ESTADOS)
        if (rawData['ESTADOS']) {
            const estadoData = mapKeys(rawData['ESTADOS'], ['id_estado', 'id_pais', 'nome_estado', 'sigla_estado']);
            const { error } = await supabase.from('estado').upsert(estadoData, { onConflict: 'id_estado' });
            if (error) console.error('Erro ao importar ESTADO:', error.message);
            else console.log(`✓ ESTADO importados: ${estadoData.length}`);
        }

        // 5. REGIONAL_ESTADO
        if (rawData['REGIONAL_ESTADO']) {
            const reData = mapKeys(rawData['REGIONAL_ESTADO'], ['id_pais', 'id_estado', 'id_regional']);
            // UPSERT sem primary key explícita definida na config inicial upsert config as [id_pais, id_estado, id_regional]
            const { error } = await supabase.from('regional_estado').upsert(reData, { onConflict: 'id_pais, id_estado, id_regional' });
            if (error) console.error('Erro ao importar REGIONAL_ESTADO:', error.message);
            else console.log(`✓ REGIONAL_ESTADO importados: ${reData.length}`);
        }

        // 6. ARQUIDIOCESE
        if (rawData['ARQUIDIOCESE']) {
            const arqData = mapKeys(rawData['ARQUIDIOCESE'], ['id_arquidiocese', 'id_estado', 'id_situacao', 'nome_arquidiocese', 'uf_arquidiocese', 'identifica_foto']);
            // Ajustar se alguma arquidiocese não tiver o ID ou Situacao
            const arqClean = arqData.map(a => ({...a, id_situacao: a.id_situacao || 1}));
            const { error } = await supabase.from('arquidiocese').upsert(arqClean, { onConflict: 'id_arquidiocese' });
            if (error) console.error('Erro ao importar ARQUIDIOCESE:', error.message);
            else console.log(`✓ ARQUIDIOCESE importados: ${arqClean.length}`);
        }

        // 7. PAROQUIA
        if (rawData['PAROQUIA']) {
            const parData = mapKeys(rawData['PAROQUIA'], ['id_paroquia', 'id_regional', 'id_arquidiocese', 'id_estado', 'id_coordenador', 'nome_paroquia', 'paroco_paroquia', 'endereco_paroquia', 'bairro_paroquia', 'cidade_paroquia', 'gps_latitude', 'gps_longitude', 'tipo_paroquia', 'foto_paroquia']);
            const { error } = await supabase.from('paroquia').upsert(parData, { onConflict: 'id_paroquia' });
            if (error) console.error('Erro ao importar PAROQUIA:', error.message);
            else console.log(`✓ PAROQUIA importados: ${parData.length}`);
        }

        // 8. FUNCOES
        if (rawData['FUNCOES']) {
            const funData = mapKeys(rawData['FUNCOES'], ['id_funcao', 'descricao_funcao', 'ordem_funcao', 'imagem']);
            const { error } = await supabase.from('funcoes').upsert(funData, { onConflict: 'id_funcao' });
            if (error) console.error('Erro ao importar FUNCOES:', error.message);
            else console.log(`✓ FUNCOES importadas: ${funData.length}`);
        }

        console.log('Importação concluída com sucesso!');
        process.exit(0);

    } catch (err) {
        console.error('Erro inesperado:', err);
        process.exit(1);
    }
}

run();
