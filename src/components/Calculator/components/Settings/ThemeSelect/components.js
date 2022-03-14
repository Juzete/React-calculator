import styled from 'styled-components'

export const Select = styled.select`
  width: 200px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px};
  padding: ${({ theme }) => theme.spaces[1]}px;
  padding-left: ${({ theme }) => theme.spaces[3]}px;
  display: flex;
`
export const SelectWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces[4]}px;
`
