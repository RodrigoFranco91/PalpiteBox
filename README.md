# PalpiteBox
Este projeto foi construído durante o curso Fullstack Master do DevPleno. Uma versão online deste projeto pode ser encontrada em: 
https://palpite-box-opal.vercel.app/

# Pré-requisitos:
Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

# Colocando em produção:
Este projeto foi colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential

SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64

SHEET_DOC_ID=id da planilha
```

# Construído com:
Você precisa do NodeJS e do NPM instalado em sua máquina.

- [NextJS](https://nextjs.org/) -The React Framework.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [Google Sheets](https://www.google.com/sheets/about/) - Planilhas online do Google

# Author:

- Rodrigo Franco - [Linkedin](https://br.linkedin.com/in/rodrigofrancodelima)

# Acknowledgments:

- Este projeto foi construído durante o curso Fullstack Master do [DevPleno](https://devpleno.com/).