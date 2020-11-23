import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <p className='mt-16 mb-8 text-center font-bold'>Dados para Contato:</p>
            <ul className="text-center" >
                <li ><span className='font-bold' >Desenvolvedor:</span> Rodrigo Franco de Lima.</li>
                <li ><span className='font-bold' >Telefone:</span> (35) 99740-0907</li>
                <li ><span className='font-bold' >Site:</span><a href='https://rodrigofrancodelima.com.br/' target='_blank'> www.rodrigofrancodelima.com.br</a></li>
            </ul>
        </div>
    )
}

export default Contato