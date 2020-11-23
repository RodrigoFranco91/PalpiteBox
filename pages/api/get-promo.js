import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

//PARAMETRO É O ID DA PLANILHA
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

    try {
        //Loga na planilha
        // await doc.useServiceAccountAuth(credentials)
        //Logando os dados pegando os dados por variaveis de ambiente
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)

        })
        //Carrega a planilha - O arquivo completo
        await doc.loadInfo();

        //Estamos pegando (selecionando) a terceira planilha, pois temos 3 planilhas dentro do arquivo DOC.
        const sheet = doc.sheetsByIndex[2]

        //PRIMEIRO - Estamos apenas CARREGANDO as celulas que queremos pegar os valores!
        await sheet.loadCells('A1:B3')

        //SEGUNDO - Agora podemos pegar o valor da celula, no caso da celula linha 2, coluna 0.
        const mostrarPromocao = sheet.getCell(2, 0)

        //SEGUNDO - Agora podemos pegar o valor da celula, no caso da celula linha 2, coluna 1.
        const textoDaPromocao = sheet.getCell(2, 1)

        res.end(JSON.stringify({
            showCoupon: mostrarPromocao.value === 'VERDADEIRO',
            message: textoDaPromocao.value
        }))
    } catch (err) {
        res.end(JSON.stringify({
            showCoupon: 'false',
            message: ''
        }))
        console.log(err)
    }
}