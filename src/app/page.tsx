import { Main } from './page.styles'

import { Card } from '@/components'
import { getPokemons } from './actions'
import type { PokemonType } from './types'

export default async function Home() {
  const pokemons: PokemonType[] = await getPokemons()

  return (
    <Main>
      <Card pokemons={pokemons} />
    </Main>
  )
}
