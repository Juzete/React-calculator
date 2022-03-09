import styled from 'styled-components'

export const CalcKeypad = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: ${({ theme }) => theme.spaces[4]}px;

  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 7;
`
export const CalcButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;
  margin: 16px 0px 16px 64px;
  border-radius: 16px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  &:hover {
    cursor: pointer;
    background: #f9f3e9;
  }
`
