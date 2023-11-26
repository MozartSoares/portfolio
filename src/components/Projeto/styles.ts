import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.corDaBorda};
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao}};
  text-decoratio: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
