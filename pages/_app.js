import '../styles/globals.css'
import { createContext } from 'react'
import  AppContext  from '../components/AppContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState } from 'react'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  const [themeContext, setThemeContext] = useState("")
  const [colorContext, setColorContext] = useState("")

  return (
    <AppContext.Provider value={{themeContext, setThemeContext, colorContext, setColorContext}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
