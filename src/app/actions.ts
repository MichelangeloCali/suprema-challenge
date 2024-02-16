import { BASE_API_URL } from '@/config'
import type { PokemonType, PokemonResponseType } from './types'

const maxPokemons = 12

export const getPokemons = async (): Promise<PokemonType[]> => {
  try {
    const response = await fetch(`${BASE_API_URL}/pokemon?limit=${maxPokemons}`)
    const data = await response.json()

    const pokemons: PokemonType[] = await Promise.all(
      data.results.map(async (pokemon: { url: string }, index: number) => {
        const detailsResponse = await fetch(pokemon.url)
        const detailsData: PokemonResponseType = await detailsResponse.json()
        const pokemonId = index + 1
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`

        return {
          id: pokemonId,
          imageUrl: imageUrl,
          name: detailsData.name,
          species: detailsData.species,
          abilities: detailsData.abilities.map(
            (ability) => ability.ability.name,
          ),
          types: detailsData.types.map((type) => type.type.name),
        }
      }),
    )
    return pokemons
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch Pokemon data')
  }
}
