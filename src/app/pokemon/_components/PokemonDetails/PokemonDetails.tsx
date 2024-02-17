/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { getPokemonById } from '@/app/actions'

import {
  Container,
  ContentLoading,
  Title,
  Content,
  ContentImage,
  ContentDetails,
  Details,
  Text,
  SubText,
  ContentAbilitieAndElement,
} from './PokemonDetails.styles'
import type { DetailedPokemonType } from '@/app/types'
import { BackButton, LoadMoreArticles } from '@/components'

export const PokemonDetails = ({ pokemonId }: { pokemonId: string }) => {
  const [pokemonDetails, setPokemonDetails] =
    useState<DetailedPokemonType | null>(null)

  useEffect(() => {
    getPokemonById(Number(pokemonId))
      .then((pokemon) => {
        setPokemonDetails(pokemon)
      })
      .catch((error) => {
        console.error('Error fetching Pokemon:', error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!pokemonDetails)
    return (
      <ContentLoading>
        <LoadMoreArticles />
      </ContentLoading>
    )

  return (
    <Container>
      <BackButton />

      <Content>
        <Title>{pokemonDetails.name}</Title>
        <ContentImage>
          <Image
            src={pokemonDetails?.imageUrl}
            alt={pokemonDetails?.name}
            width={360}
            height={360}
            priority
          />
        </ContentImage>

        <ContentDetails>
          <Details>
            <Text>Espécie</Text>
            <SubText>{pokemonDetails.species.name}</SubText>
          </Details>

          <Details>
            <Text>Poder</Text>
            <ContentAbilitieAndElement>
              {pokemonDetails.abilities.map((item) => (
                <SubText key={item}>{item}</SubText>
              ))}
            </ContentAbilitieAndElement>
          </Details>

          <Details>
            <Text>Elemento</Text>
            <ContentAbilitieAndElement>
              {pokemonDetails.types.map((item: any) => (
                <SubText key={item} type={item as any}>
                  {item}
                </SubText>
              ))}
            </ContentAbilitieAndElement>
          </Details>

          <Details>
            <Text>Altura</Text>
            <SubText>{pokemonDetails.height}</SubText>
          </Details>

          <Details>
            <Text>Peso</Text>
            <SubText>{pokemonDetails.weight}</SubText>
          </Details>

          <Details>
            <Text>Experiência Base</Text>
            <SubText>{pokemonDetails.baseExperience}</SubText>
          </Details>
        </ContentDetails>
      </Content>
    </Container>
  )
}
