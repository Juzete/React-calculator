import styled from 'styled-components'

export const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spaces[4]}px;

  display: flex;
  flex-direction: column;
  align-items: space-between;
`
export const SettingsTittle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[5]}px};
`
