import 'styled-components'

type ThemeType = {
  name: string
  borderRadius: string
  bodyColor: string
  textColor: string
  imgBackground: string
  pallete: {
    common: {
      black: string
      white: string
      grey: string
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
    pokemonsElementColor: typeof elementColors
  }
  fontSize: {
    sm: string
    md: string
    lg: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export type Contact = {
  id: string
  name: string
  email: string
  message: string
}
