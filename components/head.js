import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const SectionHead = () => {
    const { query } = useRouter()
    console.log(useRouter())
    return (
        <Head>
            <title>{query.menu || 'Dev Nick'}</title>
            <meta name="description" content="DEv Nick" />
            <meta property="og:title" content="DEv Nick " />
            <meta property="og:description" content="DEv Nick" />
        </Head>
    )
}

export default SectionHead