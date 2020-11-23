import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const notas = [1, 2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Critica: '',
        Nota: '1'
    })
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json();
            setSucess(true)
            setRetorno(data)
        } catch (err) {

        }
    }

    const onChange = evt => {
        // Evt é o retorno do evento ocorrido ao digitar (mudar) algo no input (atributo onChange)
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            //Estamos pegando o valor antigo do set form e repassando ele para frente
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className='text-center font-bold my-4 text-2xl'>Criticas e sugestões</h1>
            <p className='mt-12 text-center mb-6'>Nosso restaurante sempre busca atender melhor seus clientes.<br />
                    Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            {!sucess && <div className='w-5/12 mx-auto '>
                <label className='font-bold'>Seu nome:</label>
                <input required type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-full' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                <label className='font-bold'>E-mail:</label>
                <input required type='email' className='p-4 block shadow bg-blue-100 my-2 rounded w-full' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                <label className='font-bold'>Whatsapp:</label>
                <input required type='tel' className='p-4 block shadow bg-blue-100 my-2 rounded w-full' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                <label className='font-bold'>Crítica/Sugestão:</label>
                <textarea required rows='7' minLength='10' maxlength='500' className='p-4 w-full block shadow bg-blue-100 my-2 rounded ' placeholder='Digite sua crítica/sugestão' onChange={onChange} name='Critica' value={form.Critica} />
                <label className='font-bold'>Nota:</label>
                {/* Criamos um array de 5 notas, para cirar o input radio atraves de um loop */}
                <div className='flex py-2 '>
                    {notas.map(nota => {
                        return (<label className='block  w-1/5 text-center'>{nota} <br /> <input required type='radio' name='Nota' value={nota} onChange={onChange} /></label>)
                    })}
                </div>
                <button className='mb-6 w-full bg-blue-400 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Enviar</button>
            </div>}
            {sucess &&
                <div className='w-1/5 mx-auto'>
                    <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão e/ou crítica</p>
                    {
                        retorno.ShowCoupon &&
                        <div className='text-center border p-4 mb-4'>
                            Seu cupom: <br />
                            <span className='font-bold'>{retorno.Cupom}</span>
                            <br />
                            <p className='italic text-red-600'>Anote esse cupom e apresente ao Garçon!</p>
                        </div>
                    }
                    {
                        retorno.ShowCoupon &&
                        <div className='text-center border p-4 mb-4'>
                            Você participou da promoção: <br />
                            <span className='font-bold'>{retorno.Promo}</span>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Pesquisa