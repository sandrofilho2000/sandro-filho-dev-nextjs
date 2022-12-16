/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import React from 'react'

const Head_JSX = () => {

    return (
        <Head>
            <meta charset="utf-8" />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="Sandro Filho DEV | Front End" name="description" />
            <link href="https://sandrofilhodev.com" rel="canonical" />

            <meta content="index" name="robots" />
            {/* <!-- HTML Meta Tags --> */}
            <title>Sandro Filho DEV | Front End</title>
            <meta name="description"
                content="Tire sua ideia do papel, agenda uma call hoje mesmo e tenha um site rápido, ágil e campeão de clicks!" />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemprop="name" content="Sandro Filho DEV | Front End" />
            <meta itemprop="description"
                content="Tire sua ideia do papel, agenda uma call hoje mesmo e tenha um site rápido, ágil e campeão de clicks!" />
            <meta itemprop="image" content="	https://sandro-filho-dev-nextjs.vercel.app/_next/static/media/banner-dark-crimson.044ad266.webp" />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://sandrofilhodev.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Sandro Filho DEV | Front End" />
            <meta property="og:description"
                content="Tire sua ideia do papel, agenda uma call hoje mesmo e tenha um site rápido, ágil e campeão de clicks!" />
            <meta property="og:image" content="	https://sandro-filho-dev-nextjs.vercel.app/_next/static/media/banner-dark-crimson.044ad266.webp" />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sandro Filho DEV | Front End" />
            <meta name="twitter:description"
                content="Tire sua ideia do papel, agenda uma call hoje mesmo e tenha um site rápido, ágil e campeão de clicks!" />
            <meta name="twitter:image" content="	https://sandro-filho-dev-nextjs.vercel.app/_next/static/media/bancrimson-dark-red.044ad266.webp" />
            <link href="./assets/images/icon.ico" rel="shortcut icon" type="image/x-icon" />
            {/* <!-- Meta Tags Generated via http://heymeta.com --> */}



        </Head>
    )
}

export default Head_JSX