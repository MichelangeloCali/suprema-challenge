export type PokemonType = {
  id: number
  name: string
  abilities: string[]
  species: {
    name: string
  }
  types: {
    type: {
      name: string
    }
  }[]
  imageUrl: string
}

export type DetailedPokemonType = PokemonType & {
  height: number
  weight: number
  baseExperience: number
}

export type PokemonResponseType = {
  name: string
  abilities: {
    ability: {
      name: string
    }
  }[]
  species: {
    name: string
  }
  types: {
    type: {
      name: string
    }
  }[]
}
