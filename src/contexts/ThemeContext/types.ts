import { ThemeType } from '@/@types/styled'

export type ThemeContextType = {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
  theme: ThemeType
}
