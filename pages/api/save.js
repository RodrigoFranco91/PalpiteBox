import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

//PARAMETRO É O ID DA PLANILHA
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const gerarCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
    try {
        //Loga na planilha
        //await doc.useServiceAccountAuth(credentials)

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)

        })

        //Carrega a planilha - O arquivo completo
        await doc.loadInfo();

        //Estamos pegando (selecionando) a segunda planilha, pois temos 3 planilhas dentro do arquivo DOC.
        const sheet = doc.sheetsByIndex[1]

        //Estamos pegando (selecionando) a terceira planilha, pois temos 3 planilhas dentro do arquivo DOC.
        const sheetPromocao = doc.sheetsByIndex[2]

        //Estamos apenas CARREGANDO as celulas que queremos pegar os valores!
        await sheetPromocao.loadCells('A1:B3')

        //Agora podemos pegar o valor da celula, no caso da celula linha 2, coluna 0.
        const mostrarPromocao = sheetPromocao.getCell(2, 0)

        //Agora podemos pegar o valor da celula, no caso da celula linha 2, coluna 1.
        const textoDaPromocao = sheetPromocao.getCell(2, 1)

        //Header da planilha: Nome	Email	Whatsapp	Cupom	Promo

        let Cupom = ''
        let Promo = ''

        if (mostrarPromocao.value === 'VERDADEIRO') {
            //gerar cupom
            Cupom = gerarCupom()
            Promo = textoDaPromocao.value
        }

        //Estou pegando os dados que foram enviados na request, no caso é o form
        const data = JSON.parse(req.body)
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
            Nota: parseInt(data.Nota),
            Critica: data.Critica,
            Cupom,
            Promo
        })

        //Colocando na response da quest o proprio corpo de quest
        res.end(JSON.stringify({
            //Cupom começa vazio, se tiver preenchido é pq foi grado
            ShowCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
    } catch (err) {
        res.end('error')
    }
}