'use client'

export const elementColors = {
  grass: '#78C850',
  poison: '#A040A0',
  fire: '#F08030',
  flying: '#A890F0',
  water: '#6890F0',
  bug: '#A8B820',
  normal: '#A8A77A',
  electric: '#F8D030',
  ground: '#E0C068',
  fairy: '#EE99AC',
  fighting: '#C03028',
  psychic: '#F85888',
  rock: '#B8A038',
  steel: '#B8B8D0',
  ice: '#98D8D8',
  ghost: '#705898',
}

export const darkTheme = {
  name: 'dark',
  borderRadius: '4px',
  bodyColor: '#121212',
  textColor: '#a5a5a5',
  imgBackground: '#303030',
  pallete: {
    common: {
      black: '#000000',
      white: '#ffffff',
      grey: '#222',
    },
    primary: {
      main: '#121212',
      contrastText: '#f59e00',
    },
    secondary: {
      main: '#f59e00',
      contrastText: '#ffffff',
    },
    button: {
      primary: {
        main: '#f59e00',
        contrastText: '#121212',
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#121212',
      },
    },
    pokemonsElementColor: elementColors,
  },
  fontSize: {
    sm: '14px',
    md: '18px',
    lg: '22px',
  },
}
