import '../styles/globals.css'

import AppContext from '../components/AppContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState } from 'react'
import Script from 'next/script'
import RadioPlayer from '../components/HomePage/RadioPlayer'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  const [themeContext, setThemeContext] = useState("")
  const [colorContext, setColorContext] = useState("")

  return (
    <AppContext.Provider value={{ themeContext, setThemeContext, colorContext, setColorContext }}>
      
      <Component {...pageProps} />

      <RadioPlayer/>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QD7F8DJ669" />

      <Script id="google-analytics" strategy="afterInteractive" >
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-QD7F8DJ669');
    
          `
        }
      </Script>

    </AppContext.Provider>
  )
}

export default MyApp
