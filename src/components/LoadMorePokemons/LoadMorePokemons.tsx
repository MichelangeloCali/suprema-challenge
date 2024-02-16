'use client'

import ClipLoader from 'react-spinners/ClipLoader'

import { Container } from './LoadMorePokemons.styles'

export const LoadMoreArticles = () => {
  return (
    <Container>
      <ClipLoader
        color={'#444'}
        loading={true}
        size={40}
        aria-label="Loading Spinner"
      />
    </Container>
  )
}
