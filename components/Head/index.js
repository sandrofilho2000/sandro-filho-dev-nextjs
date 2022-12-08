import Head from 'next/head'
import React from 'react'

const Head_JSX = () => {
    function analytics(){
        window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-QD7F8DJ669');
    }
    return (
        <Head>
            <meta charset="utf-8" />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="Sandro Filho DEV | Front End" name="description" />
            <link href="https://sandrofilhodev.com" rel="canonical" />

            {(function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                    'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-PGZLDCW')}

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QD7F8DJ669"></script>

            {analytics()}

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