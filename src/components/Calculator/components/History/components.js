import styled from 'styled-components'

export const CalcHistory = styled.div`
  border-left: 1px solid
    ${({ theme }) => theme.secondaryLight};

  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: ${({ theme }) => theme.spaces[3]}px 0px;

  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 7;
`
export const HistoryElements = styled.div`
  margin: 12px;
`
