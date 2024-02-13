'use client'

import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.bodyColor};
  color: ${({ theme }) => theme.textColor};
`

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.bodyColor}; */
  background-color: purple;
  color: ${({ theme }) => theme.textColor};
  align-self: center;
`
