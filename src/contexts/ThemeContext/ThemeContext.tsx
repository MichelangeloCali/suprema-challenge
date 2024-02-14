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

  // const getInitialThemePreference = (): 'light' | 'dark' => {
  //   let themePreference: string | null = null
  //   if (typeof window !== 'undefined') {
  //     themePreference = localStorage.getItem('themePreference')
  //   }
  //   return themePreference === 'dark' ? 'dark' : 'light'
  // }

  const [themeName, setThemeName] = useState<'light' | 'dark'>(
    // getInitialThemePreference(),
    'light',
  )

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light',
    )
  }, [])

  const theme = useMemo(() => {
    return themeName === 'light' ? lightTheme : darkTheme
  }, [themeName])

  useEffect(() => {
    saveThemePreference(themeName)
  }, [themeName])

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    const mqListener = (e: MediaQueryListEvent) => {
      setThemeName(e.matches ? 'dark' : 'light')
    }

    darkThemeMq.addEventListener('change', mqListener)

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
