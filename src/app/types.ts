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
