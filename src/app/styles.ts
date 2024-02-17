'use client'

import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  min-width: 100vw;
  padding: 104px 0 24px 0;
  padding-right: calc((100vw - 1440px) / 2);
  padding-left: calc((100vw - 1440px) / 2);
  margin: 0;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  color: ${({ theme }) => theme.textColor};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 24px;
  width: 100%;
  height: 80px;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 30;
  background-color: ${({ theme }) => theme.pallete.common.grey};
  opacity: 70%;
`

export const Nav = styled.nav`
  color: white;
`

export const LinkText = styled.p`
  color: ${({ theme }) => theme.pallete.primary.contrastText};
  font-size: ${({ theme }) => theme.fontSize.lg};
`

export const NotFoundContent = styled.div`
  display: grid;
  padding: 24px;
  grid-template-rows: auto 1fr;
  align-items: center;
  height: calc(100vh - 128px);
`

export const TextNotFound = styled.p`
  color: ${({ theme }) => theme.pallete.common.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
`
