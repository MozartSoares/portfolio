import styled from 'styled-components'

export const LinkBotao = styled.a`
  color: #fff;
  font-size: 14px;
  background-color: #4476bf;
  text-decoratio: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
