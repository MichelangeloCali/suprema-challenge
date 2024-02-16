import styled from 'styled-components'

const elementColors = {
  grass: '#78C850',
  poison: '#A040A0',
  fire: '#F08030',
  flying: '#A890F0',
  water: '#6890F0',
  bug: '#A8B820',
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 1rem;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${({ theme }) => theme.pallete.common.grey};
  border-radius: 8px;
  cursor: pointer;
`

export const ContentImage = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 85%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.imgBackground};
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.pallete.common.black};
  background-color: ${({ theme }) => theme.pallete.primary.contrastText};
  width: 50%;
  padding: 4px 12px;
  border-radius: 0 8px 8px 0;
`

export const Type = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.pallete.common.white};
  text-align: center;
`

export const ContentAbilitieAndElement = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 28px;
`

export const ContentText = styled.div<{ type?: keyof typeof elementColors }>`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ type, theme }) =>
    type
      ? theme.pallete.pokemonsElementColor[type] || theme.imgBackground
      : theme.imgBackground};
`

export const TextElement = styled.p`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.pallete.common.black};
`

export const Text = styled.p`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.textColor};
`
