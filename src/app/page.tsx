import { PokemonsList, LoadMoreArticles } from '@/components'
import { getPokemons } from './actions'
import type { PokemonType } from './types'

const maxPokemonsPerPage = 12

export default async function Home() {
  const initialData: PokemonType[] = await getPokemons({
    limit: maxPokemonsPerPage,
    offset: 0,
  })

  return (
    <>
      <PokemonsList initialData={initialData} />
      <LoadMoreArticles />
    </>
  )
}
