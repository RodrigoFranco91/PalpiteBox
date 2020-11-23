import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <p className='mt-16 mb-8 text-center font-bold'>Esse projeto foi criado durante o curso FullStack Master da <a className='hover:underline text-pink-600' href='https://devpleno.com/' target='_blank'>DevPleno</a></p>
            <p className='mt-16 mb-8 text-center font-bold'>Tecnologias Utilizadas:</p>
            <ul className="text-center" >
                <li ><span className='font-bold' >Linguagem de Programação:</span> JavaScript (NodeJS).</li>
                <li ><span className='font-bold' >Framework/Biblioteca:</span> React, NextJS, TailwindCSS.</li>
                <li ><span className='font-bold' >Linguagens de Marcação e Estilo:</span> HTML5, CSS3.</li>
                <li ><span className='font-bold' >Banco de Dados:</span> Google Sheets.</li>
                <li ><span className='font-bold' >Controlador de Versão:</span><a href='' target='_blank'> Git/Github.</a></li>
                <li ><span className='font-bold' >Hospedagem:</span> Vercel.</li>
            </ul>
        </div>
    )
}

export default Sobre