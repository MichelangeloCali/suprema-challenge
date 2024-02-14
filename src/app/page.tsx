import Image from 'next/image'

import { Main } from './page.style'
import type { Pokemon } from './types'
import { getPokemons } from './actions'
import { Card } from '@/components/Card/Card'

export default async function Home() {
  const pokemons: Pokemon[] = await getPokemons()

  return (
    <Main>
      <ul>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.id}>
            <div>Name: {pokemon.name}</div>
            <div>Abilities: {pokemon.abilities.join(', ')}</div>
            <div>Species: {pokemon.species.name}</div>
            <div>
              Types: {pokemon.types.map((type) => type.type.name).join(', ')}
            </div>
            <Image
              src={pokemon.imageUrl}
              alt={pokemon.name}
              width={200}
              height={200}
              priority
            />
          </li>
        ))}
      </ul>
      <Card />
    </Main>
  )
}
