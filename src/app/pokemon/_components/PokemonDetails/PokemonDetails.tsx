/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

import { getPokemonById } from '@/app/actions'

import {
  Container,
  BackButton,
  ContentLoading,
  Title,
  Content,
  ContentImage,
  ContentDetails,
  Details,
  Text,
  SubText,
} from './PokemonDetails.styles'
import type { DetailedPokemonType } from '@/app/types'
import { LoadMoreArticles } from '@/components'

export const PokemonDetails = ({ pokemonId }: { pokemonId: string }) => {
  const [pokemonDetails, setPokemonDetails] =
    useState<DetailedPokemonType | null>(null)

  const router = useRouter()

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
      <BackButton onClick={() => router.back()}>
        <IoArrowBackCircleOutline size={32} />
      </BackButton>

      <Content>
        <Title>{pokemonDetails.name}</Title>
        <ContentImage>
          <Image
            src={pokemonDetails?.imageUrl}
            alt={pokemonDetails?.name}
            width={400}
            height={400}
            priority
          />
        </ContentImage>

        <ContentDetails>
          <Details>
            <Text>Espécie:</Text>
            <SubText>{pokemonDetails.species.name}</SubText>
          </Details>

          <Details>
            <Text>Poder:</Text>
            {pokemonDetails.abilities.map((item) => (
              <SubText key={item}>{item}</SubText>
            ))}
          </Details>

          <Details>
            <Text>Elemento:</Text>
            {pokemonDetails.types.map((item: any) => (
              <SubText key={item}>{item}</SubText>
            ))}
          </Details>

          <Details>
            <Text>Altura:</Text>
            <SubText>{pokemonDetails.height}</SubText>
          </Details>

          <Details>
            <Text>Peso:</Text>
            <SubText>{pokemonDetails.weight}</SubText>
          </Details>

          <Details>
            <Text>Experiência Base:</Text>
            <SubText>{pokemonDetails.baseExperience}</SubText>
          </Details>
        </ContentDetails>
      </Content>
    </Container>
  )
}
