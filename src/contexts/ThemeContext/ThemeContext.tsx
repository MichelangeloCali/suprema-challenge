'use client'

import {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

import { StyledComponentsRegistry } from '@/lib'
import { GlobalStyles, darkTheme, lightTheme } from '@/styles'

import type { ThemeContextType } from './types'

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
)

export const AppThemeProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const saveThemePreference = (themeName: 'light' | 'dark') => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themePreference', themeName)
    }
  }

  const getInitialThemePreference = (): 'light' | 'dark' => {
    let themePreference: string | null = null
    if (typeof window !== 'undefined') {
      console.log('aqui')

      themePreference = localStorage.getItem('themePreference')
      console.log('theme ==>', themePreference)
    }
    return themePreference === 'dark' ? 'dark' : 'light'
  }

  const [themeName, setThemeName] = useState<'light' | 'dark'>(
    getInitialThemePreference(),
  )

  console.log('themeName ==>', themeName)

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light',
    )
  }, [])

  const theme = useMemo(() => {
    console.log('themeName DENTRO ==>', themeName)

    return themeName === 'light' ? lightTheme : darkTheme
  }, [themeName])

  console.log('themeName FORA ==>', theme)

  useEffect(() => {
    saveThemePreference(themeName)
  }, [themeName])

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    const mqListener = (e: MediaQueryListEvent) => {
      setThemeName(e.matches ? 'dark' : 'light')
    }

    darkThemeMq.addEventListener('change', mqListener)

    console.log('useEffect', themeName)

    return () => {
      darkThemeMq.removeEventListener('change', mqListener)
    }
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </ThemeContext.Provider>
  )
}

// 'use client'

// import {
//   FunctionComponent,
//   ReactNode,
//   createContext,
//   useCallback,
//   useEffect,
// } from 'react'
// import styled, { ThemeProvider } from 'styled-components'
// import { useLocalStorage } from 'usehooks-ts'

// import StyledComponentsRegistry from '@/lib/registry'
// import { GlobalStyles, darkTheme, lightTheme } from '@/styles'
// import type { ThemeContextType } from './types'
// import { ThemeType } from '@/@types/styled'

// export const ThemeContext = createContext<ThemeContextType>(
//   {} as ThemeContextType,
// )

// export const AppThemeProvider: FunctionComponent<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [theme, setTheme] = useLocalStorage<ThemeType>('themePreference')

//   // const isLightTheme = theme.name === lightTheme.name

//   // const toggleTheme = useCallback(() => {
//   //   setTheme(isLightTheme ? darkTheme : lightTheme)
//   // }, [isLightTheme, setTheme])

//   useEffect(() => {
//     const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
//     const mqListener = (e: MediaQueryListEvent) => {
//       setTheme(e.matches ? darkTheme : lightTheme)
//     }

//     darkThemeMq.addEventListener('change', mqListener)

//     return () => {
//       darkThemeMq.removeEventListener('change', mqListener)
//     }
//   }, [setTheme])

//   return (
//     <ThemeContext.Provider value={{ theme }}>
//       <StyledComponentsRegistry>
//         <GlobalStyles />
//         <ThemeProvider theme={theme}>
//           <Container>{children}</Container>
//         </ThemeProvider>
//       </StyledComponentsRegistry>
//     </ThemeContext.Provider>
//   )
// }

// const Container = styled.div`
//   background-color: ${({ theme }) => theme.bodyColor};
//   color: ${({ theme }) => theme.textColor};
//   min-height: 100vh;
//   min-width: 100vw;
//   padding: 0;
//   margin: 0;
// `
