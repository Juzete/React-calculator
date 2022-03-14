import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  padding: ${({ theme }) => theme.spaces[4]}px;
`

export const Heading = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[2]}px};

  padding: 0px 32px 16px;
`

export const Header = styled.header`
  width: 100%;
  height: 120px;

  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navigation = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[2]}px};
  text-decoration: none;

  padding: 0px 24px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
