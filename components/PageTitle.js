import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
    return (
        <Head>
            <title>{title} - PalpiteBox</title>
            <link rel='icon' href='/logo_palpitebox.png'></link>
        </Head>
    )
}

export default PageTitle