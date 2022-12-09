import '../styles/globals.css'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'
import AppContext from '../components/AppContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState } from 'react'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  const [themeContext, setThemeContext] = useState("")
  const [colorContext, setColorContext] = useState("")

  return (
    <AppContext.Provider value={{ themeContext, setThemeContext, colorContext, setColorContext }}>
      <Component {...pageProps} />

    <GoogleAnalytics  measurementId="G-QD7F8DJ669"/>

    </AppContext.Provider>
  )
}

export default MyApp
