import { PokemonDetails } from '../_components'

export default function PokemonPage({
  params,
}: {
  params: { pokemonId: string }
}) {
  const pokemonId = params?.pokemonId

  return <PokemonDetails pokemonId={pokemonId} />
}
