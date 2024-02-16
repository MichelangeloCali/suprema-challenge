'use client'

import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  min-width: 100vw;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  color: ${({ theme }) => theme.textColor};
`
