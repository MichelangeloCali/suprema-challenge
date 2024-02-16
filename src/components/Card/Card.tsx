/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'

import {
  Container,
  Content,
  ContentImage,
  Title,
  Type,
  ContentText,
  ContentAbilitieAndElement,
  Text,
  TextElement,
} from './Card.styles'
import type { PokemonType } from '@/app/types'

export const Card = ({ pokemons }: { pokemons: PokemonType[] }) => {
  return (
    <Container>
      {pokemons.map((pokemon) => {
        return (
          <Content key={pokemon.id}>
            <Title>{pokemon.name}</Title>

            <ContentImage>
              <Image
                src={pokemon.imageUrl}
                alt={pokemon.name}
                width={200}
                height={200}
                priority
              />
            </ContentImage>

            <Type>{pokemon.species.name}</Type>

            <ContentAbilitieAndElement
              style={{
                display: 'flex',
                gap: '8px',
                marginLeft: '28px',
              }}
            >
              {pokemon.abilities.map((item, index) => {
                return (
                  <ContentText key={`${index}-${item}`}>
                    <Text>{item}</Text>
                  </ContentText>
                )
              })}
            </ContentAbilitieAndElement>
            <ContentAbilitieAndElement
              style={{
                display: 'flex',
                gap: '8px',
                marginLeft: '28px',
              }}
            >
              {pokemon.types.map((item, index) => {
                return (
                  <ContentText key={`${index}-${item}`} type={item as any}>
                    <TextElement>{item as any}</TextElement>
                  </ContentText>
                )
              })}
            </ContentAbilitieAndElement>
          </Content>
        )
      })}
    </Container>
  )
}
