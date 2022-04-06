import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid grey;
  border-top: none;
  display: grid;
  @media screen and (max-width: 1240px) {
    overflow: auto;
  }
`
