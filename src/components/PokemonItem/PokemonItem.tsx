/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import {
  Content,
  ContentImage,
  Title,
  Type,
  ContentText,
  ContentAbilitieAndElement,
  Text,
  TextElement,
} from './PokemonItem.styles'
import type { PokemonType } from '@/app/types'

type PokemonItemPropsType = {
  pokemon: PokemonType
  isLast: boolean
  onRequestNewPage: () => Promise<void>
}

export const PokemonItem = (props: PokemonItemPropsType) => {
  const { pokemon, isLast, onRequestNewPage } = props
  const itemRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  useEffect(() => {
    if (!itemRef?.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        onRequestNewPage()
        observer.unobserve(entry.target)
      }
    })

    observer.observe(itemRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLast])

  return (
    <Content
      key={pokemon.id}
      ref={itemRef}
      onClick={() => router.push(`/pokemon/${pokemon?.id}`)}
    >
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

      <ContentAbilitieAndElement>
        {pokemon.abilities.map((item, index) => {
          return (
            <ContentText key={`${index}-${item}`}>
              <Text>{item}</Text>
            </ContentText>
          )
        })}
      </ContentAbilitieAndElement>
      <ContentAbilitieAndElement>
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
}
