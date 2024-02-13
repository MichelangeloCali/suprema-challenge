'use client'

import { useTheme } from '@/hooks'
import { Container, Main } from './page.style'

export default function Home() {
  const { toggleTheme } = useTheme()

  return (
    <Main>
      <Container>
        Hey, its working
        <button onClick={toggleTheme}>theme</button>
      </Container>
    </Main>
  )
}

// 'use client'

// import { useTheme } from '@/hooks'
// import { Container } from './page.style'
// import { useLocalStorage } from 'usehooks-ts'
// import { darkTheme, lightTheme } from '@/styles'
// import { ThemeType } from '@/@types/styled'

// export default function Home() {
//   const [theme, setTheme] = useLocalStorage<ThemeType>('themePreference')

//   const isLightTheme = theme.name === lightTheme.name

//   return (
//     <main>
//       <Container>
//         Hey, its working
//         <button onClick={() => setTheme(isLightTheme ? darkTheme : lightTheme)}>
//           theme
//         </button>
//       </Container>
//     </main>
//   )
// }
