/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'

import { getPokemons } from '@/app/actions'
import { PokemonItem } from '../PokemonItem'
import { Container } from './PokemonsList.styles'
import type { PokemonType } from '@/app/types'

export const PokemonsList = ({
  initialData,
}: {
  initialData: PokemonType[]
}) => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>(initialData)
  const [offset, setOffset] = useState(1)

  const handleNewPage = async () => {
    const newOffset = offset + 12
    setOffset(newOffset)
    const result = await getPokemons({ limit: 12, offset: newOffset })
    setPokemonList([...pokemonList, ...result])
  }

  return (
    <Container>
      {pokemonList.map((pokemon, index) => {
        return (
          <PokemonItem
            key={index}
            pokemon={pokemon}
            isLast={index === pokemonList.length - 1}
            onRequestNewPage={handleNewPage}
          />
        )
      })}
    </Container>
  )
}
