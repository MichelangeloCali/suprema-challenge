export interface Pokemon {
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

export interface PokemonResponse {
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
