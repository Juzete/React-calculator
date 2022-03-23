import styled from 'styled-components'

export const CalcDisplay = styled.div`
  border-bottom: 1px solid grey;

  color: ${({ theme }) => theme.colors.secondary};

  height: 100px;

  margin: 0px ${({ theme }) => theme.spaces[3]}px;
  padding: 0px ${({ theme }) => theme.spaces[5]}px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  display: flex;
  justify-content: end;
  align-items: center;

  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
`
