import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <div className={styles.divfooter} >
            <div className='container mx-auto text-center font-bold text-white'>
                Desenvolvido por: {' '} <a className='hover:underline' href='https://rodrigofrancodelima.com.br' target='_blank'>Rodrigo Franco</a> {' '}
                <div className={styles.divSocial}>
                    <a className={styles.linkedin} href='https://br.linkedin.com/in/rodrigofrancodelima' target='_blank'>Linkedin</a> {' '}
                    <a className={styles.git} href='https://github.com/RodrigoFranco91' target='_blank'>GitHub</a>{' '}
                </div>
                <div className='mt-2'>
                    <img className={styles.rodape} src='/logo_semana_fsm.png' />
                    <img className={styles.rodape} src='/logo_devpleno.png' />
                </div>
            </div>

        </div>
    )
}

export default Footer