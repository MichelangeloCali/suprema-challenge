import { ThemeType } from '@/@types/types'

export type ThemeContextType = {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
  theme: ThemeType
}
