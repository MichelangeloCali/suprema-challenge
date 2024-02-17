import styled, { keyframes } from 'styled-components'

const changeColorAnimation = (color: string[]) => keyframes`
  0% {
    background-color: ${color[0]};
  }
  25% {
    background-color: ${color[1]};
  }
  50% {
    background-color: ${color[2]};
  }
  75% {
    background-color: ${color[3]};
  }
  100% {
    background-color: ${color[0]};
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: calc(100vh - 128px);
  padding: 24px;

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`

export const ContentLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

export const Title = styled.h1`
  grid-column: 1;
  grid-row: 1;
  align-self: baseline;
  justify-self: baseline;
  width: 50%;
  padding: 4px 12px;
  border-radius: 0 8px 8px 0;
  margin-top: 48px;
  color: ${({ theme }) => theme.pallete.common.black};
  background-color: ${({ theme }) => theme.pallete.primary.contrastText};
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.pallete.common.grey};
  border-radius: 8px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 24px 0;
    height: 100%;
  }
`

export const ContentImage = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  max-width: 280px;
  max-height: 400px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.pallete.common.white};
  animation: ${({ theme }) =>
      changeColorAnimation([
        theme.pallete.pokemonsElementColor.grass,
        theme.pallete.pokemonsElementColor.poison,
        theme.pallete.pokemonsElementColor.fire,
        theme.pallete.pokemonsElementColor.flying,
        theme.pallete.pokemonsElementColor.water,
        theme.pallete.pokemonsElementColor.bug,
      ])}
    10s linear infinite;

  @media (max-width: 1024px) {
    margin-top: 150px;
    margin-bottom: 24px;
  }
`

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 24px;
  width: fit-content;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.pallete.common.black};

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Details = styled.div`
  display: flex;
`

export const Text = styled.div`
  display: flex;
  padding-right: 48px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  /* color: ${({ theme }) => theme.pallete.common.white}; */
`

export const SubText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.pallete.common.white};
  padding-right: 16px;
`
