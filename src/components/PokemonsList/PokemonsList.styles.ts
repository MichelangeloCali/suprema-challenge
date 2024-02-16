import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  gap: 2rem;
  width: 100%;
  padding: 24px;
  padding-right: calc((100vw - 1440px) / 2);
  padding-left: calc((100vw - 1440px) / 2);
`
