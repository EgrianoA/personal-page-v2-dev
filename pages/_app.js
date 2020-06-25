import { useEffect, useState } from 'react'
import Head from 'next/head';
import '../style/main.scss'

const _app = props => {
    const { Component, pageProps } = props;

    return (
        <div>
            <Head>
                <title>Egriano's Personal Page</title>
                <link rel="icon" href="/assets/think.png" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default _app;