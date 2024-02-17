'use server'

import { BASE_URL_LOCAL, POKEMON_BASE_API_URL } from '@/config'
import type {
  PokemonType,
  PokemonResponseType,
  DetailedPokemonType,
} from './types'
import { Contact } from '@/@types/types'

export const getPokemons = async ({
  limit,
  offset,
}: {
  limit: number
  offset: number
}): Promise<PokemonType[]> => {
  try {
    const response = await fetch(
      `${POKEMON_BASE_API_URL}/pokemon?limit=${limit}&offset=${offset}`,
    )
    const data = await response.json()

    const pokemons: PokemonType[] = await Promise.all(
      data.results.map(async (pokemon: { url: string }, index: number) => {
        const detailsResponse = await fetch(pokemon.url)
        const detailsData: PokemonResponseType = await detailsResponse.json()
        const pokemonId = offset > 1 ? offset + index + 1 : index + 1
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

export const getPokemonById = async (
  pokemonId: number,
): Promise<DetailedPokemonType | null> => {
  try {
    const response = await fetch(`${POKEMON_BASE_API_URL}/pokemon/${pokemonId}`)
    const pokemonData = await response.json()

    if (!pokemonData) {
      throw new Error(`Pokémon with ID ${pokemonId} not found`)
    }

    const pokemon: DetailedPokemonType = {
      id: pokemonData.id,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      name: pokemonData.name,
      species: pokemonData.species,
      abilities: pokemonData.abilities.map(
        (ability: { ability: { name: string } }) => ability.ability.name,
      ),
      types: pokemonData.types.map(
        (type: { type: { name: string } }) => type.type.name,
      ),
      height: pokemonData.height,
      weight: pokemonData.weight,
      baseExperience: pokemonData.base_experience,
    }

    return pokemon
  } catch (error) {
    console.error('Error fetching Pokémon data:', error)
    throw new Error('Failed to fetch Pokémon data')
  }
}

export async function sendFormData(contact: Contact) {
  try {
    const response = await fetch(`${BASE_URL_LOCAL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })

    if (!response.ok) {
      throw new Error('Failed to submit contact form')
    }

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw new Error('Failed to submit contact form')
  }
}
