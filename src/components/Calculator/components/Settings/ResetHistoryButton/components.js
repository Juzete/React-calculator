import styled from 'styled-components'

export const ResetButton = styled.button`
  width: 200px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px};
  padding: ${({ theme }) => theme.spaces[1]}px;
  padding-left: ${({ theme }) => theme.spaces[3]}px;

  margin-top: ${({ theme }) => theme.spaces[3]}px;

  display: flex;
`
