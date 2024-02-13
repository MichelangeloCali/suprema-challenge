import 'styled-components'

type ThemeType = {
  name: string
  borderRadius: string
  bodyColor: string
  textColor: string
  pallete: {
    common: {
      black: string
      white: string
    }
    primary: {
      main: string
      contrastText: string
    }
    secondary: {
      main: string
      contrastText: string
    }
    button: {
      primary: {
        main: string
        contrastText: string
      }
      secondary: {
        main: string
        contrastText: string
      }
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
