import React from 'react'
import Layout from '../components/Layout'
import '../css/styles.css'



const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps}> </Component>
        </Layout>
    )
}

export default MyApp