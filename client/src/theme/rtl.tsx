import React from 'react'
import { createMuiTheme, StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles'
import rtl from 'jss-rtl'
import { create } from 'jss'
import CssBaseLine from '@material-ui/core/CssBaseline'
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f5f5f5'
    }
  },
  typography: {
    fontFamily: 'Vazir'
  },
  direction: 'rtl',
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          padding: '50px'
        }
      }
    }
  }
})

const RTL = (props:React.PropsWithChildren<{}>) => {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseLine/>
        {props.children}
      </ThemeProvider>
    </StylesProvider>
  )
}
export default RTL
